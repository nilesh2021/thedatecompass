"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

export default function UKFaq({
  items,
  eyebrow = "FAQ · UK",
  title = "Questions about dating offers for UK visitors",
  subtitle = "Clear answers about this United Kingdom comparison page and how to use the listings responsibly.",
}: {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#0c1230] py-16 font-display text-cream sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">
            <HelpCircle size={14} />
            {eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-serif-accent text-lg italic text-cream/65 sm:text-xl">
            {subtitle}
          </p>
        </div>

        <div className="mt-14 divide-y divide-cream/10 border-y border-cream/10">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left sm:py-6"
                >
                  <span className="text-lg font-bold sm:text-xl">{faq.question}</span>
                  <ChevronDown
                    size={22}
                    className={`shrink-0 text-[#ff2d87] transition duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 leading-7 text-cream/65">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
