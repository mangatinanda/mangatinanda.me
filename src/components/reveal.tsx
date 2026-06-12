"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
}

// Progressive-enhancement scroll reveal. Server HTML ships fully visible
// (SEO, no-JS, LCP); elements below the viewport are hidden only once JS
// runs, then revealed by IntersectionObserver. Honors prefers-reduced-motion.
// The toggle is a DOM attribute, not React state — it is purely
// presentational and never needs a re-render.
export default function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top <= window.innerHeight) return;

    el.dataset.reveal = "hidden";
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          el.dataset.reveal = "visible";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      el.dataset.reveal = "visible";
    };
  }, []);

  return (
    <div ref={ref} data-reveal="visible" className={className}>
      {children}
    </div>
  );
}
