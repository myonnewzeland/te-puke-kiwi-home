/**
 * App.tsx — Root component and client-side router
 *
 * HOW ROUTING WORKS
 * -----------------
 * This app does NOT use React Router. Instead, it reads window.location.pathname
 * once on load and renders the matching page component.
 *
 * Trade-off: simpler code, but navigating between pages triggers a full page
 * reload (standard <a href> links). This is acceptable for a mostly-static
 * marketing site and avoids shipping the React Router library.
 *
 * HOW LAZY LOADING WORKS
 * ----------------------
 * The home page (Index) is eagerly imported so it renders immediately on first
 * paint with no extra waterfall. Other pages are lazy-loaded since they are
 * rarely the entry point and their JS is not needed until navigation.
 *
 * PROVIDERS
 * ---------
 * - LanguageProvider: makes the current language (EN/ES/DE/JA) available
 *   throughout the app via the useLanguage() hook.
 */
import { lazy, Suspense } from "react";
import { LanguageProvider } from "@/i18n/LanguageContext";
// Index is eagerly imported — it's the most common entry point (/)
// and should render on first paint without an extra chunk waterfall.
import Index from "./pages/Index";

// Other pages are lazily imported — their JS chunk is only fetched when needed.
const Accommodation = lazy(() => import("./pages/Accommodation"));
const SeasonalWork = lazy(() => import("./pages/SeasonalWork"));
const RseAccommodation = lazy(() => import("./pages/RseAccommodation"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

/**
 * getPage()
 *
 * Reads the current URL path and returns the matching page component.
 * Called once at module load time — not on every render.
 *
 * Example:
 *   URL: /accommodation  →  Accommodation component
 *   URL: /unknown-path   →  NotFound component
 */
function getPage() {
  const path = window.location.pathname;
  if (path === "/" || path === "") return Index;
  if (path.startsWith("/accommodation")) return Accommodation;
  if (path.startsWith("/seasonal-work")) return SeasonalWork;
  if (path.startsWith("/rse-accommodation")) return RseAccommodation;
  if (path.startsWith("/contact")) return Contact;
  return NotFound;
}

// Resolve the page component once (before rendering)
const Page = getPage();

/**
 * PageFallback
 *
 * Shown while a lazy page chunk is downloading.
 * Kept minimal to avoid layout shift — just a centred loading indicator.
 */
const PageFallback = () => (
  <div
    className="flex h-screen w-full items-center justify-center"
    role="status"
    aria-label="Loading page"
  >
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" aria-hidden="true" />
    <span className="sr-only">Loading…</span>
  </div>
);

/**
 * App — top-level component tree
 *
 * Wrapping order matters:
 *   LanguageProvider (outermost) → makes language available everywhere
 *   Suspense                     → catches lazy-load pending state
 *   Page                         → the actual page content
 */
const App = () => (
  <LanguageProvider>
    <Suspense fallback={<PageFallback />}>
      <Page />
    </Suspense>
  </LanguageProvider>
);

export default App;
