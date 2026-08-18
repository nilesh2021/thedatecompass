"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import DreamzLogo from "@/components/landing/DreamzLogo";
import BrowseByCountrySection from "@/components/landing/BrowseByCountrySection";
import NoiseOverlay from "@/components/theme/NoiseOverlay";
import MarqueeBand from "@/components/theme/MarqueeBand";

import { trackAffiliateClick } from "@/lib/analytics";
import { getCountryBrowseLinks } from "@/data/countryBrowseLinks";
import { getTrackedAffiliateUrl } from "@/lib/trafficstars";

import {
  aiGirlfriendFaqs,
  dreamzCompanions,
  dreamzOffer,
  type DreamzCompanion,
} from "@/data/aiGirlfriendOffers";

const featured =
  dreamzCompanions.find((c) => c.featured) ?? dreamzCompanions[0];

const FEATURES = [
  {
    title: "Custom personalities",
    description:
      "Build a companion that matches your energy, interests, and conversation style.",
  },
  {
    title: "Private AI chat",
    description:
      "One-on-one conversations designed for adults — available anytime, day or night.",
  },
  {
    title: "Immersive roleplay",
    description:
      "Explore storylines, scenarios, and deeper connection with your chosen companion.",
  },
  {
    title: "Mobile friendly",
    description:
      "Sign up and start chatting in minutes on desktop or mobile — free to begin.",
  },
];

function CompanionMedia({
  companion,
  priority = false,
  className = "",
}: {
  companion: DreamzCompanion;
  priority?: boolean;
  className?: string;
}) {
  if (companion.video) {
    return (
      <video
        className={`h-full w-full object-cover ${className}`}
        autoPlay
        muted
        loop
        playsInline
        poster={companion.image}
        aria-label={`${companion.name} companion preview`}
      >
        <source src={companion.video} type="video/mp4" />
      </video>
    );
  }

  return (
    <Image
      src={companion.image}
      alt={`${companion.name} AI companion`}
      width={400}
      height={500}
      priority={priority}
      className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${className}`}
    />
  );
}

export default function AiCompanionLanding() {
  const offer = dreamzOffer;
  const [affiliateUrl, setAffiliateUrl] = useState(offer.url);

  useEffect(() => {
    setAffiliateUrl(getTrackedAffiliateUrl(offer.url));
  }, [offer.url]);

  const trackOfferClick = (placement: string) => {
    trackAffiliateClick(offer.name, placement);
  };

  return (
    <>
      <Header />

      <main className="relative bg-black font-display text-white">
        <NoiseOverlay />

        {/* Cinematic hero */}
        <section className="relative min-h-[85vh] overflow-hidden border-b border-white/5">
          <div className="absolute inset-0">
            <Image
              src={featured.image}
              alt=""
              fill
              priority
              className="object-cover object-top opacity-30 blur-sm"
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-[120px]" />
            <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-purple-600/15 blur-[100px]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-12 lg:min-h-[85vh] lg:grid-cols-[1fr_340px] lg:gap-12 lg:pb-20 lg:pt-16">
            <div className="min-w-0">
              <div className="mb-6">
                <DreamzLogo size="lg" className="text-white" />
              </div>

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
                Powered by Dreamz.ai · Adults 18+
              </p>

              <div className="mb-6 inline-block rounded-2xl border border-fuchsia-500/50 bg-black/40 px-6 py-4 shadow-[0_0_40px_rgba(217,70,239,0.2)] backdrop-blur-sm">
                <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-[1.05] tracking-tight">
                  Meet Your{" "}
                  <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                    AI Companion
                  </span>
                </h1>
              </div>

              <p className="max-w-xl text-base uppercase tracking-[0.08em] text-white/60 lg:text-lg">
                Let our reality-defining companions take you there — private
                conversations, immersive roleplay, and personalities built for
                you.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={affiliateUrl}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_30px_rgba(236,72,153,0.4)] transition hover:from-fuchsia-400 hover:to-pink-400"
                  onClick={() => trackOfferClick("hero")}
                >
                  Try Dreamz.ai Free →
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition hover:border-fuchsia-500/50 hover:bg-white/10"
                >
                  Learn more
                </a>
              </div>

              <p className="mt-6 text-sm text-white/40">
                {offer.promo} · Best for: {offer.bestFor}
              </p>
            </div>

            <a
              href={affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              onClick={() => trackOfferClick("featured-video")}
              className="group relative mx-auto w-full max-w-[280px] shrink-0 overflow-hidden rounded-2xl border border-fuchsia-500/30 shadow-[0_0_60px_rgba(217,70,239,0.25)] lg:mx-0 lg:max-w-none"
            >
              <div className="relative aspect-[3/4] bg-black">
                <CompanionMedia companion={featured} priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute right-3 top-3 z-10 rounded-full bg-fuchsia-500 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-white shadow-[0_0_15px_rgba(217,70,239,0.6)]">
                  Live
                </span>
                <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                  <p className="text-sm font-bold text-white">
                    {featured.name}, {featured.age}
                  </p>
                  <p className="text-xs text-white/70">Tap to chat →</p>
                </div>
              </div>
            </a>
          </div>

          <MarqueeBand
            items={[
              "AI companions",
              "Private chat",
              "Free to start",
              "Adults 18+",
              "Dreamz.ai",
            ]}
          />
        </section>

        {/* Benefits / features */}
        <section
          id="features"
          className="border-y border-white/5 bg-[#08080c] px-5 py-16 lg:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-fuchsia-400">
                Why Dreamz.ai
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Built for premium AI companionship
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((feature, i) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-fuchsia-500/30"
                >
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-fuchsia-400">
                    0{i + 1}
                  </p>
                  <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-3xl font-black tracking-tight md:text-4xl">
              Common questions
            </h2>
            <div className="divide-y divide-white/10">
              {aiGirlfriendFaqs.map((faq) => (
                <div key={faq.question} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="mb-2 text-base font-semibold">
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/55">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-5 pb-20 pt-4 lg:pb-28">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-fuchsia-500/30 bg-gradient-to-br from-[#0d0d14] to-[#1a0a1f] px-8 py-12 text-center lg:px-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-fuchsia-600/20 blur-[80px]" />
            <div className="relative">
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Ready to Explore Dreamz.ai?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
                Create your AI companion, choose a personality, and start
                exploring conversations on Dreamz.ai.
              </p>
              <a
                href={affiliateUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                onClick={() => trackOfferClick("footer-cta")}
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 px-8 py-4 text-sm font-bold text-white shadow-[0_0_30px_rgba(236,72,153,0.35)] transition hover:from-fuchsia-400 hover:to-pink-400"
              >
                Try Dreamz.ai Free →
              </a>
              <p className="mt-4 text-xs text-white/35">
                Affiliate link · Adults 18+
              </p>
            </div>
          </div>
        </section>

        <BrowseByCountrySection
          links={getCountryBrowseLinks("dreamz")}
          title="Explore AI dating offers by country"
          description="See how Dreamz.ai and related AI companion listings appear on our active country shortlists."
        />
      </main>

      <Footer />
    </>
  );
}
