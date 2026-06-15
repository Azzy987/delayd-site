"use client";

import { useState, ReactNode } from "react";
import { ChevronRight } from "lucide-react";

type AccordionItem = {
  question: string;
  answer: ReactNode;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="divide-y divide-blush rounded-[28px] glass-card overflow-hidden">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index}>
            <button
              onClick={() => toggle(index)}
              className="flex w-full cursor-pointer items-center justify-between gap-5 p-6 text-left text-lg font-semibold text-ink transition-colors duration-200 hover:bg-blush/30"
              aria-expanded={isOpen}
            >
              {item.question}
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blush text-plum transition-transform duration-300 ${
                  isOpen ? "rotate-90" : ""
                }`}
              >
                <ChevronRight className="h-4 w-4" />
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 leading-8 text-muted [&_strong]:font-semibold [&_strong]:text-ink">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
