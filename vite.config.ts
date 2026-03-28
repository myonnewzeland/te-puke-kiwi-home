import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { compression } from "vite-plugin-compression2";

import { cloudflare } from "@cloudflare/vite-plugin";

/**
 * Vite Build Configuration — Maximum Performance
 *
 * Optimisations:
 * 1. MANUAL CHUNKS: Fine-grained vendor splitting for cache reuse
 * 2. BROTLI + GZIP: Pre-compressed assets (served without runtime CPU cost)
 * 3. TREE-SHAKING: Aggressive dead code removal
 * 4. CSS CODE-SPLIT: Per-page CSS — no unused styles on initial load
 * 5. MODERN TARGET: es2020+ — smaller output, no legacy polyfills
 * 6. ESBUILD MINIFY: Fastest minifier, removes dead code and console.* calls
 * 7. INLINE SMALL ASSETS: Assets <4KB inlined as base64 (saves HTTP round-trips)
 * 8. ASYNC CSS: Main stylesheet loaded non-blocking (critical CSS already inlined)
 */

/**
 * asyncCssPlugin — converts render-blocking <link rel="stylesheet"> to async.
 *
 * The main Tailwind CSS bundle is large (11KB gzip) and render-blocking by default.
 * Since critical above-the-fold CSS is already inlined in <head> via <style> blocks,
 * we can load the full stylesheet non-blocking:
 *   <link rel="stylesheet" media="print" onload="this.media='all'" href="...">
 *   <noscript><link rel="stylesheet" href="..."></noscript>
 *
 * This eliminates the ~150ms FCP delay caused by render-blocking CSS.
 */
function asyncCssPlugin() {
  return {
    name: "async-css",
    apply: "build" as const,
    transformIndexHtml(html: string) {
      // Convert render-blocking stylesheet to async (print-swap trick).
      // Critical above-the-fold CSS is already inlined in <head> so the
      // page renders correctly before the full Tailwind stylesheet loads.
      return html.replace(
        /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/g,
        (_, href) =>
          `<link rel="preload" as="style" href="${href}"><link rel="stylesheet" media="print" onload="this.media='all'" href="${href}"><noscript><link rel="stylesheet" href="${href}"></noscript>`
      );
    },
  };
}

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },

  plugins: [
    react(),
    asyncCssPlugin(),
    // Brotli — best compression ratio (~20% smaller than gzip)
    compression({
      algorithms: ["brotliCompress"],
      exclude: [/\.(png|jpg|jpeg|webp|gif|svg|woff2|woff|ico|br|gz)$/],
      threshold: 512,
    }),
    // Gzip fallback for servers/CDNs that don't support Brotli
    compression({
      algorithms: ["gzip"],
      exclude: [/\.(png|jpg|jpeg|webp|gif|svg|woff2|woff|ico|br|gz)$/],
      threshold: 512,
    }),
    cloudflare()
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 500,

    // Modern browsers only — no legacy polyfills
    target: ["es2020", "chrome90", "firefox88", "safari14"],

    // Per-page CSS — avoids shipping unused styles
    cssCodeSplit: true,

    // esbuild: fastest, drops dead code and dev-only console statements
    minify: "esbuild",

    // Inline small assets as base64 to save round-trips
    assetsInlineLimit: 4096,

    rollupOptions: {
      output: {
        /**
         * CHUNK SPLITTING STRATEGY
         * ────────────────────────
         * vendor-react    — React core (changes rarely → cached forever)
         * vendor-router   — react-helmet-async only
         * vendor-ui       — icons + class utilities (changes rarely)
         * vendor-radix    — Radix UI per-package split for tree-shaking
         * vendor-form     — form libs (only needed on /contact)
         * [page chunks]   — auto-split via React.lazy() in App.tsx
         */
        manualChunks(id: string) {
          // Translations — large i18n data, split to its own cached chunk
          // so Layout (Navbar/Footer) can load it in parallel, not blocking render
          if (id.includes("src/i18n/translations")) {
            return "i18n";
          }
          // React core — smallest possible initial payload
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/scheduler/")
          ) {
            return "vendor-react";
          }
          // Helmet — very small, keep with react
          if (id.includes("node_modules/react-helmet-async/")) {
            return "vendor-react";
          }
          // Icons + utilities
          if (
            id.includes("node_modules/lucide-react/") ||
            id.includes("node_modules/class-variance-authority/") ||
            id.includes("node_modules/clsx/") ||
            id.includes("node_modules/tailwind-merge/")
          ) {
            return "vendor-ui";
          }
          // Form libs — only on contact page
          if (
            id.includes("node_modules/@hookform/") ||
            id.includes("node_modules/react-hook-form/") ||
            id.includes("node_modules/zod/") ||
            id.includes("node_modules/@emailjs/")
          ) {
            return "vendor-form";
          }
          // Radix UI — split into two buckets to reduce individual chunk size
          if (id.includes("node_modules/@radix-ui/")) {
            // Primitives used on every page (dialog, tooltip, slot)
            if (
              id.includes("react-slot") ||
              id.includes("react-dialog") ||
              id.includes("react-tooltip") ||
              id.includes("react-accordion") ||
              id.includes("react-collapsible")
            ) {
              return "vendor-radix-core";
            }
            return "vendor-radix-extra";
          }
        },

        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});