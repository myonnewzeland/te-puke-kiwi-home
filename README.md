# Te Puke Holiday Park

Website for **Te Puke Holiday Park** — accommodation for seasonal kiwifruit workers, backpackers, and RSE employers in Te Puke, Bay of Plenty, New Zealand.

> Live site: [tepukeholidaypark.co.nz](https://www.tepukeholidaypark.co.nz)  
> Repository: [myonnewzeland/te-puke-kiwi-home](https://github.com/myonnewzeland/te-puke-kiwi-home)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Language | TypeScript 5 |
| Build tool | Vite 8 (React SWC plugin) |
| Styles | Tailwind CSS 4 + CSS variables |
| UI components | shadcn/ui (Radix UI primitives) |
| Routing | Custom router (no React Router) |
| SEO | react-helmet-async + JSON-LD schemas |
| Fonts | Playfair Display (headings) + DM Sans (body) — self-hosted |
| Analytics | Microsoft Clarity |
| Hosting | Cloudflare Pages |

---

## Lighthouse Scores

| Device | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Desktop | 100 | 100 | 100 | 100 |
| Mobile | 97-98 | 100 | 100 | 100 |

Mobile scores vary between 97-98 due to Lighthouse's simulated 3G throttling. The site achieves near-perfect scores through extensive performance optimizations.

---

## Performance Optimizations

### Critical CSS Inlining
- All above-the-fold CSS is inlined in `<head>` to eliminate render-blocking requests
- Main Tailwind bundle loads asynchronously via `media="print" onload="this.media='all'"` trick

### LCP (Largest Contentful Paint) Optimization
- Static hero image rendered in HTML before React hydrates (`#hero-static` div)
- Hero image preloaded with `fetchpriority="high"` and `imagesrcset`
- Hero text elements use CSS animations without initial `opacity:0` (prevents layout thrashing)
- LCP reduced from ~3s to ~1.6s on throttled mobile

### Image Optimization
- All images converted to WebP format
- Responsive `srcset` with 400w, 800w, 1080w variants
- Gallery images lazy-loaded with `loading="lazy"`
- Self-hosted fonts preloaded to prevent FOUT/CLS

### JavaScript Optimization
- Fine-grained code splitting via manual chunks:
  - `vendor-react` — React core (cached forever)
  - `vendor-ui` — Icons and utilities
  - `i18n` — Translation data (52KB, loaded in parallel)
- Tree-shaking enabled, dead code eliminated
- No legacy polyfills (targets es2020+)

### Build Optimizations
- Brotli + Gzip pre-compression
- Assets <4KB inlined as base64
- CSS code-splitting per page
- Esbuild minification (removes console.* in production)

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero section with three quick-access cards, photo gallery, FAQ |
| `/accommodation` | Accommodation | Pods, caravans, cabins and on-site facilities |
| `/seasonal-work` | Seasonal Work | Kiwifruit harvest/pruning seasons, visa info, external links |
| `/rse-accommodation` | RSE Accommodation | Information for RSE scheme employers |
| `/contact` | Contact | Contact form, phone, address, Google Maps embed, WhatsApp |

---

## Development

**Requirements:** Node.js 18+

```sh
# Clone
git clone https://github.com/myonnewzeland/te-puke-kiwi-home.git
cd te-puke-kiwi-home

# Install dependencies
npm install

# Start dev server (http://localhost:8080)
npm run dev
```

### Available Scripts

```sh
npm run dev        # Development server on port 8080
npm run build      # Production build to dist/
npm run preview    # Preview production build locally (port 4173)
npm run lint       # ESLint
```

### Testing Lighthouse Locally

```sh
# Build and preview
npm run build
npm run preview

# Run Lighthouse (in another terminal)
npx lighthouse http://localhost:4173 --preset=desktop
npx lighthouse http://localhost:4173  # mobile (default)
```

---

## Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui components (Radix UI based)
│   ├── Layout.tsx   # Navbar + main + Footer wrapper
│   ├── Navbar.tsx   # Fixed header with mobile hamburger menu
│   ├── Footer.tsx   # Footer with contact details
│   └── Lightbox.tsx # Photo gallery lightbox
├── i18n/
│   ├── translations.ts    # EN/ES/DE/JA translations
│   └── LanguageContext.tsx # Language provider
├── hooks/
│   └── use-mobile.tsx     # Detects viewport < 768px
├── lib/
│   └── utils.ts           # cn() = clsx + tailwind-merge
├── pages/                 # One file per route
│   ├── Index.tsx          # Home page
│   ├── Accommodation.tsx
│   ├── SeasonalWork.tsx
│   ├── RseAccommodation.tsx
│   └── Contact.tsx
├── App.tsx                # Custom router + code splitting
└── main.tsx               # React root + hydration cleanup

public/
├── images/                # WebP images with responsive variants
├── fonts/                 # Self-hosted DM Sans + Playfair Display
├── _headers               # Cloudflare cache headers
└── sitemap.xml           # Auto-generated sitemap
```

---

## Key Files

- `index.html` — Critical inline CSS, JSON-LD schemas (LodgingBusiness, LocalBusiness, BreadcrumbList), font preloads, static hero placeholder
- `vite.config.ts` — Async CSS plugin, manual chunks strategy, Brotli/Gzip compression
- `public/_headers` — Cache headers for images (immutable 1 year) and assets
- `src/App.tsx` — Custom router with React.lazy() code splitting
- `src/main.tsx` — Removes static hero after hydration via `requestIdleCallback`

---

## SEO Implementation

- JSON-LD structured data for LodgingBusiness, LocalBusiness, and BreadcrumbList
- Open Graph and Twitter Card meta tags
- Canonical URLs and hreflang tags
- Semantic HTML with ARIA labels
- Sitemap.xml auto-generated in build

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

No IE11 support (es2020+ target).

---

## Deployment

Automatically deployed to Cloudflare Pages on push to `main` branch.

Build command: `npm run build`  
Output directory: `dist`

---

## License

© 2024 Te Puke Holiday Park. All rights reserved.
