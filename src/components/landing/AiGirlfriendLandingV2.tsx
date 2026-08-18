"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import DreamzLogo from "@/components/landing/DreamzLogo";
 
import ExitIntentOfferModal from "@/components/landing/ExitIntentOfferModal";
import NoiseOverlay from "@/components/theme/NoiseOverlay";
import MarqueeBand from "@/components/theme/MarqueeBand";

import { trackAffiliateClick } from "@/lib/analytics";
 
import { getTrackedAffiliateUrl } from "@/lib/trafficstars";

import {
  aiGirlfriendFaqs,
  dreamzCompanions,
  dreamzOffer,
  type DreamzCompanion,
} from "@/data/aiGirlfriendOffers";

const featured =
  dreamzCompanions.find((c) => c.featured) ?? dreamzCompanions[0];

const HIGHLIGHT_COPY = [
  "Build a companion that matches your energy and conversation style.",
  "Private chats designed for adults — available anytime.",
  "Sign up and start talking in minutes on desktop or mobile.",
];

const REL = "sponsored nofollow noopener noreferrer";

function PaceBadge({ pace }: { pace: string }) {
  return (
    <span className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
      <span aria-hidden>🔥</span>
      {pace}
    </span>
  );
}

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
      height={350}
      priority={priority}
      className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${className}`}
    />
  );
}

function HeartLikes({ likes }: { likes: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-brand-rose">
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 20.2c-.4 0-.7-.1-1-.3C7.4 17.2 4.5 14.5 3.2 11.8 2.2 9.6 2.5 7 4.2 5.4c1.5-1.4 3.8-1.6 5.5-.4L12 6.5l2.3-1.5c1.7-1.2 4-1 5.5.4 1.7 1.6 2 4.2 1 6.4-1.3 2.7-4.2 5.4-7.8 8.1-.3.2-.6.3-1 .3z" />
      </svg>
      {likes}
    </span>
  );
}

export default function AiGirlfriendLandingV2() {
  const offer = dreamzOffer;
  const [affiliateUrl, setAffiliateUrl] = useState(offer.url);

  useEffect(() => {
    const trackedUrl = getTrackedAffiliateUrl(offer.url);
    setAffiliateUrl(trackedUrl);
    console.log("Final Affiliate URL:", trackedUrl);
  }, [offer.url]);

  const trackOfferClick = (placement: string) => {
    trackAffiliateClick(offer.name, placement);
  };

  const restCompanions = dreamzCompanions.filter((c) => c !== featured);

  return (
    <>
      <Header />

      <main className="relative bg-[#0a0710] font-display text-cream">
        <NoiseOverlay />

        {/* Cinematic split hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-brand-rose/20 blur-[120px]" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#b794f6]/15 blur-[100px]" />

          <div className="relative mx-auto grid max-w-[1400px] lg:min-h-[760px] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <a
              href={affiliateUrl}
              target="_blank"
              rel={REL}
              onClick={() => trackOfferClick("featured-video")}
              className="group relative block min-h-[420px] overflow-hidden lg:min-h-full"
            >
              <CompanionMedia companion={featured} priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0710] via-[#0a0710]/25 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#0a0710]/20 lg:to-[#0a0710]" />
              <span className="absolute left-4 top-4 z-10 rounded-full bg-brand-rose px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                Live
              </span>
              <div className="absolute inset-x-0 bottom-0 z-10 p-5 lg:hidden">
                <p className="text-lg font-black">
                  {featured.name}, {featured.age}
                </p>
                <p className="text-sm text-white/70">Tap to chat →</p>
              </div>
            </a>

            <div className="relative flex flex-col justify-center px-5 py-10 sm:px-8 lg:px-14 lg:py-20">
              <div className="mb-6">
                <DreamzLogo size="lg" className="text-white" />
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#b794f6]">
                TheDateCompass pick · Adults 18+
              </p>
              <h1 className="max-w-xl text-[clamp(2.4rem,5vw,4.1rem)] font-black leading-[0.98] tracking-tight">
                Meet Your AI Companion on{" "}
                <span className="bg-gradient-to-r from-brand-rose to-[#b794f6] bg-clip-text text-transparent">
                  Dreamz.ai
                </span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60 lg:text-lg">
                Explore personalized AI companions for private conversations,
                roleplay, and virtual companionship. Choose a personality that
                fits your style and start exploring.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {offer.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/75"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={affiliateUrl}
                  target="_blank"
                  rel={REL}
                  onClick={() => trackOfferClick("hero")}
                  className="inline-flex items-center justify-center rounded-full bg-brand-rose px-8 py-4 text-sm font-bold text-white shadow-[0_16px_40px_rgba(255,61,110,0.35)] transition hover:bg-brand-rose-soft"
                >
                  Try Dreamz.ai Free →
                </a>
                <a
                  href="#companions"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white/90 transition hover:bg-white/5"
                >
                  Browse companions
                </a>
              </div>

              <div className="mt-8 hidden items-center gap-4 lg:flex">
                <div className="h-16 w-12 overflow-hidden rounded-lg border border-white/10">
                  <CompanionMedia companion={{ ...featured, video: undefined }} />
                </div>
                <div>
                  <p className="text-sm font-bold">
                    {featured.name}, {featured.age}
                  </p>
                  <p className="text-xs text-white/50">Featured companion · Tap the portrait to chat</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/45">
                <span>{offer.promo}</span>
                <span>Best for: {offer.bestFor}</span>
              </div>
            </div>
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

        {/* Magazine companion spread */}
        <section id="companions" className="px-5 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#b794f6]">
                  Inside Dreamz.ai
                </p>
                <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                  Explore AI companions
                </h2>
              </div>
              <a
                href={affiliateUrl}
                target="_blank"
                rel={REL}
                onClick={() => trackOfferClick("catalog-link")}
                className="text-sm font-semibold text-brand-rose transition hover:text-brand-rose-soft"
              >
                Open full catalog on Dreamz →
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-12 md:gap-5">
              <a
                href={affiliateUrl}
                target="_blank"
                rel={REL}
                onClick={() =>
                  trackOfferClick(`companion-${featured.name.toLowerCase()}`)
                }
                className="group relative overflow-hidden rounded-3xl border border-white/10 md:col-span-5 md:row-span-2"
              >
                <div className="relative aspect-[3/4] md:aspect-auto md:h-full md:min-h-[540px]">
                  <CompanionMedia
                    companion={{ ...featured, video: undefined }}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <PaceBadge pace={featured.pace} />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <h3 className="text-xl font-black">
                        {featured.name}, {featured.age}
                      </h3>
                      <HeartLikes likes={featured.likes} />
                    </div>
                    <p className="line-clamp-2 text-sm text-white/70">
                      {featured.bio}{" "}
                      <span className="text-brand-rose underline decoration-brand-rose/60 underline-offset-2">
                        read more
                      </span>
                    </p>
                  </div>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:col-span-7 md:grid-cols-3">
                {restCompanions.map((companion, index) => (
                  <a
                    key={companion.name}
                    href={affiliateUrl}
                    target="_blank"
                    rel={REL}
                    onClick={() =>
                      trackOfferClick(
                        `companion-${companion.name.toLowerCase()}`
                      )
                    }
                    className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#120e18] transition duration-300 hover:-translate-y-1 hover:border-brand-rose/40"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1522]">
                      <CompanionMedia
                        companion={{ ...companion, video: undefined }}
                        priority={index < 2}
                      />
                      <PaceBadge pace={companion.pace} />
                    </div>
                    <div className="flex flex-1 flex-col p-3.5">
                      <div className="mb-1.5 flex items-start justify-between gap-2">
                        <h3 className="text-[14px] font-bold">
                          {companion.name}, {companion.age}
                        </h3>
                        <HeartLikes likes={companion.likes} />
                      </div>
                      <p className="line-clamp-2 text-xs leading-relaxed text-white/50">
                        {companion.bio}{" "}
                        <span className="text-brand-rose underline decoration-brand-rose/60 underline-offset-2">
                          read more
                        </span>
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-[#16111f] to-[#0e0b14] p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
                  Companion Preview
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  Explore a preview of the AI companion experience available on
                  Dreamz.ai. Personalized companions, AI conversations, and
                  roleplay experiences — all in one place.
                </p>
              </div>
              <a
                href={affiliateUrl}
                target="_blank"
                rel={REL}
                onClick={() => trackOfferClick("sidebar")}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-rose px-8 py-3.5 text-sm font-bold text-white transition hover:bg-brand-rose-soft lg:mt-0 lg:w-auto"
              >
                Explore on Dreamz.ai →
              </a>
            </div>
          </div>
        </section>

        {/* Bento highlights */}
        <section className="px-5 pb-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {offer.highlights.slice(0, 3).map((title, i) => (
              <div
                key={title}
                className={`rounded-3xl border border-white/10 p-8 ${
                  i === 1
                    ? "bg-gradient-to-br from-brand-rose/20 to-[#b794f6]/10"
                    : "bg-white/[0.03]"
                }`}
              >
                <p className="mb-4 font-display text-4xl font-black text-white/15">
                  0{i + 1}
                </p>
                <h3 className="mb-3 text-xl font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-white/55">
                  {HIGHLIGHT_COPY[i]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ + mid CTA split */}
        <section className="px-5 py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
            <div>
              <h2 className="mb-8 text-3xl font-black tracking-tight md:text-4xl">
                Common questions
              </h2>
              <div className="space-y-3">
                {aiGirlfriendFaqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5"
                  >
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

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#120e18]">
              <div className="relative h-56 sm:h-72">
                <CompanionMedia companion={featured} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120e18] to-transparent" />
              </div>
              <div className="relative px-7 pb-8 pt-2 sm:px-9">
                <h2 className="text-3xl font-black tracking-tight">
                  Ready to Explore Dreamz.ai?
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/55">
                  Create your AI companion, choose a personality, and start
                  exploring conversations on Dreamz.ai.
                </p>
                <a
                  href={affiliateUrl}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  onClick={() => trackOfferClick("footer-cta")}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black transition hover:bg-white/90"
                >
                  Try Dreamz.ai Free →
                </a>
                <p className="mt-4 text-xs text-white/35">
                  Affiliate link · Adults 18+
                </p>
              </div>
            </div>
          </div>
        </section>

       
      </main>

      <Footer />

      <ExitIntentOfferModal
        affiliateUrl={affiliateUrl}
        offerName={offer.name}
        onTrackClick={trackOfferClick}
        imageSrc={featured.image}
        imageAlt={`${featured.name} AI companion`}
      />
    </>
  );
}
