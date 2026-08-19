"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  FileText,
  Flame,
  Globe2,
  Heart,
  Lock,
  MessageCircle,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import ManFinderLogo from "@/components/landing/ManFinderLogo";
import BrowseByCountrySection from "@/components/landing/BrowseByCountrySection";
import NoiseOverlay from "@/components/theme/NoiseOverlay";

import { trackAffiliateClick } from "@/lib/analytics";
import { getCountryBrowseLinks } from "@/data/countryBrowseLinks";
import { getTrackedAffiliateUrl } from "@/lib/trafficstars";

import {
  manFinderExploreCards,
  manFinderFaqs,
  manFinderFeatures,
  manFinderOffer,
  manFinderVisuals,
} from "@/data/manFinderOffers";

const REL = "sponsored nofollow noopener noreferrer";

const gold = "#c9a96e";

const primaryButton =
  "group inline-flex min-h-[54px] items-stretch overflow-hidden rounded-none border border-[#c9a96e] bg-[#c9a96e] text-[#140c0c] shadow-[0_16px_40px_rgba(201,169,110,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d4b67c] hover:shadow-[0_20px_50px_rgba(201,169,110,0.32)]";

const secondaryButton =
  "inline-flex min-h-[54px] items-center justify-center rounded-none border border-[#c9a96e]/45 bg-transparent px-7 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e8dcc4] transition duration-300 hover:border-[#c9a96e] hover:bg-[#c9a96e]/10";

function VisitCta({
  href,
  placement,
  className = primaryButton,
  label,
}: {
  href: string;
  placement: string;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel={REL}
      className={className}
      onClick={() => trackAffiliateClick(manFinderOffer.name, placement)}
    >
      <span className="flex flex-1 items-center justify-center px-8 text-[11px] font-extrabold uppercase tracking-[0.22em]">
        {label ?? manFinderOffer.ctaLabel}
      </span>

      <span className="flex w-12 shrink-0 items-center justify-center border-l border-black/15 bg-black/10">
        <ArrowUpRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </a>
  );
}

function AffiliateNote({ className = "" }: { className?: string }) {
  return (
    <p className={className}>
      Affiliate link · Adults 18+. TheDateCompass may earn a commission if you
      visit through this link.{" "}
      <Link
        href="/affiliate-disclosure"
        className="underline decoration-[#c9a96e]/50 underline-offset-2 hover:text-[#c9a96e]"
      >
        Affiliate disclosure
      </Link>
    </p>
  );
}

