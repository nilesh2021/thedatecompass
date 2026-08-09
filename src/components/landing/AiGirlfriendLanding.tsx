"use client";

import Image from "next/image";
import { useEffect } from "react";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import {
  aiGirlfriendFaqs,
  aiGirlfriendOffers,
} from "@/data/aiGirlfriendOffers";

const cardClass =
  "rounded-3xl border border-stone-200/80 bg-white shadow-[0_2px_16px_rgba(28,25,23,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(28,25,23,0.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const eyebrowClass =
  "text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-rose-700/80";

const sectionTitleClass =
  "font-display text-4xl leading-tight   text-stone-900 md:text-5xl";

const btnPrimaryClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-7 py-3.5 text-[0.9375rem] font-medium text-white transition-colors hover:bg-stone-800";

const btnSecondaryClass =
  "inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-stone-900 transition-colors hover:text-rose-800";

const features = [
  {
    title: "Custom personalities",
    description:
      "Shape an AI companion that matches your vibe — playful, supportive, flirty, or thoughtful.",
  },
  {
    title: "Private conversations",
    description:
      "Chat anytime without judgment. Our top picks prioritize discreet, secure messaging.",
  },
  {
    title: "Instant access",
    description:
      "No long waitlists. Create an account and start talking in a few minutes.",
  },
];

const steps = [
  {
    step: "01",
    title: "Pick a platform",
    description:
      "Compare our ranked offers below — each scored for chat quality, privacy, and ease of use.",
  },
  {
    step: "02",
    title: "Create your companion",
    description:
      "Sign up, customize personality and style, then start your first conversation.",
  },
  {
    step: "03",
    title: "Chat anytime",
    description:
      "Pick up where you left off — day or night — with an AI that adapts to you.",
  },
];

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);

  return (
    <span
      className="text-sm tracking-wide text-amber-600"
      aria-label={`${rating} out of 5 stars`}
    >
      {"★".repeat(full)}
      {"☆".repeat(5 - full)}
      <span className="ml-2 text-stone-500">{rating}</span>
    </span>
  );
}

