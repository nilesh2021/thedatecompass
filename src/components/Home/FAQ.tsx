"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is TheDateCompass?",
    answer:
      "TheDateCompass is an independent dating site comparison directory for adults. We help you discover dating offers, online dating platforms, and AI companion services by country so you can find better connections without guessing which provider fits.",
  },
  {
    question: "Is TheDateCompass a dating website or dating app?",
    answer:
      "No. TheDateCompass is not a dating website and does not host profiles, chats, or memberships. We compare third-party dating platforms and AI girlfriend / AI companion services, then send you to the provider you choose.",
  },
  {
    question: "What dating offers can I compare?",
    answer:
      "You can compare casual dating sites, adult dating platforms, gay dating apps, mature dating offers, niche adult social communities, and AI companion platforms. Each dating offer is listed with category focus so you can pick the connection style you want.",
  },
  {
    question: "Which sites are best for casual dating?",
    answer:
      "Casual dating platforms are built for flirty chats, low-pressure meetups, and fast connections. Browse our country pages and casual dating categories to compare dating offers that focus on chemistry and easy messaging rather than long onboarding.",
  },
  {
    question: "Do you list AI companion and AI girlfriend platforms?",
    answer:
      "Yes. Alongside traditional online dating sites, we compare AI companion and AI girlfriend platforms for private chats, custom personalities, and always-available virtual connections. These dating-adjacent offers are useful if you want conversation without a live meetup.",
  },
  {
    question: "Can I find gay dating and LGBTQ+ connection options?",
    answer:
      "Yes. Our comparisons include gay dating sites and inclusive LGBTQ+ dating platforms designed for men seeking men and community-first connections. Check country and category pages for gay dating offers currently available.",
  },
  {
    question: "Why browse dating platforms by country?",
    answer:
      "Dating site availability, adult dating eligibility, pricing, and member focus can vary by region. Country pages help you find dating offers and AI companion platforms that are relevant where you live, including live USA and Germany guides.",
  },
  {
    question: "How do affiliate links on dating offers work?",
    answer:
      "Some dating offer links and AI companion links are affiliate links. If you visit a partner dating platform through those links, we may earn a commission at no extra cost to you. We remain an independent comparison site and do not operate the listed platforms.",
  },
  {
    question: "Are these dating sites free to join?",
    answer:
      "Each dating platform and AI companion service sets its own pricing. Many adult dating and casual dating sites offer free registration with optional premium upgrades. Always confirm terms, privacy settings, and connection features on the destination site.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ink py-24 font-display text-cream">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="tdc-eyebrow flex items-center justify-center gap-2">
            <HelpCircle size={14} />
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
            Dating offers, connections & AI companions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-cream/65">
            Answers about casual dating, adult dating sites, gay dating,
            AI companion platforms, and how to compare dating offers by country.
          </p>
        </div>

        <div className="mt-14 divide-y divide-cream/10 border-y border-cream/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left sm:py-6"
                >
                  <span className="text-lg font-bold sm:text-xl">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={22}
                    className={`shrink-0 text-brand-rose transition duration-300 ${
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

        <div className="mt-10 text-center">
          <Link
            href="#countries"
            className="text-sm font-bold uppercase tracking-wider text-brand-mint transition hover:text-brand-rose"
          >
            Browse dating offers by country →
          </Link>
        </div>
      </div>
    </section>
  );
}
