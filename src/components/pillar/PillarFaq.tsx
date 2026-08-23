"use client";

import { useState } from "react";
import { ScrollReveal } from "../ScrollReveal";

export function PillarFaq({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <ScrollReveal key={faq.q} delay={0.04 * i}>
            <div
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: "var(--surface)",
                border: `1px solid ${isOpen ? "rgba(219, 171, 102, 0.2)" : "var(--border-subtle)"}`,
              }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                aria-expanded={isOpen}
              >
                <span
                  className="text-base font-medium pr-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  {faq.q}
                </span>
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg transition-all duration-300"
                  style={{
                    color: isOpen ? "var(--gold)" : "var(--text-muted)",
                    background: isOpen ? "rgba(219, 171, 102, 0.1)" : "transparent",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p
                  className="px-6 pb-5 text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
