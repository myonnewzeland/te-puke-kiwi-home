/**
 * useScrollReveal — Scroll-triggered animation hook
 *
 * HOW IT WORKS
 * ------------
 * Returns a ref to attach to a container element. When the container enters
 * the viewport, this hook adds the "visible" CSS class to every child that
 * has a [data-reveal] attribute.
 *
 * The "visible" class is defined in index.css and triggers a CSS animation
 * (typically a fade-in + slide-up via the .facility-card.visible rule).
 *
 * Once an element becomes visible it is "unobserved" — the animation only
 * plays once, not every time the user scrolls past.
 *
 * HOW TO USE IT
 * -------------
 * 1. Call the hook in your component:
 *      const listRef = useScrollReveal<HTMLUListElement>();
 *
 * 2. Attach the ref to the wrapper element:
 *      <ul ref={listRef}>
 *
 * 3. Add data-reveal to every child you want animated:
 *      <li data-reveal>...</li>
 *
 * 4. Add the corresponding CSS animation for .visible in index.css.
 *
 * WHY IntersectionObserver INSTEAD OF scroll EVENTS?
 * ---------------------------------------------------
 * IntersectionObserver fires off the main thread and doesn't block JS
 * execution. A "scroll" event listener fires dozens of times per second and
 * can cause jank. IntersectionObserver is the modern, performance-safe way.
 *
 * Docs: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 *
 * @template T  The HTML element type of the container (default: HTMLDivElement)
 * @returns     A React ref to attach to the container element
 */
import { useEffect, useRef, RefObject } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // threshold: 0.15 means the callback fires when 15% of the element
    // is visible in the viewport — triggers the animation early enough
    // that it doesn't feel "late" but not before the user notices it.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add class to trigger CSS animation
            entry.target.classList.add("visible");
            // Stop watching once visible — animation plays only once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Observe all [data-reveal] children inside the container
    const children = el.querySelectorAll("[data-reveal]");
    children.forEach((child) => observer.observe(child));

    // Also observe the container itself if it has [data-reveal]
    if (el.hasAttribute("data-reveal")) observer.observe(el);

    // Cleanup: disconnect observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return ref;
}