export default function AiGirlfriendLanding() {
  const featured =
    aiGirlfriendOffers.find((o) => o.featured) ?? aiGirlfriendOffers[0];

  // #region agent log
  useEffect(() => {
    const probe = document.getElementById("css-debug-probe-ai");
    const h1 = document.querySelector("[data-css-debug-h1-ai]");
    const root = document.documentElement;
    const body = document.body;
    const probeStyles = probe ? getComputedStyle(probe) : null;
    const h1Styles = h1 ? getComputedStyle(h1) : null;
    const bodyStyles = getComputedStyle(body);
    const sheets = Array.from(document.styleSheets).map((s) => {
      try {
        return { href: s.href, rules: s.cssRules?.length ?? -1 };
      } catch {
        return { href: s.href, rules: -1 };
      }
    });
    const hasTwUtility = sheets.some((s) =>
      (s.href || "").includes("/_next/static/css")
    );
    fetch("http://127.0.0.1:7696/ingest/23f7ee04-52f4-47ec-893c-bfe86f572372", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "4e7dc8",
      },
      body: JSON.stringify({
        sessionId: "4e7dc8",
        runId: "pre-fix",
        hypothesisId: "A-B-C-D-E",
        location: "AiGirlfriendLanding.tsx:useEffect",
        message: "AI girlfriend CSS runtime probe",
        data: {
          page: "/category/ai-girlfriend",
          stylesheetCount: sheets.length,
          hasNextCssLink: hasTwUtility,
          sheetHrefs: sheets.map((s) => s.href).filter(Boolean).slice(0, 8),
          fontInstrumentOnRoot: getComputedStyle(root).getPropertyValue(
            "--font-instrument-serif"
          ).trim(),
          fontInstrumentOnH1: h1
            ? getComputedStyle(h1)
                .getPropertyValue("--font-instrument-serif")
                .trim()
            : "",
          fontInterOnH1: h1
            ? getComputedStyle(h1).getPropertyValue("--font-inter").trim()
            : "",
          prefersColorScheme: window.matchMedia("(prefers-color-scheme: dark)")
            .matches
            ? "dark"
            : "light",
          bodyBg: bodyStyles.backgroundColor,
          bodyColor: bodyStyles.color,
          bodyFont: bodyStyles.fontFamily,
          probeBg: probeStyles?.backgroundColor,
          probeColor: probeStyles?.color,
          probeRadius: probeStyles?.borderRadius,
          probeShadow: probeStyles?.boxShadow,
          h1Font: h1Styles?.fontFamily,
          h1Size: h1Styles?.fontSize,
          headingOverrideLikely: Boolean(
            h1Styles?.fontFamily?.includes("Space Grotesk")
          ),
          tailwindUtilitiesApplied: Boolean(
            probeStyles &&
              probeStyles.backgroundColor !== "rgba(0, 0, 0, 0)" &&
              probeStyles.backgroundColor !== "transparent"
          ),
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
  }, []);
  // #endregion

  return (
    <>
      <Header />

      <div
        data-css-debug-root-ai
        className="bg-[radial-gradient(ellipse_at_top,_#fdf6f4_0%,_#fafaf9_45%,_#f5f5f4_100%)] text-stone-900"
      >
        {/* #region agent log */}
        <div
          id="css-debug-probe-ai"
          aria-hidden
          className="pointer-events-none absolute h-0 w-0 overflow-hidden rounded-3xl bg-stone-50 text-stone-900 shadow-card"
        />
        {/* #endregion */}
        {/* Hero */}
        <section className="px-6 pb-20 pt-16 lg:px-10 lg:pb-32 lg:pt-24">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className={`${eyebrowClass} mb-6`}>AI girlfriend · 2026</p>
              <h1
                data-css-debug-h1-ai
                className="font-display mb-8 text-[clamp(2.75rem,6vw,4.75rem)] leading-[1.05]  "
              >
                Your companion,{" "}
                <em className="text-rose-800/90 not-italic">always online.</em>
              </h1>
              <p className="mb-10 max-w-lg text-lg leading-relaxed text-stone-500">
                We compared the best AI girlfriend platforms so you can skip the
                hype and find private, personalized companionship that actually
                feels good to use.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href={featured.url}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className={btnPrimaryClass}
                >
                  Try {featured.name} free
                </a>
                <a href="#offers" className={btnSecondaryClass}>
                  Compare offers →
                </a>
              </div>
              <p className="mt-6 text-sm text-stone-400">
                Adults 18+ · Free to start · Opens official provider sites
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-[0_8px_40px_rgba(28,25,23,0.08)]">
                <Image
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=1000&fit=crop"
                  alt="AI companion conversation concept"
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-cover"
                  priority
                />
              </div>
              <div
                className={`${cardClass} absolute -bottom-6 -left-4 px-6 py-4 lg:-left-8`}
              >
                <p className="text-2xl font-semibold text-stone-900">
                  {featured.rating}★
                </p>
                <p className="text-sm text-stone-500">Top editor rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 max-w-2xl">
              <p className={`${eyebrowClass} mb-4`}>Why these platforms</p>
              <h2 className={sectionTitleClass}>
                Companionship built around conversation.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className={`${cardClass} p-10`}>
                  <h3 className="mb-4 text-xl font-medium text-stone-900">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-stone-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Offers */}
        <section id="offers" className="bg-white/70 px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 max-w-xl">
              <p className={`${eyebrowClass} mb-4`}>Promotional offers</p>
              <h2 className={`${sectionTitleClass} mb-4`}>
                Best AI girlfriend platforms ranked.
              </h2>
              <p className="text-lg leading-relaxed text-stone-500">
                Hand-picked AI companion sites with current promos — scored on
                chat quality, privacy, and signup speed.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {aiGirlfriendOffers.map((offer, index) => (
                <a
                  key={offer.id}
                  href={offer.url}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className={`${cardClass} flex h-full flex-col p-8 no-underline ${
                    offer.featured ? "ring-2 ring-rose-800/15" : ""
                  }`}
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-stone-100">
                        <Image
                          src={offer.logo}
                          alt=""
                          width={56}
                          height={56}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wider text-stone-400">
                          #{index + 1}
                        </span>
                        <h3 className="text-xl font-semibold text-stone-900">
                          {offer.name}
                        </h3>
                      </div>
                    </div>
                    {offer.badge && (
                      <span className="shrink-0 rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-800">
                        {offer.badge}
                      </span>
                    )}
                  </div>

                  {offer.promo && (
                    <p className="mb-4 text-sm font-medium text-rose-800/80">
                      {offer.promo}
                    </p>
                  )}

                  <StarRating rating={offer.rating} />
                  <p className="mt-2 text-sm text-stone-400">
                    {offer.reviews} reviews
                  </p>

                  <p className="mt-6 flex-1 leading-relaxed text-stone-500">
                    {offer.description}
                  </p>

                  <p className="mt-4 text-sm font-medium text-stone-700">
                    Best for: {offer.bestFor}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {offer.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <span
                    className={`${btnPrimaryClass} mt-8 w-full text-center`}
                  >
                    Visit {offer.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 max-w-xl">
              <p className={`${eyebrowClass} mb-4`}>How it works</p>
              <h2 className={sectionTitleClass}>
                Three steps to your first chat.
              </h2>
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              {steps.map((item) => (
                <div key={item.step} className="space-y-4">
                  <span className="font-display text-5xl text-rose-800/25">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-medium text-stone-900">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-stone-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white/70 px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 max-w-xl">
              <p className={`${eyebrowClass} mb-4`}>FAQ</p>
              <h2 className={sectionTitleClass}>Common questions.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {aiGirlfriendFaqs.map((faq) => (
                <div key={faq.question} className={`${cardClass} p-8`}>
                  <h3 className="mb-3 text-lg font-medium text-stone-900">
                    {faq.question}
                  </h3>
                  <p className="leading-relaxed text-stone-500">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className={`${cardClass} overflow-hidden`}>
              <div className="grid items-center gap-12 p-10 lg:grid-cols-2 lg:p-16">
                <div>
                  <h2 className={`${sectionTitleClass} mb-6`}>
                    Ready to meet your AI companion?
                  </h2>
                  <p className="text-lg leading-relaxed text-stone-500">
                    Start with our editor&apos;s pick — free to try, no credit
                    card required to create an account.
                  </p>
                </div>
                <div className="flex flex-col items-start gap-4 lg:items-end">
                  <a
                    href={featured.url}
                    target="_blank"
                    rel="sponsored nofollow noopener noreferrer"
                    className={`${btnPrimaryClass} px-10 py-4 text-base`}
                  >
                    Get started with {featured.name}
                  </a>
                  <p className="text-sm text-stone-400">
                    Takes less than 2 minutes · Adults 18+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