function GoldRule({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block h-px w-10 bg-gradient-to-r from-[#c9a96e] to-transparent ${className}`}
    />
  );
}

export default function ManFinderLanding() {
  const [affiliateUrl, setAffiliateUrl] = useState<string>(
    manFinderOffer.url
  );

  useEffect(() => {
    setAffiliateUrl(getTrackedAffiliateUrl(manFinderOffer.url));
  }, []);

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-[#070505] text-[#f3ebe3]">
        <NoiseOverlay />

        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative min-h-[780px] overflow-hidden lg:min-h-[860px]">
          <Image
            src={manFinderVisuals.hero}
            alt="ManFinder gay dating"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_15%] saturate-[0.72] contrast-[1.08]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#070505] via-[#070505]/88 to-[#070505]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070505] via-transparent to-[#070505]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_38%,rgba(139,30,63,0.28),transparent_42%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_80%,rgba(201,169,110,0.08),transparent_36%)]" />

          <div className="relative mx-auto grid min-h-[780px] max-w-7xl items-center gap-12 px-5 pb-16 pt-32 lg:min-h-[860px] lg:grid-cols-[1.15fr_0.7fr] lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <ManFinderLogo size="lg" className="[&_span:last-child]:from-[#c9a96e] [&_span:last-child]:via-[#e8d5a3] [&_span:last-child]:to-[#c9a96e]" />

                <span className="inline-flex items-center gap-1.5 border border-[#c9a96e]/35 bg-[#c9a96e]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c9a96e] backdrop-blur-md">
                  <Lock size={10} />
                  Discreet · 18+
                </span>
              </div>

              <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#c9a96e]">
                <GoldRule />
                Private connections for men
              </p>

              <h1 className="font-serif text-[3.15rem] font-normal leading-[0.92] tracking-[-0.03em] text-[#f7f0e6] sm:text-6xl lg:text-[4.6rem]">
                {manFinderOffer.name}
                <span className="mt-3 block font-serif-accent text-[0.72em] italic text-[#c9a96e]">
                  where desire stays discreet.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-[15px] leading-7 text-[#c4b8aa] sm:text-base">
                {manFinderOffer.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {manFinderOffer.highlights.map((item) => (
                  <span
                    key={item}
                    className="border border-[#c9a96e]/20 bg-[#c9a96e]/[0.06] px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#e8dcc4]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <VisitCta
  href={affiliateUrl}
  placement="hero"
  label="Visit ManFinder"
/>

                <a href="#features" className={secondaryButton}>
                  Explore privately
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-7 gap-y-2 text-[11px] uppercase tracking-[0.16em] text-[#9a8e82]">
                <span className="flex items-center gap-2">
                  <Flame size={13} className="text-[#c9a96e]" />
                  {manFinderOffer.promo}
                </span>
                <span>Best for: {manFinderOffer.bestFor}</span>
              </div>

              <AffiliateNote className="mt-6 max-w-md text-[11px] leading-5 text-[#7d736a]" />
            </div>

            <div className="relative mx-auto w-full max-w-[360px]">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#8b1e3f]/50 via-[#c9a96e]/20 to-transparent opacity-70 blur-3xl" />

              <a
  href={affiliateUrl}
  target="_blank"
  rel={REL}
  onClick={() =>
    trackAffiliateClick(manFinderOffer.name, "hero-portrait")
  }
  aria-label="Visit ManFinder"
  className="group relative block cursor-pointer overflow-hidden border-2 border-[#c9a96e]/40 bg-black/40 shadow-[0_40px_90px_rgba(0,0,0,0.65)] transition duration-300 hover:-translate-y-1 hover:border-[#c9a96e] hover:shadow-[0_45px_100px_rgba(201,169,110,0.28)] focus:outline-none focus:ring-2 focus:ring-[#c9a96e] focus:ring-offset-2 focus:ring-offset-[#070505]"
>
  <div className="pointer-events-none absolute inset-3 z-20 border border-[#c9a96e]/20 transition duration-300 group-hover:border-[#c9a96e]/60" />

  <div className="relative aspect-[3/4]">
    <Image
      src={manFinderVisuals.portrait}
      alt="ManFinder dating profiles"
      fill
      priority
      sizes="(max-width: 1024px) 360px, 400px"
      className="object-cover object-top saturate-[0.8] transition duration-700 group-hover:scale-105 group-hover:saturate-100"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-[#070505] via-transparent to-black/20" />

    {/* Click indicator */}
    <div className="absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center border border-[#c9a96e]/60 bg-[#070505]/75 text-[#c9a96e] backdrop-blur-sm transition duration-300 group-hover:bg-[#c9a96e] group-hover:text-[#140c0c]">
      <ArrowUpRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </div>

    {/* Clickable CTA */}
    <div className="absolute inset-x-5 bottom-5 z-30">
      <div className="border border-[#c9a96e] bg-[#c9a96e] px-5 py-3 text-center text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#140c0c] shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition duration-300 group-hover:bg-[#e8d5a3]">
        Visit ManFinder
        <span className="ml-2">↗</span>
      </div>

      <p className="mt-2 text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-[#e8dcc4]/80">
        Click to explore
      </p>
    </div>
  </div>
</a>
            </div>
          </div>
        </section>

        {/* =========================================================
            QUICK BENEFITS
        ========================================================= */}
        <section className="relative border-y border-[#c9a96e]/15 bg-[#0d0909]">
          <div className="mx-auto grid max-w-7xl divide-y divide-[#c9a96e]/12 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              {
                icon: Heart,
                title: "Gay dating",
                text: "A platform focused on men seeking men.",
              },
              {
                icon: MessageCircle,
                title: "Private chat",
                text: "Browse profiles and explore messaging on your terms.",
              },
              {
                icon: Globe2,
                title: "By country",
                text: "Compare dating offers available in your location.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 px-6 py-8 lg:px-10">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c9a96e]/25 text-[#c9a96e]">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className="font-serif text-lg text-[#f3ebe3]">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#9a8e82]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            IMAGE SHOWCASE
        ========================================================= */}
        <section className="border-b border-[#c9a96e]/12 px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a96e]">
                  <GoldRule />
                  The experience
                </p>
                <h2 className="max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                  A closer look at{" "}
                  <span className="font-serif-accent italic text-[#c9a96e]">
                    ManFinder
                  </span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-[#9a8e82]">
                Explore the platform and decide whether it fits what you are
                looking for — privately, at your own pace.
              </p>
            </div>

            <div className="grid gap-px bg-[#c9a96e]/15 sm:grid-cols-2 lg:grid-cols-4">
              {manFinderExploreCards.map((card, index) => (
                <div
                  key={card.title}
                  className={`group relative overflow-hidden bg-[#070505] ${
                    index === 0 ? "sm:row-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative ${
                      index === 0
                        ? "aspect-[4/5] sm:aspect-auto sm:h-full"
                        : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover saturate-[0.75] transition duration-700 group-hover:scale-105 group-hover:saturate-100"
                      style={{ objectPosition: card.objectPosition }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c9a96e]">
                        0{index + 1}
                      </span>
                      <h3 className="mt-1 font-serif text-xl text-[#f3ebe3]">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-[#c4b8aa]/80">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FEATURES
        ========================================================= */}
        <section
          id="features"
          className="relative border-b border-[#c9a96e]/12 px-5 py-16 lg:px-8 lg:py-24"
        >
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="absolute -inset-3 bg-[#8b1e3f]/15 blur-3xl" />
              <div className="relative overflow-hidden border border-[#c9a96e]/25">
                <div className="pointer-events-none absolute inset-3 z-10 border border-[#c9a96e]/15" />
                <div className="relative aspect-[4/5]">
                  <Image
                    src={manFinderVisuals.side}
                    alt="ManFinder gay dating platform"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top saturate-[0.8]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070505]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 z-20 border border-[#c9a96e]/40 bg-[#070505]/60 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c9a96e] backdrop-blur-md">
                    Gay dating platform
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a96e]">
                <GoldRule />
                Why explore it
              </p>

              <h2 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                Built around{" "}
                <span className="font-serif-accent italic text-[#c9a96e]">
                  discretion
                </span>
              </h2>

              <p className="mt-5 text-sm leading-6 text-[#9a8e82]">
                ManFinder is presented as a gay dating and social platform for
                men seeking men. TheDateCompass does not operate the destination
                site.
              </p>

              <div className="mt-8 space-y-px bg-[#c9a96e]/15">
                {manFinderFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex gap-4 bg-[#0d0909] p-4 transition hover:bg-[#140c0c]"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-[#c9a96e]/30 text-[#c9a96e]">
                      <Check size={14} />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold tracking-wide">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-[#9a8e82]">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <VisitCta href={affiliateUrl} placement="features" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            WHO IS IT FOR
        ========================================================= */}
        <section className="border-b border-[#c9a96e]/12 bg-[#0d0909] px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a96e]">
                <GoldRule />
                Who it may suit
              </p>
              <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
                Is ManFinder right for you?
              </h2>
              <p className="mt-4 text-sm leading-6 text-[#9a8e82]">
                For adults exploring gay dating, social connections, profile
                discovery, and messaging with other men.
              </p>
            </div>

            <div className="mt-10 grid gap-px bg-[#c9a96e]/15 md:grid-cols-3">
              {[
                {
                  icon: Heart,
                  title: "Gay dating",
                  text: "Adults looking for gay dating or social connections with other men.",
                },
                {
                  icon: MessageCircle,
                  title: "Social & chat",
                  text: "People interested in browsing profiles and exploring messaging.",
                },
                {
                  icon: Globe2,
                  title: "Comparing offers",
                  text: "Visitors comparing gay dating platforms before choosing one.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="bg-[#070505] p-7 transition duration-300 hover:bg-[#140c0c]"
                >
                  <span className="flex h-11 w-11 items-center justify-center border border-[#c9a96e]/25 text-[#c9a96e]">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#9a8e82]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            THINGS TO KNOW
        ========================================================= */}
        <section className="border-b border-[#c9a96e]/12 px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-xl">
              <p className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a96e]">
                <GoldRule />
                Before you visit
              </p>
              <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
                Things to know
              </h2>
            </div>

            <div className="mt-10 grid gap-px bg-[#c9a96e]/15 md:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Privacy",
                  text: "Review privacy settings and consider what profile information you choose to share.",
                },
                {
                  icon: FileText,
                  title: "Terms & pricing",
                  text: "Check the destination site's current terms, pricing, and account rules.",
                },
                {
                  icon: Smartphone,
                  title: "Availability",
                  text: "Availability can vary by location and may change over time.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-[#0d0909] p-7">
                  <Icon size={20} style={{ color: gold }} />
                  <h3 className="mt-4 font-serif text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#9a8e82]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA BANNER
        ========================================================= */}
        <section className="relative overflow-hidden border-b border-[#c9a96e]/12">
          <div className="relative min-h-[520px]">
            <Image
              src={manFinderVisuals.wide}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[center_25%] saturate-[0.7]"
            />
            <div className="absolute inset-0 bg-[#070505]/78" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070505] via-[#070505]/75 to-[#070505]/35" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,30,63,0.22),transparent_45%)]" />

            <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-16 lg:px-8">
              <div className="max-w-xl">
                <p className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a96e]">
                  <GoldRule />
                  Ready when you are
                </p>
                <h2 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                  See what{" "}
                  <span className="font-serif-accent italic text-[#c9a96e]">
                    ManFinder
                  </span>{" "}
                  has to offer.
                </h2>
                <p className="mt-5 text-sm leading-6 text-[#c4b8aa] sm:text-base">
                  Visit the destination site to review profiles, messaging
                  options, terms, and availability.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <VisitCta href={affiliateUrl} placement="mid-cta" />
                  <a href="#faq" className={secondaryButton}>
                    Read FAQ
                  </a>
                </div>
                <AffiliateNote className="mt-5 text-[11px] leading-5 text-[#7d736a]" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================= */}
        <section
          id="faq"
          className="border-b border-[#c9a96e]/12 px-5 py-16 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a96e]">
                FAQ
              </p>
              <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
                Common questions
              </h2>
            </div>

            <div className="mt-10 divide-y divide-[#c9a96e]/15 border border-[#c9a96e]/20 bg-[#0d0909]">
              {manFinderFaqs.map((faq) => (
                <details key={faq.question} className="group px-6 py-5">
                  <summary className="cursor-pointer list-none pr-8 font-serif text-lg transition group-hover:text-[#c9a96e]">
                    {faq.question}
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-[#9a8e82]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="relative overflow-hidden px-5 py-16 lg:px-8 lg:py-24">
          <div className="relative mx-auto max-w-4xl overflow-hidden border border-[#c9a96e]/25 bg-[#0d0909] p-8 text-center sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute inset-4 border border-[#c9a96e]/12" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,30,63,0.18),transparent_55%)]" />

            <div className="relative">
              <ManFinderLogo
                size="md"
                className="mx-auto mb-6 [&_span:last-child]:from-[#c9a96e] [&_span:last-child]:via-[#e8d5a3] [&_span:last-child]:to-[#c9a96e]"
              />

              <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
                Ready to explore?
              </h2>

              <p className="mx-auto mt-4 max-w-xl font-serif-accent text-xl italic text-[#c9a96e]">
                Discreet. Direct. On your terms.
              </p>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#9a8e82] sm:text-base">
                Continue to ManFinder and review the current experience,
                profiles, messaging options, and terms for yourself.
              </p>

              <div className="mt-8 flex justify-center">
                <VisitCta
                  href={affiliateUrl}
                  placement="footer-cta"
                  label="Visit ManFinder"
                />
              </div>

              <AffiliateNote className="mx-auto mt-5 max-w-md text-[11px] leading-5 text-[#7d736a]" />
            </div>
          </div>
        </section>

        <BrowseByCountrySection
          links={getCountryBrowseLinks("gay")}
          title="Gay dating listings by country"
          description="Compare ManFinder and related gay dating offers across country-specific pages."
        />
      </main>

      <Footer />
    </>
  );
}
