import { lazy, Suspense } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";

const Index = lazy(() => import("./pages/Index"));
const Accommodation = lazy(() => import("./pages/Accommodation"));
const SeasonalWork = lazy(() => import("./pages/SeasonalWork"));
const RseAccommodation = lazy(() => import("./pages/RseAccommodation"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function getPage() {
  const path = window.location.pathname;
  if (path === "/" || path === "") return Index;
  if (path.startsWith("/accommodation")) return Accommodation;
  if (path.startsWith("/seasonal-work")) return SeasonalWork;
  if (path.startsWith("/rse-accommodation")) return RseAccommodation;
  if (path.startsWith("/contact")) return Contact;
  return NotFound;
}

const Page = getPage();

const App = () => (
  <LanguageProvider>
    <TooltipProvider>
      <Suspense fallback={<div className="flex h-screen w-full items-center justify-center">Loading...</div>}>
        <Page />
      </Suspense>
    </TooltipProvider>
  </LanguageProvider>
);

export default App;
