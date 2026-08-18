"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Flame,
  Globe2,
  Heart,
  Lock,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";

import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import BrowseByCountrySection from "@/components/landing/BrowseByCountrySection";
import NoiseOverlay from "@/components/theme/NoiseOverlay";

import { trackAffiliateClick } from "@/lib/analytics";
import { getCountryBrowseLinks } from "@/data/countryBrowseLinks";
import { getTrackedAffiliateUrl } from "@/lib/trafficstars";

import {
  CASUAL_DATING_BANNER_URL,
  casualDatingFaqs,
  casualDatingFeatures,
  casualDatingOffer,
  casualDatingSteps,
  casualDatingTrustPoints,
  casualDatingVisuals,
} from "@/data/casualDatingOffers";

const REL = "sponsored nofollow noopener noreferrer";

const primaryButton =
  "group inline-flex min-h-[58px] items-stretch overflow-hidden rounded-xl border border-red-500/50 bg-gradient-to-r from-red-600 via-rose-600 to-red-500 text-white shadow-[0_12px_40px_rgba(220,38,38,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(220,38,38,0.45)]";

const secondaryButton =
  "inline-flex min-h-[58px] items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-7 text-sm font-bold uppercase tracking-[0.1em] text-cream backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.08]";

function FuckFinderLogo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass = {
    sm: "text-sm tracking-[0.1em]",
    md: "text-xl tracking-[0.12em]",
    lg: "text-3xl tracking-[0.14em]",
  };

  return (
    <span
      className={`inline-flex items-baseline font-display font-black uppercase ${sizeClass[size]} ${className}`}
      aria-label="FuckFinder"
    >
      <span className="bg-gradient-to-r from-red-400 via-rose-400 to-red-500 bg-clip-text text-transparent">
        Fuck
      </span>
      <span className="bg-gradient-to-r from-cream via-stone to-cream bg-clip-text text-transparent">
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
      onClick={() => trackAffiliateClick(casualDatingOffer.name, placement)}
    >
      <span className="flex flex-1 items-center justify-center px-7 text-sm font-extrabold uppercase tracking-[0.1em]">
        {label ?? casualDatingOffer.ctaLabel}
      </span>
      <span className="flex w-14 shrink-0 items-center justify-center bg-black/15">
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
        className="underline decoration-red-400/60 underline-offset-2 hover:text-red-300"
      >
        Affiliate disclosure
      </Link>
    </p>
  );
}

