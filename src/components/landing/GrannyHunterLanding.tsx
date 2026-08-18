"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Gem,
  Globe2,
  Heart,
  MessageCircle,
  ShieldCheck,
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
  grannyHunterFaqs,
  grannyHunterFeatures,
  grannyHunterOffer,
  grannyHunterSteps,
  grannyHunterTrustPoints,
  grannyHunterVisuals,
} from "@/data/grannyHunterOffers";

const REL = "sponsored nofollow noopener noreferrer";

const primaryButton =
  "group inline-flex min-h-[58px] items-stretch overflow-hidden rounded-xl border border-[#c9a87c]/45 bg-gradient-to-r from-[#8b4d63] via-[#a65d72] to-[#c9a87c] text-cream shadow-[0_14px_40px_rgba(139,77,99,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(201,168,124,0.35)]";

const secondaryButton =
  "inline-flex min-h-[58px] items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] px-7 text-sm font-bold uppercase tracking-[0.1em] text-cream backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#c9a87c]/40 hover:bg-white/[0.07]";

function GrannyHunterLogo({
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
      className={`inline-flex items-baseline font-display font-extrabold uppercase ${sizeClass[size]} ${className}`}
      aria-label="GrannyHunter"
    >
      <span className="bg-gradient-to-r from-cream via-[#f0e4dc] to-[#e8d5d0] bg-clip-text text-transparent">
        Granny
      </span>
      <span className="bg-gradient-to-r from-[#d4a574] via-[#c9a87c] to-[#e8c9a8] bg-clip-text text-transparent">
        Hunter
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
      onClick={() => trackAffiliateClick(grannyHunterOffer.name, placement)}
    >
      <span className="flex flex-1 items-center justify-center px-7 text-sm font-extrabold uppercase tracking-[0.1em]">
        {label ?? grannyHunterOffer.ctaLabel}
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
        className="underline decoration-[#c9a87c]/60 underline-offset-2 hover:text-[#e8c9a8]"
      >
        Affiliate disclosure
      </Link>
    </p>
  );
}

