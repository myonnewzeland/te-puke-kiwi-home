import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Remove the static hero placeholder once React has rendered
// Uses requestIdleCallback (or setTimeout fallback) to avoid blocking hydration
const removeStaticHero = () => {
  const el = document.getElementById("hero-static");
  if (el) el.remove();
};
if ("requestIdleCallback" in window) {
  requestIdleCallback(removeStaticHero);
} else {
  setTimeout(removeStaticHero, 200);
}