function CrimsonGlow({
  className = "",
  tone = "red",
}: {
  className?: string;
  tone?: "red" | "rose";
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[110px] ${
        tone === "rose" ? "bg-rose-600/20" : "bg-red-600/18"
      } ${className}`}
    />
  );
}

export default function CasualDatingLanding() {
  const [affiliateUrl, setAffiliateUrl] = useState<string>(
    casualDatingOffer.url
  );

  useEffect(() => {
    setAffiliateUrl(getTrackedAffiliateUrl(casualDatingOffer.url));
  }, []);

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-[#09080a] text-cream">
        <NoiseOverlay />

        {/* HERO */}
        <section className="relative min-h-[780px] overflow-hidden lg:min-h-[860px]">
          <Image
            src={casualDatingVisuals.hero}
            alt="Casual dating connections"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#09080a] via-[#09080a]/90 to-[#09080a]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09080a] via-transparent to-[#09080a]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(220,38,38,0.18),transparent_42%)]" />

          <CrimsonGlow className="-right-24 top-20 h-96 w-96" />
          <CrimsonGlow tone="rose" className="-left-28 bottom-10 h-80 w-80" />

          <div className="relative mx-auto grid min-h-[780px] max-w-7xl items-center gap-12 px-5 pb-16 pt-32 lg:min-h-[860px] lg:grid-cols-[1.1fr_0.75fr] lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-7 flex flex-wrap items-center gap-3">
                <FuckFinderLogo size="lg" />
                <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/35 bg-red-600/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-red-200 backdrop-blur-md">
                  <Flame size={11} />
                  Adults 18+
                </span>
              </div>

              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-red-300/90">
                <span className="h-px w-8 bg-red-500/60" />
                Casual dating · Worldwide
              </p>

              <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-[3.4rem]">
                Meet People Looking for{" "}
                <span className="font-serif-accent font-normal italic text-red-300">
                  Casual Connections
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-fog sm:text-lg">
                {casualDatingOffer.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {casualDatingOffer.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-red-500/15 bg-white/[0.05] px-3.5 py-2 text-xs font-semibold text-cream/85 backdrop-blur-md"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <VisitCta href={affiliateUrl} placement="hero" />
                <a href="#how-it-works" className={secondaryButton}>
                  How it works
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-fog/80">
                <span className="flex items-center gap-2">
                  <Sparkles size={14} className="text-red-400" />
                  {casualDatingOffer.promo}
                </span>
                <span className="flex items-center gap-2">
                  <Globe2 size={14} className="text-red-400/80" />
                  {casualDatingOffer.availability}
                </span>
              </div>

              <AffiliateNote className="mt-5 max-w-md text-[11px] leading-5 text-fog/60" />
            </div>

            <div className="relative mx-auto w-full max-w-[360px]">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-red-600/40 via-rose-900/30 to-red-700/20 opacity-55 blur-2xl" />

              <a
                href={affiliateUrl}
                target="_blank"
                rel={REL}
                onClick={() =>
                  trackAffiliateClick(casualDatingOffer.name, "hero-portrait")
                }
                className="group relative block overflow-hidden rounded-[1.7rem] border border-red-500/25 bg-black/30 shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={casualDatingVisuals.portrait}
                    alt="FuckFinder casual dating profiles"
                    fill
                    priority
                    sizes="(max-width: 1024px) 360px, 400px"
                    className="object-cover object-center transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09080a] via-transparent to-[#09080a]/10" />
                  <span className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-red-600/30">
                    {casualDatingOffer.badge}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="rounded-xl border border-red-500/15 bg-black/40 p-4 backdrop-blur-md">
                      <p className="text-xs font-bold uppercase tracking-[0.15em]">
                        Explore FuckFinder
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

          {/* Custom crimson marquee */}
          <div
            className="overflow-hidden border-y border-red-500/20 bg-red-600 text-white"
            aria-hidden
          >
            <div className="flex w-max animate-marquee py-3.5">
              {[
                ...Array(2),
              ]
                .flatMap(() => [
                  "Casual connections",
                  "Local profiles",
                  "Free to join",
                  "Adults 18+",
                  "FuckFinder",
                  "Worldwide",
                ])
                .map((item, i) => (
                  <span
                    key={`${item}-${i}`}
                    className="whitespace-nowrap px-7 text-[0.72rem] font-bold uppercase tracking-[0.22em] after:ml-7 after:opacity-55 after:content-['✦']"
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>
        </section>

        {/* QUICK BENEFITS */}
        <section
          id="benefits"
          className="relative border-b border-red-500/10 bg-[#0f0d10]"
        >
          <div className="mx-auto grid max-w-7xl divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              {
                icon: MapPin,
                title: "Local connections",
                text: "Find adults near you looking for casual dating and no-pressure meetups.",
              },
              {
                icon: MessageCircle,
                title: "Private messaging",
                text: "Start conversations privately and explore chemistry at your own pace.",
              },
              {
                icon: Zap,
                title: "Fast signup",
                text: "Create a profile in minutes and start browsing on desktop or mobile.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 px-6 py-7 lg:px-10">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-600/10 text-red-300">
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

        {/* HOW IT WORKS */}
        <section
          id="how-it-works"
          className="border-b border-red-500/10 px-5 py-16 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                Simple process
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                How{" "}
                <span className="font-serif-accent font-normal italic text-red-300">
                  FuckFinder
                </span>{" "}
                works
              </h2>
              <p className="mt-4 text-sm leading-6 text-fog">
                Three steps to start meeting adults looking for casual
                connections.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {casualDatingSteps.map((item) => (
                <div
                  key={item.step}
                  className="relative rounded-2xl border border-red-500/15 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-red-500/30"
                >
                  <p className="font-display text-4xl font-black text-red-600/40">
                    {item.step}
                  </p>
                  <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-fog">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <VisitCta href={affiliateUrl} placement="how-it-works" />
            </div>
          </div>
        </section>

        {/* AFFILIATE BANNER */}
        <section className="border-b border-red-500/10 bg-[#0c0a0d] px-5 py-14 lg:px-8 lg:py-18">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="max-w-md text-center lg:text-left">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                Featured offer
              </p>
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                Ready to meet someone tonight?
              </h2>
              <p className="mt-3 text-sm leading-6 text-fog">
                Tap the banner or button below to visit FuckFinder and start
                browsing profiles in your area.
              </p>
              <div className="mt-6 hidden lg:block">
                <VisitCta
                  href={affiliateUrl}
                  placement="banner-section"
                  label="Visit FuckFinder →"
                />
              </div>
            </div>

            <a
              href={affiliateUrl}
              target="_blank"
              rel={REL}
              onClick={() =>
                trackAffiliateClick(casualDatingOffer.name, "affiliate-banner")
              }
              className="group shrink-0 overflow-hidden rounded-xl border border-red-500/20 shadow-[0_20px_60px_rgba(220,38,38,0.15)] transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_25px_70px_rgba(220,38,38,0.25)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CASUAL_DATING_BANNER_URL}
                alt="FuckFinder casual dating"
                width={300}
                height={250}
                className="block"
              />
            </a>

            <div className="lg:hidden">
              <VisitCta
                href={affiliateUrl}
                placement="banner-section-mobile"
                label="Visit FuckFinder →"
              />
            </div>
          </div>
        </section>

        {/* TRUST / SOCIAL PROOF */}
        <section className="border-b border-red-500/10 px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                Why adults choose FuckFinder
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Trusted casual dating,{" "}
                <span className="font-serif-accent font-normal italic text-red-300">
                  worldwide
                </span>
              </h2>
              <p className="mt-4 text-sm leading-6 text-fog">
                A platform focused on casual connections, discreet browsing, and
                adults who know what they want.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {casualDatingTrustPoints.map(({ stat, label, text }) => (
                <div
                  key={stat}
                  className="rounded-2xl border border-red-500/15 bg-[#0f0d10] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-red-500/30"
                >
                  <p className="font-display text-3xl font-extrabold tracking-tight text-red-400">
                    {stat}
                  </p>
                  <p className="mt-2 flex items-center justify-center gap-1.5 text-sm font-bold">
                    <Star size={14} className="text-red-400" />
                    {label}
                  </p>
                  <p className="mt-3 text-xs leading-5 text-fog">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-[0.14em] text-fog/70">
              <span className="flex items-center gap-2">
                <Users size={14} className="text-red-400" />
                Active community
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-red-400" />
                Discreet browsing
              </span>
              <span className="flex items-center gap-2">
                <Lock size={14} className="text-red-400" />
                Private messaging
              </span>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section
          id="features"
          className="relative border-b border-red-500/10 px-5 py-16 lg:px-8 lg:py-24"
        >
          <CrimsonGlow tone="rose" className="-left-40 top-1/3 h-96 w-96" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-red-600/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.7rem] border border-red-500/15">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={casualDatingVisuals.side}
                    alt="FuckFinder casual dating platform"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09080a]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-full border border-red-500/20 bg-black/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] backdrop-blur-md">
                    Casual dating platform
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                Platform benefits
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Built for{" "}
                <span className="font-serif-accent font-normal italic text-red-300">
                  casual connections
                </span>
              </h2>
              <p className="mt-5 text-sm leading-6 text-fog">
                FuckFinder is presented as a casual dating platform for adults
                seeking relaxed, no-pressure connections. TheDateCompass does not
                operate the destination site.
              </p>

              <div className="mt-8 space-y-3">
                {casualDatingFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex gap-4 rounded-xl border border-red-500/10 bg-white/[0.03] p-4 transition hover:border-red-500/25 hover:bg-white/[0.05]"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600/10 text-red-300">
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

        {/* MID CTA */}
        <section className="relative overflow-hidden border-b border-red-500/10">
          <div className="relative min-h-[480px]">
            <Image
              src={casualDatingVisuals.wide}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#09080a]/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#09080a] via-[#09080a]/70 to-[#09080a]/30" />

            <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-5 py-16 lg:px-8">
              <div className="max-w-xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-300/90">
                  Don&apos;t wait
                </p>
                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                  Start meeting people for{" "}
                  <span className="font-serif-accent font-normal italic text-red-300">
                    casual connections
                  </span>{" "}
                  today.
                </h2>
                <p className="mt-5 text-sm leading-6 text-fog sm:text-base">
                  Visit FuckFinder to review profiles, messaging options, and
                  availability in your area.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <VisitCta href={affiliateUrl} placement="mid-cta" />
                  <a href="#faq" className={secondaryButton}>
                    Read FAQ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-red-400">
              Common questions
            </p>
            <h2 className="mb-10 text-center text-3xl font-black tracking-tight md:text-4xl">
              FAQ
            </h2>
            <div className="divide-y divide-white/10">
              {casualDatingFaqs.map((faq) => (
                <div key={faq.question} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="mb-2 text-base font-semibold">
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-relaxed text-fog/90">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 pb-20 pt-4 lg:pb-28">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-red-500/30 bg-gradient-to-br from-[#120a0c] to-[#1a0a10] px-8 py-12 text-center lg:px-12">
            <CrimsonGlow className="-right-20 -top-20 h-48 w-48" />
            <div className="relative">
              <Heart
                size={28}
                className="mx-auto mb-4 text-red-400"
                aria-hidden
              />
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Ready to explore FuckFinder?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-fog md:text-base">
                Join free, browse local profiles, and start connecting with
                adults looking for casual dating on FuckFinder.
              </p>
              <div className="mt-8 flex justify-center">
                <VisitCta
                  href={affiliateUrl}
                  placement="footer-cta"
                  label="Join FuckFinder Free →"
                />
              </div>
              <AffiliateNote className="mt-5 text-[11px] text-fog/55" />
            </div>
          </div>
        </section>

        <BrowseByCountrySection
          links={getCountryBrowseLinks("casual")}
          title="Explore casual dating offers by country"
          description="See how FuckFinder and related casual dating listings appear on our active country shortlists."
        />
      </main>

      <Footer />
    </>
  );
}