function VelvetGlow({
  className = "",
  tone = "wine",
}: {
  className?: string;
  tone?: "wine" | "copper";
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[110px] ${
        tone === "copper" ? "bg-[#c9a87c]/12" : "bg-[#8b4d63]/20"
      } ${className}`}
    />
  );
}

export default function GrannyHunterLanding() {
  const [affiliateUrl, setAffiliateUrl] = useState<string>(
    grannyHunterOffer.url
  );

  useEffect(() => {
    setAffiliateUrl(getTrackedAffiliateUrl(grannyHunterOffer.url));
  }, []);

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-[#110c0e] text-cream">
        <NoiseOverlay />

        {/* HERO */}
        <section className="relative min-h-[780px] overflow-hidden lg:min-h-[840px]">
          <Image
            src={grannyHunterVisuals.hero}
            alt="GrannyHunter mature dating"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_22%]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#110c0e] via-[#110c0e]/90 to-[#110c0e]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#110c0e] via-transparent to-[#110c0e]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(201,168,124,0.18),transparent_42%)]" />

          <VelvetGlow className="-right-16 top-20 h-80 w-80" tone="copper" />
          <VelvetGlow className="-left-20 bottom-10 h-72 w-72" />

          <div className="relative mx-auto grid min-h-[780px] max-w-7xl items-center gap-12 px-5 pb-16 pt-32 lg:min-h-[840px] lg:grid-cols-[1.05fr_0.75fr] lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-7 flex flex-wrap items-center gap-3">
                <GrannyHunterLogo size="lg" />

                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c9a87c]/35 bg-[#8b4d63]/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#e8c9a8] backdrop-blur-md">
                  <Gem size={11} />
                  Adults 18+
                </span>
              </div>

              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#d4a574]">
                <span className="h-px w-8 bg-[#c9a87c]/55" />
                Premium mature dating · Worldwide
              </p>

              <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-[3.6rem]">
                Meet Experienced Singles on{" "}
                <span className="font-serif-accent font-normal italic text-[#e8c9a8]">
                  GrannyHunter
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-fog sm:text-lg">
                {grannyHunterOffer.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {grannyHunterOffer.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#c9a87c]/15 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-cream/90 backdrop-blur-md"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <VisitCta href={affiliateUrl} placement="hero" />

                <a href="#how-it-works" className={secondaryButton}>
                  How It Works
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-fog/80">
                <span className="flex items-center gap-2">
                  <Sparkles size={14} className="text-[#c9a87c]" />
                  {grannyHunterOffer.promo}
                </span>
                <span className="flex items-center gap-2">
                  <Globe2 size={14} className="text-[#c9a87c]/80" />
                  {grannyHunterOffer.availability}
                </span>
              </div>

              <AffiliateNote className="mt-5 max-w-md text-[11px] leading-5 text-fog/60" />
            </div>

            <div className="relative mx-auto w-full max-w-[370px]">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#8b4d63]/40 via-[#c9a87c]/20 to-[#6b3a4a]/30 opacity-55 blur-2xl" />

              <a
                href={affiliateUrl}
                target="_blank"
                rel={REL}
                onClick={() =>
                  trackAffiliateClick(grannyHunterOffer.name, "hero-portrait")
                }
                className="group relative block overflow-hidden rounded-[1.75rem] border border-[#c9a87c]/20 bg-black/30 shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={grannyHunterVisuals.portrait}
                    alt="GrannyHunter mature dating profiles"
                    fill
                    priority
                    sizes="(max-width: 1024px) 370px, 400px"
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#110c0e] via-transparent to-[#110c0e]/10" />

                  <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-[#8b4d63] to-[#a65d72] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-cream shadow-lg shadow-[#8b4d63]/40">
                    {grannyHunterOffer.badge}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="rounded-xl border border-[#c9a87c]/15 bg-black/40 p-4 backdrop-blur-md">
                      <p className="text-xs font-bold uppercase tracking-[0.15em]">
                        Explore GrannyHunter
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

        {/* BENEFITS */}
        <section
          id="benefits"
          className="relative border-y border-[#c9a87c]/10 bg-[#161014]"
        >
          <div className="mx-auto grid max-w-7xl divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              {
                icon: Heart,
                title: "Refined connections",
                text: "Meet confident, experienced singles who value conversation and chemistry.",
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
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8b4d63]/15 text-[#e8c9a8]">
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
          className="border-b border-[#c9a87c]/10 px-5 py-16 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d4a574]">
                Simple process
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                How{" "}
                <span className="font-serif-accent font-normal italic text-[#e8c9a8]">
                  GrannyHunter
                </span>{" "}
                works
              </h2>
              <p className="mt-4 text-sm leading-6 text-fog">
                Three steps to start meeting experienced singles on a mature
                dating platform built for adults.
              </p>
            </div>

            <div className="relative mt-14">
              <div
                aria-hidden
                className="absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-gradient-to-r from-transparent via-[#c9a87c]/35 to-transparent md:block"
              />

              <div className="grid gap-5 md:grid-cols-3">
                {grannyHunterSteps.map((item) => (
                  <div
                    key={item.step}
                    className="relative rounded-2xl border border-[#c9a87c]/12 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c9a87c]/28"
                  >
                    <p className="font-display text-4xl font-black text-[#8b4d63]/50">
                      {item.step}
                    </p>
                    <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-fog">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <VisitCta href={affiliateUrl} placement="how-it-works" />
            </div>
          </div>
        </section>

        {/* TRUST / SOCIAL PROOF */}
        <section className="border-b border-[#c9a87c]/10 px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d4a574]">
                Why adults choose GrannyHunter
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Trusted mature dating,{" "}
                <span className="font-serif-accent font-normal italic text-[#e8c9a8]">
                  worldwide
                </span>
              </h2>
              <p className="mt-4 text-sm leading-6 text-fog">
                A platform focused on experienced singles, discreet connections,
                and adults who prefer quality over quantity.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {grannyHunterTrustPoints.map(({ stat, label, text }) => (
                <div
                  key={stat}
                  className="rounded-2xl border border-[#c9a87c]/12 bg-[#161014] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#c9a87c]/28"
                >
                  <p className="font-display text-3xl font-extrabold tracking-tight text-[#e8c9a8]">
                    {stat}
                  </p>
                  <p className="mt-2 flex items-center justify-center gap-1.5 text-sm font-bold">
                    <Star size={14} className="text-[#c9a87c]" />
                    {label}
                  </p>
                  <p className="mt-3 text-xs leading-5 text-fog">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-[0.14em] text-fog/70">
              <span className="flex items-center gap-2">
                <Users size={14} className="text-[#c9a87c]" />
                Experienced community
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#c9a87c]" />
                Discreet browsing
              </span>
              <span className="flex items-center gap-2">
                <Globe2 size={14} className="text-[#c9a87c]" />
                All countries
              </span>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section
          id="features"
          className="relative border-b border-[#c9a87c]/10 px-5 py-16 lg:px-8 lg:py-24"
        >
          <VelvetGlow className="-left-40 top-1/3 h-96 w-96" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-[#8b4d63]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-[#c9a87c]/15">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={grannyHunterVisuals.side}
                    alt="GrannyHunter mature dating platform"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#110c0e]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-full border border-[#c9a87c]/20 bg-black/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] backdrop-blur-md">
                    Premium mature dating
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d4a574]">
                Platform benefits
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Built for{" "}
                <span className="font-serif-accent font-normal italic text-[#e8c9a8]">
                  experienced singles
                </span>
              </h2>
              <p className="mt-5 text-sm leading-6 text-fog">
                GrannyHunter is presented as a mature dating platform for adults
                seeking refined connections. TheDateCompass does not operate the
                destination site.
              </p>

              <div className="mt-8 space-y-3">
                {grannyHunterFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex gap-4 rounded-xl border border-[#c9a87c]/10 bg-white/[0.03] p-4 transition hover:border-[#c9a87c]/22 hover:bg-white/[0.05]"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#8b4d63]/15 text-[#e8c9a8]">
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
        <section className="relative overflow-hidden border-b border-[#c9a87c]/10">
          <div className="relative min-h-[500px]">
            <Image
              src={grannyHunterVisuals.wide}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[center_25%]"
            />
            <div className="absolute inset-0 bg-[#110c0e]/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#110c0e] via-[#110c0e]/72 to-[#110c0e]/30" />

            <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-5 py-16 lg:px-8">
              <div className="max-w-xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d4a574]">
                  Ready to connect?
                </p>
                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                  Start meeting{" "}
                  <span className="font-serif-accent font-normal italic text-[#e8c9a8]">
                    experienced singles
                  </span>{" "}
                  today.
                </h2>
                <p className="mt-5 text-sm leading-6 text-fog sm:text-base">
                  Visit GrannyHunter to review profiles, messaging options, and
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
          className="border-b border-[#c9a87c]/10 px-5 py-16 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d4a574]">
                FAQ
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Common questions
              </h2>
            </div>

            <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-[#c9a87c]/10 bg-[#161014]">
              {grannyHunterFaqs.map((faq) => (
                <details key={faq.question} className="group px-6 py-5">
                  <summary className="cursor-pointer list-none pr-8 text-sm font-bold transition group-hover:text-[#e8c9a8]">
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
          <VelvetGlow
            className="left-1/2 top-0 h-72 w-[500px] -translate-x-1/2"
            tone="copper"
          />

          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-[#c9a87c]/15 bg-[#161014] p-8 text-center sm:p-12 lg:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,168,124,0.1),transparent_55%)]" />

            <div className="relative">
              <GrannyHunterLogo size="md" className="mx-auto mb-6" />

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Ready to explore GrannyHunter?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-fog sm:text-base">
                Continue to GrannyHunter and review profiles, messaging, and
                terms for yourself — available worldwide for adults 18+.
              </p>

              <div className="mt-8 flex justify-center">
                <VisitCta
                  href={affiliateUrl}
                  placement="footer-cta"
                  label="Visit GrannyHunter"
                />
              </div>

              <AffiliateNote className="mx-auto mt-5 max-w-md text-[11px] leading-5 text-fog/60" />
            </div>
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
