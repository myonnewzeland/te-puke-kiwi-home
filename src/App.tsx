import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { LanguageProvider } from "@/i18n/LanguageContext";

const Index = lazy(() => import("./pages/Index"));
const Accommodation = lazy(() => import("./pages/Accommodation"));
const SeasonalWork = lazy(() => import("./pages/SeasonalWork"));
const RseAccommodation = lazy(() => import("./pages/RseAccommodation"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="flex h-screen w-full items-center justify-center">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/accommodation" element={<Accommodation />} />
              <Route path="/seasonal-work" element={<SeasonalWork />} />
              <Route path="/rse-accommodation" element={<RseAccommodation />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
