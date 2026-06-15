"use client";

import { useEffect, useRef, ReactNode } from "react";
import clsx from "clsx";

type RevealVariant = "up" | "scale" | "left" | "right";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  staggerDelay?: number;
  threshold?: number;
  variant?: RevealVariant;
  delay?: number;
};

export function ScrollReveal({
  children,
  className,
  stagger = false,
  staggerDelay = 80,
  threshold = 0.15,
  variant = "up",
  delay = 0
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.classList.add("is-visible");
      if (stagger) {
        el.querySelectorAll(".scroll-reveal-item").forEach((child) => {
          child.classList.add("is-visible");
        });
      }
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");

          if (stagger) {
            const items = el.querySelectorAll(".scroll-reveal-item");
            items.forEach((child, index) => {
              const item = child as HTMLElement;
              item.style.setProperty("--reveal-delay", `${delay + index * staggerDelay}ms`);
              item.classList.add("is-visible");
            });
          }

          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay, stagger, staggerDelay, threshold]);

  return (
    <div
      ref={ref}
      data-reveal={variant}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={clsx(stagger ? undefined : "scroll-reveal", className)}
    >
      {children}
    </div>
  );
}
