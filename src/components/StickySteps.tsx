"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { PhoneMockup } from "./PhoneMockup";

type Step = {
  icon: ReactNode;
  stepNumber: number;
  title: string;
  copy: string;
  screen: string;
};

export function StickySteps({ steps }: { steps: Step[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              entry.target.getAttribute("data-step-index")
            );
            if (!isNaN(index)) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -40% 0px" }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
      {/* Steps column */}
      <div className="space-y-16 lg:space-y-40 lg:pb-[32vh]">
        {steps.map((step, i) => (
          <div
            key={step.title}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
            data-step-index={i}
            className={`transition-all duration-500 ${
              activeIndex === i
                ? "opacity-100 translate-x-0"
                : "lg:opacity-30 lg:translate-x-2"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-grape/[0.12] text-plum">
                {step.icon}
              </div>
              <span className="rounded-full bg-blush px-3 py-1 text-xs font-semibold text-muted">
                Step {step.stepNumber}
              </span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-ink lg:text-3xl">
              {step.title}
            </h3>
            <p className="mt-3 max-w-md leading-7 text-muted">{step.copy}</p>

            {/* Mobile only: show phone inline */}
            <div className="mt-8 lg:hidden">
              <PhoneMockup
                src={step.screen}
                alt={`${step.title} screen`}
                className="max-w-[200px]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: sticky phone with crossfade */}
      <div className="hidden lg:block">
        <div className="sticky top-24 flex h-[calc(100vh-7rem)] items-center justify-center">
          <div className="relative w-full max-w-[min(250px,calc((100vh-9rem)*0.44))]">
            {steps.map((step, i) => (
              <div
                key={step.screen}
                className={`transition-all duration-500 ease-out ${
                  i === 0 ? "relative" : "absolute inset-0"
                } ${
                  activeIndex === i
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0"
                }`}
              >
                <PhoneMockup
                  src={step.screen}
                  alt={`${step.title} screen`}
                  className="max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
