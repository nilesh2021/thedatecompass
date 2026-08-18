"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Crown,
  FileText,
  Globe2,
  Heart,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import BrowseByCountrySection from "@/components/landing/BrowseByCountrySection";
import NoiseOverlay from "@/components/theme/NoiseOverlay";

import { trackAffiliateClick } from "@/lib/analytics";
import { getCountryBrowseLinks } from "@/data/countryBrowseLinks";
import { getTrackedAffiliateUrl } from "@/lib/trafficstars";

import {
  milfDatingExploreCards,
  milfDatingFaqs,
  milfDatingFeatures,
  milfDatingOffer,
  milfDatingTrustPoints,
  milfDatingVisuals,
} from "@/data/milfDatingOffers";

const REL = "sponsored nofollow noopener noreferrer";

const primaryButton =
  "group inline-flex min-h-[56px] items-stretch overflow-hidden rounded-xl border border-amber-400/40 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 text-ink shadow-[0_12px_35px_rgba(201,169,98,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(201,169,98,0.4)]";

const secondaryButton =
  "inline-flex min-h-[56px] items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-7 text-sm font-bold uppercase tracking-[0.1em] text-cream backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/[0.08]";

function MilfFinderLogo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass = {
    sm: "text-sm tracking-[0.12em]",
    md: "text-xl tracking-[0.14em]",
    lg: "text-3xl tracking-[0.16em]",
  };

  return (
    <span
      className={`inline-flex items-baseline font-display font-extrabold uppercase ${sizeClass[size]} ${className}`}
      aria-label="MilfFinder"
    >
      <span className="bg-gradient-to-r from-amber-200 via-amber-100 to-cream bg-clip-text text-transparent">
        Milf
      </span>
      <span className="bg-gradient-to-r from-rose-300 via-amber-300 to-amber-200 bg-clip-text text-transparent">
        Finder
      </span>
    </span>
  );
}

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
      onClick={() => trackAffiliateClick(milfDatingOffer.name, placement)}
    >
      <span className="flex flex-1 items-center justify-center px-7 text-sm font-extrabold uppercase tracking-[0.1em]">
        {label ?? milfDatingOffer.ctaLabel}
      </span>

      <span className="flex w-14 shrink-0 items-center justify-center bg-black/10">
        <ArrowUpRight
          size={19}
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
        className="underline decoration-amber-400/60 underline-offset-2 hover:text-amber-300"
      >
        Affiliate disclosure
      </Link>
    </p>
  );
}

