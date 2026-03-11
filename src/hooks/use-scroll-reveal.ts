import { useEffect, useRef, RefObject } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Observe the container and all children with [data-reveal]
    const children = el.querySelectorAll("[data-reveal]");
    children.forEach((child) => observer.observe(child));
    if (el.hasAttribute("data-reveal")) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
