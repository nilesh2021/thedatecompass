"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";

const faqs = [
  {
    question: "What is TheDateCompass?",
    answer:
      "TheDateCompass is an independent comparison website that helps adults discover third-party dating platforms and AI companion services by country. We do not own or operate the platforms listed here.",
  },
  {
    question: "Is TheDateCompass a dating website?",
    answer:
      "No. We do not host profiles, chats, or memberships. We compare third-party platforms and redirect you to the provider you choose.",
  },
  {
    question: "How do affiliate links work?",
    answer:
      "Some links on this website are affiliate links. If you visit a partner platform through those links, we may earn a commission at no extra cost to you.",
  },
  {
    question: "Why browse by country?",
    answer:
      "Dating platform availability, pricing, and eligibility can vary by region. Country pages help you find offers that are relevant where you are.",
  },
  {
    question: "What dating categories can I compare?",
    answer:
      "Depending on the country page, you can compare casual dating, gay dating, mature dating, adult social, and AI companion platforms.",
  },
  {
    question: "Are these platforms free to join?",
    answer:
      "Each provider sets its own pricing. Many offer free registration with optional premium upgrades. Always confirm terms on the destination site.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-[#0b0b0b] py-24">
      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#E83E9B]/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-fuchsia-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E83E9B]/30 bg-[#E83E9B]/10 px-5 py-2 text-sm font-semibold text-[#E83E9B]">
            <HelpCircle size={16} />
            Frequently asked questions
          </span>

          <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl">
            Everything you need to know
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Learn how TheDateCompass works, how affiliate links are used, and
            how to compare dating platforms by country.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:border-[#E83E9B]/40"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8 sm:py-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E83E9B]/15 sm:flex">
                      <ShieldCheck size={20} className="text-[#E83E9B]" />
                    </div>
                    <span className="text-lg font-bold text-white sm:text-xl">
                      {faq.question}
                    </span>
                  </div>

                  <ChevronDown
                    size={22}
                    className={`shrink-0 text-[#E83E9B] transition duration-300 ${
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
                    <p className="px-6 pb-6 leading-7 text-white/65 sm:px-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#countries"
            className="text-sm font-semibold text-[#E83E9B] transition hover:text-pink-300"
          >
            Browse dating offers by country →
          </Link>
        </div>
      </div>
    </section>
  );
}