function WarmGlow({
  className = "",
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "wine";
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[110px] ${
        tone === "wine" ? "bg-rose-900/20" : "bg-amber-500/15"
      } ${className}`}
    />
  );
}

export default function MilfDatingLanding() {
  const [affiliateUrl, setAffiliateUrl] = useState<string>(
    milfDatingOffer.url
  );

  useEffect(() => {
    setAffiliateUrl(getTrackedAffiliateUrl(milfDatingOffer.url));
  }, []);

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-[#0c0a09] text-cream">
        <NoiseOverlay />

        {/* HERO */}
        <section className="relative min-h-[760px] overflow-hidden lg:min-h-[820px]">
          <Image
            src={milfDatingVisuals.hero}
            alt="MilfFinder mature dating"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_20%]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09] via-[#0c0a09]/88 to-[#0c0a09]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-[#0c0a09]/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_38%,rgba(201,169,98,0.22),transparent_40%)]" />

          <WarmGlow className="-right-20 top-24 h-80 w-80" />
          <WarmGlow tone="wine" className="-left-24 bottom-16 h-72 w-72" />

          <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-5 pb-16 pt-32 lg:min-h-[820px] lg:grid-cols-[1.1fr_0.7fr] lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-7 flex flex-wrap items-center gap-3">
                <MilfFinderLogo size="lg" />

                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/35 bg-amber-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-amber-200 backdrop-blur-md">
                  <Crown size={11} />
                  Adults 18+
                </span>
              </div>

              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-300/90">
                <span className="h-px w-8 bg-amber-400/60" />
                Mature dating · Worldwide
              </p>

              <h1 className="text-4xl font-black leading-[0.96] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Meet Mature Singles on{" "}
                <span className="font-serif-accent font-normal italic text-amber-200">
                  MilfFinder
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-fog sm:text-lg">
                {milfDatingOffer.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {milfDatingOffer.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-amber-400/15 bg-white/[0.05] px-3.5 py-2 text-xs font-semibold text-cream/85 backdrop-blur-md"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <VisitCta href={affiliateUrl} placement="hero" />

                <a href="#benefits" className={secondaryButton}>
                  See Benefits
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-fog/80">
                <span className="flex items-center gap-2">
                  <Sparkles size={14} className="text-amber-400" />
                  {milfDatingOffer.promo}
                </span>
                <span className="flex items-center gap-2">
                  <Globe2 size={14} className="text-amber-400/80" />
                  {milfDatingOffer.availability}
                </span>
              </div>

              <AffiliateNote className="mt-5 max-w-md text-[11px] leading-5 text-fog/60" />
            </div>

            <div className="relative mx-auto w-full max-w-[360px]">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-amber-500/40 via-rose-900/30 to-amber-600/20 opacity-50 blur-2xl" />

              <a
                href={affiliateUrl}
                target="_blank"
                rel={REL}
                onClick={() =>
                  trackAffiliateClick(milfDatingOffer.name, "hero-portrait")
                }
                className="group relative block overflow-hidden rounded-[1.7rem] border border-amber-400/20 bg-black/30 shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={milfDatingVisuals.portrait}
                    alt="MilfFinder mature dating profiles"
                    fill
                    priority
                    sizes="(max-width: 1024px) 360px, 400px"
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-[#0c0a09]/10" />

                  <span className="absolute left-4 top-4 rounded-full bg-amber-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-ink shadow-lg shadow-amber-500/30">
                    {milfDatingOffer.badge}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="rounded-xl border border-amber-400/15 bg-black/35 p-4 backdrop-blur-md">
                      <p className="text-xs font-bold uppercase tracking-[0.15em]">
                        Explore MilfFinder
                      </p>
                      <p className="mt-1 text-xs text-fog">
                        View the destination site →
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* QUICK BENEFITS */}
        <section
          id="benefits"
          className="relative border-y border-amber-400/10 bg-[#12100e]"
        >
          <div className="mx-auto grid max-w-7xl divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              {
                icon: Heart,
                title: "Mature connections",
                text: "Meet experienced singles who value conversation and chemistry.",
              },
              {
                icon: MessageCircle,
                title: "Private messaging",
                text: "Browse profiles and connect through secure messaging tools.",
              },
              {
                icon: Globe2,
                title: "Worldwide access",
                text: "Available across all countries for adult users 18+.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 px-6 py-7 lg:px-10">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-300">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-fog">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST / SOCIAL PROOF */}
        <section className="border-b border-amber-400/10 px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                Why adults choose MilfFinder
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Trusted mature dating,{" "}
                <span className="font-serif-accent font-normal italic text-amber-200">
                  worldwide
                </span>
              </h2>
              <p className="mt-4 text-sm leading-6 text-fog">
                A platform focused on mature singles, discreet connections, and
                adults who prefer quality over quantity.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {milfDatingTrustPoints.map(({ stat, label, text }) => (
                <div
                  key={stat}
                  className="rounded-2xl border border-amber-400/15 bg-[#12100e] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-amber-400/30"
                >
                  <p className="font-display text-3xl font-extrabold tracking-tight text-amber-300">
                    {stat}
                  </p>
                  <p className="mt-2 flex items-center justify-center gap-1.5 text-sm font-bold">
                    <Star size={14} className="text-amber-400" />
                    {label}
                  </p>
                  <p className="mt-3 text-xs leading-5 text-fog">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-[0.14em] text-fog/70">
              <span className="flex items-center gap-2">
                <Users size={14} className="text-amber-400" />
                Mature community
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-amber-400" />
                Discreet browsing
              </span>
              <span className="flex items-center gap-2">
                <Globe2 size={14} className="text-amber-400" />
                All countries
              </span>
            </div>
          </div>
        </section>

        {/* IMAGE SHOWCASE */}
        <section className="border-b border-amber-400/10 px-5 py-14 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                  The experience
                </p>
                <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                  Sophisticated{" "}
                  <span className="font-serif-accent font-normal italic text-amber-200">
                    mature dating
                  </span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-fog">
                Explore what MilfFinder offers before you visit the destination
                site.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {milfDatingExploreCards.map((card, index) => (
                <div
                  key={card.title}
                  className={`group relative overflow-hidden rounded-2xl border border-amber-400/10 ${
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
                      className="object-cover transition duration-700 group-hover:scale-105"
                      style={{ objectPosition: card.objectPosition }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-300">
                        0{index + 1}
                      </span>
                      <h3 className="mt-1 text-lg font-black uppercase tracking-wide">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-white/70">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section
          id="features"
          className="relative border-b border-amber-400/10 px-5 py-16 lg:px-8 lg:py-24"
        >
          <WarmGlow tone="wine" className="-left-40 top-1/3 h-96 w-96" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-amber-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.7rem] border border-amber-400/15">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={milfDatingVisuals.side}
                    alt="MilfFinder mature dating platform"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-full border border-amber-400/20 bg-black/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] backdrop-blur-md">
                    Mature dating platform
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                Platform benefits
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Built for{" "}
                <span className="font-serif-accent font-normal italic text-amber-200">
                  mature singles
                </span>
              </h2>
              <p className="mt-5 text-sm leading-6 text-fog">
                MilfFinder is presented as a mature dating platform for adults
                seeking experienced connections. TheDateCompass does not operate
                the destination site.
              </p>

              <div className="mt-8 space-y-3">
                {milfDatingFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex gap-4 rounded-xl border border-amber-400/10 bg-white/[0.03] p-4 transition hover:border-amber-400/25 hover:bg-white/[0.05]"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-300">
                      <Check size={15} />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold">{feature.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-fog">
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

        {/* THINGS TO KNOW */}
        <section className="border-b border-amber-400/10 bg-[#12100e]/60 px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-300/80">
                Before you visit
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Things to know
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
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
                  text: "Listed as worldwide; specific features may vary by region over time.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-amber-400/10 bg-[#0c0a09] p-6"
                >
                  <Icon size={22} className="text-amber-300" />
                  <h3 className="mt-4 font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-fog">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MID CTA */}
        <section className="relative overflow-hidden border-b border-amber-400/10">
          <div className="relative min-h-[500px]">
            <Image
              src={milfDatingVisuals.wide}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[center_25%]"
            />
            <div className="absolute inset-0 bg-[#0c0a09]/78" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09] via-[#0c0a09]/70 to-[#0c0a09]/30" />

            <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-5 py-16 lg:px-8">
              <div className="max-w-xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-300/90">
                  Ready to connect?
                </p>
                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                  Start meeting{" "}
                  <span className="font-serif-accent font-normal italic text-amber-200">
                    mature singles
                  </span>{" "}
                  today.
                </h2>
                <p className="mt-5 text-sm leading-6 text-fog sm:text-base">
                  Visit MilfFinder to review profiles, messaging options, and
                  availability in your country.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <VisitCta href={affiliateUrl} placement="mid-cta" />
                  <a href="#faq" className={secondaryButton}>
                    Read FAQ
                  </a>
                </div>

                <AffiliateNote className="mt-5 text-[11px] leading-5 text-fog/60" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="border-b border-amber-400/10 px-5 py-16 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                FAQ
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Common questions
              </h2>
            </div>

            <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-amber-400/10 bg-[#12100e]">
              {milfDatingFaqs.map((faq) => (
                <details key={faq.question} className="group px-6 py-5">
                  <summary className="cursor-pointer list-none pr-8 text-sm font-bold transition group-hover:text-amber-300">
                    {faq.question}
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-fog">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden px-5 py-16 lg:px-8 lg:py-24">
          <WarmGlow className="left-1/2 top-0 h-72 w-[500px] -translate-x-1/2" />

          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-amber-400/15 bg-[#12100e] p-8 text-center sm:p-12 lg:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,169,98,0.12),transparent_55%)]" />

            <div className="relative">
              <MilfFinderLogo size="md" className="mx-auto mb-6" />

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Ready to explore MilfFinder?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-fog sm:text-base">
                Continue to MilfFinder and review profiles, messaging, and terms
                for yourself — available worldwide for adults 18+.
              </p>

              <div className="mt-8 flex justify-center">
                <VisitCta
                  href={affiliateUrl}
                  placement="footer-cta"
                  label="Visit MilfFinder"
                />
              </div>

              <AffiliateNote className="mx-auto mt-5 max-w-md text-[11px] leading-5 text-fog/60" />
            </div>
          </div>
        </section>

        <BrowseByCountrySection
          links={getCountryBrowseLinks("mature")}
          title="Mature dating listings by country"
          description="Compare MilfFinder and related mature dating offers across country-specific pages."
        />
      </main>

      <Footer />
    </>
  );
}
