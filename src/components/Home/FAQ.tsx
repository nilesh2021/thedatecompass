"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  ShieldCheck,
 
} from "lucide-react";

const faqs = [
  {
    question: "What is TheDateCompass?",
    answer:
      "TheDateCompass is an independent comparison website that helps adults discover third-party dating platforms available in different countries. We do not own or operate the dating platforms listed on our website.",
  },
  {
    question: "Is TheDateCompass a dating website?",
    answer:
      "No. TheDateCompass is not a dating platform. We compare third-party dating websites and redirect visitors to the provider they choose.",
  },
  {
    question: "How do affiliate links work?",
    answer:
      "Some links on our website are affiliate links. If you visit one of our partner platforms through these links, we may earn a commission at no additional cost to you.",
  },
  {
    question: "Do I create my dating profile on TheDateCompass?",
    answer:
      "No. Your account, messages, payments, and personal information are managed entirely by the third-party platform you choose.",
  },
  {
    question: "Are all dating platforms free?",
    answer:
      "Each provider has its own pricing. Some platforms offer free registration while others provide premium features through paid memberships.",
  },
  {
    question: "Are these platforms available worldwide?",
    answer:
      "No. Platform availability varies by country. TheDateCompass organizes recommendations by country so you can quickly find available options.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-28">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#E83E9B]/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-fuchsia-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-5xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#E83E9B]/30 bg-[#E83E9B]/10 px-5 py-2 text-sm font-semibold text-[#E83E9B]">
            <HelpCircle size={16} />
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Everything You Need to Know
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
            Learn more about TheDateCompass, how our recommendations work,
            and what to expect before visiting one of our partner platforms.
          </p>

        </div>

        {/* FAQ */}

        <div className="mt-20 space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (

              <div
                key={faq.question}
                className="overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:border-[#E83E9B]/40"
              >

                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-7 text-left"
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E83E9B]/15">

                      <ShieldCheck
                        size={22}
                        className="text-[#E83E9B]"
                      />

                    </div>

                    <span className="text-xl font-bold text-white">
                      {faq.question}
                    </span>

                  </div>

                  <ChevronDown
                    size={24}
                    className={`text-[#E83E9B] transition duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />

                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p className="px-8 pb-8 leading-8 text-white/65">
                      {faq.answer}
                    </p>

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