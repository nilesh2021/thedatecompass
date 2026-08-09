"use client";

import Image from "next/image";
import { useEffect } from "react";
import { getOfferTabByRoute } from "@/data/datingOffersTabs";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";

const gayTab = getOfferTabByRoute("gay-dating")!;

const cardClass =
  "rounded-3xl border border-stone-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const eyebrowClass =
  "text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-accent";

const sectionTitleClass =
  "font-display text-4xl leading-tight tracking-tight text-stone-900 md:text-5xl";

const btnPrimaryClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-7 py-3.5 text-[0.9375rem] font-medium text-white transition-colors hover:bg-stone-800";

const btnSecondaryClass =
  "inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-stone-900 transition-colors hover:text-accent";

const features = [
  {
    title: "Verified profiles",
    description:
      "Every platform we recommend prioritizes real people — with verification tools that cut through fake accounts.",
  },
  {
    title: "Inclusive matching",
    description:
      "Smart filters and community-focused design help you find men who share your interests and intentions.",
  },
  {
    title: "Private messaging",
    description:
      "Secure chat built for meaningful conversations, not endless small talk with strangers.",
  },
];

const steps = [
  {
    step: "01",
    title: "Choose your platform",
    description:
      "Browse our curated picks below — each rated for community quality, safety, and ease of use.",
  },
  {
    step: "02",
    title: "Create your profile",
    description:
      "Sign up in minutes. Add photos, set your preferences, and let the algorithm do the rest.",
  },
  {
    step: "03",
    title: "Start connecting",
    description:
      "Message matches, plan dates, and build something real — on your terms.",
  },
];

const testimonials = [
  {
    quote:
      "I was tired of apps that felt like an afterthought. GayBloom actually felt built for us — met my partner within three weeks.",
    name: "Marcus T.",
    location: "Chicago, IL",
  },
  {
    quote:
      "Clean interface, real people, no nonsense. Finally a list that doesn't waste your time with dead-end platforms.",
    name: "James R.",
    location: "Portland, OR",
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

export default function GayDatingLanding() {
  const featured = gayTab.offers.find((o) => o.featured) ?? gayTab.offers[0];

  // #region agent log
  useEffect(() => {
    const probe = document.getElementById("css-debug-probe-gay");
    const h1 = document.querySelector("[data-css-debug-h1-gay]");
    const root = document.documentElement;
    const bodyStyles = getComputedStyle(document.body);
    const probeStyles = probe ? getComputedStyle(probe) : null;
    const h1Styles = h1 ? getComputedStyle(h1) : null;
    const sheets = Array.from(document.styleSheets).map((s) => s.href);
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
        location: "GayDatingLanding.tsx:useEffect",
        message: "Gay dating CSS runtime probe",
        data: {
          page: "/top-offers/gay-dating",
          stylesheetCount: sheets.length,
          hasNextCssLink: sheets.some((h) =>
            (h || "").includes("/_next/static/css")
          ),
          sheetHrefs: sheets.filter(Boolean).slice(0, 8),
          fontInstrument: getComputedStyle(root).getPropertyValue(
            "--font-instrument-serif"
          ),
          prefersColorScheme: window.matchMedia("(prefers-color-scheme: dark)")
            .matches
            ? "dark"
            : "light",
          bodyBg: bodyStyles.backgroundColor,
          bodyColor: bodyStyles.color,
          probeBg: probeStyles?.backgroundColor,
          probeShadow: probeStyles?.boxShadow,
          h1Font: h1Styles?.fontFamily,
          headingOverrideLikely: Boolean(
            h1Styles?.fontFamily?.includes("Space Grotesk")
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
    <div className="bg-stone-50 text-stone-900">
      {/* #region agent log */}
      <div
        id="css-debug-probe-gay"
        aria-hidden
        className="pointer-events-none absolute h-0 w-0 overflow-hidden rounded-3xl bg-stone-50 text-stone-900 shadow-card text-accent"
      />
      {/* #endregion */}
      {/* Hero */}
      <section className="px-6 pb-20 pt-16 lg:px-10 lg:pb-32 lg:pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className={`${eyebrowClass} mb-6`}>Gay dating · 2026</p>
            <h1
              data-css-debug-h1-gay
              className="font-display mb-8 text-[clamp(2.75rem,6vw,4.75rem)] leading-[1.05] tracking-tight"
            >
              Find someone who{" "}
              <em className="text-accent not-italic">gets you.</em>
            </h1>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-stone-500">
              We compared the top gay dating platforms so you can skip the noise
              and focus on real connections — with men who are actually looking.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimaryClass}
              >
                Try {featured.name} free
              </a>
              <a href="#offers" className={btnSecondaryClass}>
                Compare all platforms →
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-hero">
              <Image
                src="https://images.unsplash.com/photo-1624947834764-5e1dcb67c920?w=800&h=1000&fit=crop"
                alt="Two men enjoying a conversation"
                width={800}
                height={1000}
                className="aspect-[4/5] w-full object-cover"
                priority
              />
            </div>
            <div
              className={`${cardClass} absolute -bottom-6 -left-4 px-6 py-4 lg:-left-8`}
            >
              <p className="text-2xl font-semibold text-stone-900">4.8★</p>
              <p className="text-sm text-stone-500">Average platform rating</p>
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
              Dating apps that put community first.
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
      <section id="offers" className="bg-white px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-xl">
            <p className={`${eyebrowClass} mb-4`}>Top picks</p>
            <h2 className={`${sectionTitleClass} mb-4`}>
              Best gay dating sites ranked.
            </h2>
            <p className="text-lg leading-relaxed text-stone-500">
              {gayTab.seoIntro}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {gayTab.offers.map((offer, index) => (
              <a
                key={offer.id}
                href={offer.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cardClass} flex h-full flex-col p-8 no-underline ${
                  offer.featured ? "ring-2 ring-accent/20" : ""
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
                    <span className="shrink-0 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                      {offer.badge}
                    </span>
                  )}
                </div>

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
              Three steps to your next date.
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((item) => (
              <div key={item.step} className="space-y-4">
                <span className="font-display text-5xl text-accent/30">
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

      {/* Testimonials */}
      <section className="bg-white px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-xl">
            <p className={`${eyebrowClass} mb-4`}>Real stories</p>
            <h2 className={sectionTitleClass}>What members are saying.</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote key={item.name} className={`${cardClass} p-10`}>
                <p className="font-display mb-8 text-2xl leading-relaxed text-stone-700">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer>
                  <cite className="not-italic">
                    <span className="font-medium text-stone-900">
                      {item.name}
                    </span>
                    <span className="text-stone-400"> · {item.location}</span>
                  </cite>
                </footer>
              </blockquote>
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
                  Ready to meet someone new?
                </h2>
                <p className="text-lg leading-relaxed text-stone-500">
                  Join thousands of gay men who found their match through our
                  top-rated platforms. Free to sign up — no credit card required.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnPrimaryClass} px-10 py-4 text-base`}
                >
                  Get started with {featured.name}
                </a>
                <p className="text-sm text-stone-400">
                  Takes less than 2 minutes to create a profile
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
