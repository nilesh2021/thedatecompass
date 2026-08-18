"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Globe2,
  Lock,
  MessageCircle,
  Shield,
  Sparkles,
} from "lucide-react";

import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import BrowseByCountrySection from "@/components/landing/BrowseByCountrySection";

import { trackAffiliateClick } from "@/lib/analytics";
import { getCountryBrowseLinks } from "@/data/countryBrowseLinks";
import { getTrackedAffiliateUrl } from "@/lib/trafficstars";

import {
  grannyHunterFaqs,
  grannyHunterFeatures,
  grannyHunterOffer,
  grannyHunterSteps,
  grannyHunterTrustPoints,
  grannyHunterVisuals,
} from "@/data/grannyHunterOffers";

const REL = "sponsored nofollow noopener noreferrer";

function GrannyHunterWordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-sm font-bold uppercase tracking-[0.22em] text-[#1c1917] ${className}`}
      aria-label="GrannyHunter"
    >
      Granny<span className="text-[#8b5a6b]">Hunter</span>
    </span>
  );
}

function VisitCta({
  href,
  placement,
  label,
  variant = "primary",
  className = "",
}: {
  href: string;
  placement: string;
  label?: string;
  variant?: "primary" | "light" | "outline";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-[#6d3b4e] text-[#f5f0eb] hover:bg-[#5a3040] shadow-[0_12px_40px_rgba(109,59,78,0.35)]",
    light:
      "bg-[#f5f0eb] text-[#1c1917] hover:bg-white shadow-[0_12px_40px_rgba(0,0,0,0.15)]",
    outline:
      "border border-[#b8956c]/50 text-[#f5f0eb] hover:border-[#b8956c] hover:bg-white/5",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel={REL}
      onClick={() => trackAffiliateClick(grannyHunterOffer.name, placement)}
      className={`group inline-flex min-h-[54px] items-center gap-3 rounded-full px-8 text-[0.72rem] font-bold uppercase tracking-[0.14em] transition duration-300 hover:-translate-y-0.5 ${styles[variant]} ${className}`}
    >
      {label ?? grannyHunterOffer.ctaLabel}
      <ArrowRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </a>
  );
}

function AffiliateNote({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <p className={`text-[11px] leading-5 ${light ? "text-[#8a8278]" : "text-white/45"} ${className}`}>
      Affiliate link · Adults 18+. TheDateCompass may earn a commission if you visit
      through this link.{" "}
      <Link
        href="/affiliate-disclosure"
        className={`underline underline-offset-2 ${light ? "decoration-[#b8956c]/50 hover:text-[#6d3b4e]" : "decoration-white/30 hover:text-white/70"}`}
      >
        Affiliate disclosure
      </Link>
    </p>
  );
}

export default function GrannyHunterLandingV2() {
  const [affiliateUrl, setAffiliateUrl] = useState<string>(grannyHunterOffer.url);

  useEffect(() => {
    setAffiliateUrl(getTrackedAffiliateUrl(grannyHunterOffer.url));
  }, []);

  return (
    <>
      <Header />

      <main className="bg-[#f5f0eb] text-[#1c1917]">
        {/* HERO — editorial split, ivory base */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-center px-5 pb-12 pt-28 lg:px-10 lg:pb-20 lg:pt-32">
              <GrannyHunterWordmark className="mb-6" />

              <p className="mb-4 flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#8b5a6b]">
                <span className="h-px w-6 bg-[#b8956c]/60" />
                Premium mature dating · Worldwide
              </p>

              <h1 className="font-serif text-[2.6rem] font-medium leading-[1.05] tracking-tight text-[#1c1917] sm:text-5xl lg:text-[3.4rem]">
                Meet experienced singles on{" "}
                <span className="font-serif-accent italic text-[#6d3b4e]">
                  GrannyHunter
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-[#5c5650]">
                {grannyHunterOffer.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {grannyHunterOffer.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#d4c9bc] bg-white/60 px-4 py-2 text-xs font-semibold text-[#4a4540]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <VisitCta href={affiliateUrl} placement="v2-hero" />
                <a
                  href="#how-it-works"
                  className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border border-[#c4b8a8] px-7 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#4a4540] transition hover:border-[#6d3b4e] hover:text-[#6d3b4e]"
                >
                  How it works
                  <ChevronRight size={15} />
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#7a736a]">
                <span className="flex items-center gap-2">
                  <Sparkles size={13} className="text-[#b8956c]" />
                  {grannyHunterOffer.promo}
                </span>
                <span className="flex items-center gap-2">
                  <Globe2 size={13} className="text-[#b8956c]" />
                  {grannyHunterOffer.availability}
                </span>
              </div>

              <AffiliateNote className="mt-5 max-w-md" light />
            </div>

            {/* Mosaic imagery — offset cards, not single portrait */}
            <div className="relative hidden min-h-[520px] lg:block">
              <div className="absolute right-8 top-16 z-10 w-[58%] overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(28,25,23,0.18)]">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={grannyHunterVisuals.portrait}
                    alt="GrannyHunter mature dating profiles"
                    fill
                    priority
                    sizes="400px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/30 to-transparent" />
                </div>
              </div>

              <div className="absolute bottom-12 left-6 w-[48%] overflow-hidden rounded-2xl border-4 border-[#f5f0eb] shadow-[0_20px_50px_rgba(28,25,23,0.12)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={grannyHunterVisuals.side}
                    alt="GrannyHunter mature dating platform"
                    fill
                    sizes="320px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div className="absolute right-16 top-8 rounded-full bg-[#6d3b4e] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#f5f0eb] shadow-lg">
                {grannyHunterOffer.badge}
              </div>
            </div>
          </div>

          {/* Mobile hero image strip */}
          <div className="relative mx-5 mb-0 h-56 overflow-hidden rounded-2xl lg:hidden">
            <Image
              src={grannyHunterVisuals.hero}
              alt="GrannyHunter mature dating"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f5f0eb] via-transparent to-transparent" />
          </div>
        </section>

        {/* STRONG CTA BAR — immediately below hero */}
        <section className="relative z-20 bg-[#6d3b4e] px-5 py-5 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#e8d5dc]">
                Start today
              </p>
              <p className="mt-1 font-serif text-xl text-[#f5f0eb] sm:text-2xl">
                Join GrannyHunter — free to browse
              </p>
            </div>
            <VisitCta
              href={affiliateUrl}
              placement="v2-cta-bar"
              variant="light"
              label="Join GrannyHunter Free →"
            />
          </div>
        </section>

        {/* OFFER CARD — horizontal premium presentation */}
        <section className="px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-3xl border border-[#ddd5c8] bg-white shadow-[0_8px_40px_rgba(28,25,23,0.06)]">
              <div className="grid lg:grid-cols-[1.4fr_1fr]">
                <div className="border-b border-[#ebe4da] p-8 lg:border-b-0 lg:border-r lg:p-12">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#8b5a6b]">
                    Featured offer
                  </p>
                  <h2 className="mt-3 font-serif text-3xl text-[#1c1917] sm:text-4xl">
                    {grannyHunterOffer.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-[#8b5a6b]">
                    {grannyHunterOffer.bestFor}
                  </p>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#5c5650]">
                    {grannyHunterOffer.description}
                  </p>

                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {grannyHunterOffer.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm font-medium text-[#4a4540]"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6d3b4e]/10 text-[#6d3b4e]">
                          <ChevronRight size={12} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-between bg-[#1c1917] p-8 text-[#f5f0eb] lg:p-12">
                  <div>
                    <span className="inline-block rounded-full border border-[#b8956c]/40 bg-[#b8956c]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#e8d5dc]">
                      {grannyHunterOffer.badge}
                    </span>
                    <p className="mt-6 font-serif text-2xl leading-snug">
                      Connect with confident, experienced singles worldwide.
                    </p>
                    <p className="mt-4 text-sm leading-6 text-white/55">
                      Browse profiles, message privately, and explore mature dating on
                      your terms — available for adults 18+ in all countries.
                    </p>
                  </div>

                  <div className="mt-8">
                    <VisitCta
                      href={affiliateUrl}
                      placement="v2-offer-card"
                      variant="light"
                      className="w-full justify-center sm:w-auto"
                    />
                    <AffiliateNote className="mt-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS — stone band with serif numerals */}
        <section className="border-y border-[#ddd5c8] bg-[#ece6dd] px-5 py-14 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-3">
            {[
              {
                num: "I",
                title: "Refined connections",
                text: "Meet confident, experienced singles who value conversation and chemistry.",
              },
              {
                num: "II",
                title: "Private messaging",
                text: "Browse profiles and connect through secure messaging tools.",
              },
              {
                num: "III",
                title: "Worldwide access",
                text: "Available across all countries for adult users 18+.",
              },
            ].map(({ num, title, text }) => (
              <div key={title} className="text-center sm:text-left">
                <p className="font-serif-accent text-3xl italic text-[#b8956c]">{num}</p>
                <h3 className="mt-2 font-serif text-xl text-[#1c1917]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6b645c]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS — vertical timeline */}
        <section id="how-it-works" className="px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-xl">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#8b5a6b]">
                Simple process
              </p>
              <h2 className="mt-3 font-serif text-4xl text-[#1c1917] sm:text-5xl">
                How GrannyHunter works
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5c5650]">
                Three steps to start meeting experienced singles on a mature dating
                platform built for adults.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-[auto_1fr]">
              <div
                aria-hidden
                className="hidden w-px self-stretch bg-gradient-to-b from-[#b8956c] via-[#6d3b4e] to-transparent lg:block"
              />

              <div className="space-y-10">
                {grannyHunterSteps.map((item, index) => (
                  <div key={item.step} className="relative flex gap-8">
                    <div className="flex shrink-0 flex-col items-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#6d3b4e] bg-white font-display text-sm font-bold text-[#6d3b4e]">
                        {item.step}
                      </span>
                      {index < grannyHunterSteps.length - 1 && (
                        <span className="mt-2 hidden h-full w-px flex-1 bg-[#ddd5c8] lg:block" />
                      )}
                    </div>
                    <div className="pb-2 pt-1">
                      <h3 className="font-serif text-2xl text-[#1c1917]">{item.title}</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-[#5c5650]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex justify-center lg:justify-start lg:pl-20">
              <VisitCta href={affiliateUrl} placement="v2-how-it-works" />
            </div>
          </div>
        </section>

        {/* TRUST — inline stat band */}
        <section className="bg-[#1c1917] px-5 py-14 text-[#f5f0eb] lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#b8956c]">
                Why adults choose GrannyHunter
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                Trusted mature dating, worldwide
              </h2>
            </div>

            <div className="grid divide-[#3d3832] sm:grid-cols-3 sm:divide-x">
              {grannyHunterTrustPoints.map(({ stat, label, text }) => (
                <div key={stat} className="px-6 py-6 text-center sm:py-4">
                  <p className="font-display text-2xl font-bold tracking-tight text-[#e8d5dc]">
                    {stat}
                  </p>
                  <p className="mt-2 text-sm font-semibold">{label}</p>
                  <p className="mt-2 text-xs leading-5 text-white/50">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
              <span className="flex items-center gap-2">
                <Shield size={14} className="text-[#b8956c]" />
                Discreet browsing
              </span>
              <span className="flex items-center gap-2">
                <Lock size={14} className="text-[#b8956c]" />
                Private messaging
              </span>
              <span className="flex items-center gap-2">
                <Globe2 size={14} className="text-[#b8956c]" />
                All countries
              </span>
            </div>
          </div>
        </section>

        {/* FEATURES — bento grid */}
        <section id="features" className="px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#8b5a6b]">
                  Platform benefits
                </p>
                <h2 className="mt-3 font-serif text-4xl text-[#1c1917] sm:text-5xl">
                  Built for experienced singles
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#5c5650]">
                GrannyHunter is presented as a mature dating platform for adults seeking
                refined connections. TheDateCompass does not operate the destination site.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {grannyHunterFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`rounded-2xl border border-[#ddd5c8] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,25,23,0.08)] ${
                    index === 0 ? "sm:col-span-2 lg:col-span-2 lg:p-8" : ""
                  }`}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6d3b4e]/10 text-[#6d3b4e]">
                    {index === 0 ? (
                      <MessageCircle size={17} />
                    ) : index === 1 ? (
                      <Clock size={17} />
                    ) : (
                      <ChevronRight size={17} />
                    )}
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-[#1c1917]">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5c5650]">{feature.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <VisitCta href={affiliateUrl} placement="v2-features" />
            </div>
          </div>
        </section>

        {/* VISUAL SHOWCASE — editorial gallery */}
        <section className="border-t border-[#ddd5c8] bg-white px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#8b5a6b]">
              The experience
            </p>
            <h2 className="mt-3 font-serif text-3xl text-[#1c1917] sm:text-4xl">
              Mature dating, thoughtfully designed
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  src: grannyHunterVisuals.hero,
                  alt: "GrannyHunter mature dating",
                  caption: "Browse with confidence",
                },
                {
                  src: grannyHunterVisuals.wide,
                  alt: "GrannyHunter worldwide mature dating",
                  caption: "Connect worldwide",
                },
                {
                  src: grannyHunterVisuals.side,
                  alt: "GrannyHunter profiles",
                  caption: "Quality over quantity",
                },
              ].map(({ src, alt, caption }) => (
                <a
                  key={caption}
                  href={affiliateUrl}
                  target="_blank"
                  rel={REL}
                  onClick={() => trackAffiliateClick(grannyHunterOffer.name, "v2-gallery")}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/70 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 text-sm font-semibold text-[#f5f0eb]">
                    {caption}
                    <ArrowRight
                      size={14}
                      className="ml-1 inline transition-transform group-hover:translate-x-1"
                    />
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* MID CTA — split layout */}
        <section className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center bg-[#ece6dd] px-5 py-16 lg:px-12 lg:py-24">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#8b5a6b]">
              Ready to connect?
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#1c1917] sm:text-5xl">
              Start meeting experienced singles today
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#5c5650]">
              Visit GrannyHunter to review profiles, messaging options, and availability
              in your country.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <VisitCta href={affiliateUrl} placement="v2-mid-cta" />
              <a
                href="#faq"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-[#c4b8a8] px-7 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#4a4540] transition hover:border-[#6d3b4e] hover:text-[#6d3b4e]"
              >
                Read FAQ
              </a>
            </div>
            <AffiliateNote className="mt-5 max-w-md" light />
          </div>

          <div className="relative min-h-[400px]">
            <Image
              src={grannyHunterVisuals.wide}
              alt=""
              fill
              sizes="50vw"
              className="object-cover object-[center_25%]"
            />
            <div className="absolute inset-0 bg-[#6d3b4e]/20" />
          </div>
        </section>

        {/* FAQ — two-column open cards */}
        <section id="faq" className="px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#8b5a6b]">
                FAQ
              </p>
              <h2 className="mt-3 font-serif text-4xl text-[#1c1917]">Common questions</h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {grannyHunterFaqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-2xl border border-[#ddd5c8] bg-white p-6"
                >
                  <h3 className="font-serif text-lg text-[#1c1917]">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5c5650]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-[#ddd5c8] bg-[#1c1917] px-5 py-20 text-center lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl">
            <GrannyHunterWordmark className="mb-6 !text-[#f5f0eb]" />
            <h2 className="font-serif text-4xl text-[#f5f0eb] sm:text-5xl">
              Ready to explore GrannyHunter?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/55">
              Continue to GrannyHunter and review profiles, messaging, and terms for
              yourself — available worldwide for adults 18+.
            </p>
            <div className="mt-9 flex justify-center">
              <VisitCta
                href={affiliateUrl}
                placement="v2-footer-cta"
                label="Visit GrannyHunter"
                variant="light"
              />
            </div>
            <AffiliateNote className="mx-auto mt-5 max-w-md" />
          </div>
        </section>

        <BrowseByCountrySection
          links={getCountryBrowseLinks("mature")}
          title="Mature dating listings by country"
          description="Compare GrannyHunter and related mature dating offers across country-specific pages."
        />
      </main>

      <Footer />
    </>
  );
}
