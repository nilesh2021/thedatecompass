"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Heart,
  Lock,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import MarqueeBand from "@/components/theme/MarqueeBand";
import BrowseByCountrySection from "@/components/landing/BrowseByCountrySection";

import { trackAffiliateClick } from "@/lib/analytics";
import { getCountryBrowseLinks } from "@/data/countryBrowseLinks";
import { getTrackedAffiliateUrl } from "@/lib/trafficstars";

import {
  transDateFaqs,
  transDateFeatures,
  transDateOffer,
  transDateSteps,
  transDateVisuals,
} from "@/data/transDateDatingOffers";

const REL = "sponsored nofollow noopener noreferrer";

function TransDateLogo({
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
      aria-label="TransDate"
    >
      <span className="bg-gradient-to-r from-brand-mint via-cream to-brand-mint bg-clip-text text-transparent">
        Trans
      </span>
      <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
        Date
      </span>
    </span>
  );
}

function VisitCta({
  href,
  placement,
  className,
  label,
  variant = "primary",
}: {
  href: string;
  placement: string;
  className?: string;
  label?: string;
  variant?: "primary" | "outline";
}) {
  const base =
    variant === "primary"
      ? "group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 px-8 text-sm font-extrabold uppercase tracking-[0.1em] text-white shadow-[0_12px_35px_rgba(139,92,246,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(139,92,246,0.45)]"
      : "inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 text-sm font-bold uppercase tracking-[0.1em] text-cream backdrop-blur-md transition duration-300 hover:border-brand-mint/50 hover:bg-white/10";

  return (
    <a
      href={href}
      target="_blank"
      rel={REL}
      className={className ?? base}
      onClick={() => trackAffiliateClick(transDateOffer.name, placement)}
    >
      {label ?? transDateOffer.ctaLabel}
      <ArrowRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      />
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
        className="underline decoration-brand-mint/60 underline-offset-2 hover:text-brand-mint"
      >
        Affiliate disclosure
      </Link>
    </p>
  );
}

export default function TransDateDatingLanding() {
  const [affiliateUrl, setAffiliateUrl] = useState<string>(
    transDateOffer.url
  );

  useEffect(() => {
    setAffiliateUrl(getTrackedAffiliateUrl(transDateOffer.url));
  }, []);

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-ink-deep text-cream">
        {/* =========================================================
            HERO — centered layout (differs from ManFinder split hero)
        ========================================================= */}
        <section className="relative px-5 pb-16 pt-28 lg:px-8 lg:pb-24 lg:pt-36">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(139,92,246,0.22),transparent_60%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_60%,rgba(125,255,195,0.08),transparent_50%)]"
          />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
              <TransDateLogo size="lg" />
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-mint/30 bg-brand-mint/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-mint">
                <Globe2 size={11} />
                Worldwide
              </span>
            </div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-fog">
              Trans dating · All countries
            </p>

            <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Find Connections with{" "}
              <span className="bg-gradient-to-r from-brand-mint via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
                TransDate
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-fog sm:text-lg">
              {transDateOffer.description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {transDateOffer.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-xs font-semibold text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <VisitCta href={affiliateUrl} placement="hero" />
              <a
                href="#how-it-works"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/15 px-8 text-sm font-bold uppercase tracking-[0.1em] text-fog transition hover:border-brand-mint/40 hover:text-cream"
              >
                How it works
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-fog/80">
              <span className="flex items-center gap-2">
                <Sparkles size={14} className="text-brand-mint" />
                {transDateOffer.promo}
              </span>
              <span>Best for: {transDateOffer.bestFor}</span>
            </div>

            <AffiliateNote className="mx-auto mt-5 max-w-md text-[11px] leading-5 text-fog/60" />
          </div>
        </section>

        {/* Worldwide marquee */}
        <MarqueeBand
          items={[
            "Available worldwide",
            "All countries",
            "Trans-inclusive",
            "Secure messaging",
            "Adults 18+",
            "Free to join",
          ]}
        />

        {/* =========================================================
            OFFER SPOTLIGHT — single card (not image grid)
        ========================================================= */}
        <section className="px-5 py-14 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-soft shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[280px] lg:min-h-[420px]">
                  <Image
                    src={transDateVisuals.community}
                    alt="TransDate online dating community"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-soft via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink-soft/90" />
                  <span className="absolute left-5 top-5 rounded-full bg-violet-500/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] shadow-lg">
                    {transDateOffer.badge}
                  </span>
                </div>

                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-mint">
                    Featured offer
                  </p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                    {transDateOffer.name}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-fog">
                    An inclusive platform for transgender dating with profile
                    tools, secure messaging, and a supportive community —
                    available worldwide.
                  </p>

                  <ul className="mt-6 space-y-3">
                    {transDateOffer.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-cream/90"
                      >
                        <CheckCircle2
                          size={18}
                          className="shrink-0 text-brand-mint"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <VisitCta
                      href={affiliateUrl}
                      placement="spotlight"
                      label="Visit TransDate →"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            HOW IT WORKS — horizontal steps (unique to this page)
        ========================================================= */}
        <section
          id="how-it-works"
          className="border-y border-white/10 bg-ink-soft/50 px-5 py-16 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
                Simple process
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                How TransDate works
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-fog">
                Get started in three straightforward steps on the destination
                site.
              </p>
            </div>

            <div className="relative mt-12 grid gap-8 md:grid-cols-3">
              <div
                aria-hidden
                className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-10 hidden h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent md:block"
              />

              {transDateSteps.map((step) => (
                <div
                  key={step.step}
                  className="relative rounded-2xl border border-white/10 bg-ink p-6 text-center transition duration-300 hover:border-violet-500/30"
                >
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 text-sm font-black text-violet-300">
                    {step.step}
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-fog">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            BENTO FEATURES — grid layout (differs from ManFinder list)
        ========================================================= */}
        <section
          id="features"
          className="px-5 py-16 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-mint">
                Platform highlights
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Built for inclusive connections
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {transDateFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`rounded-2xl border border-white/10 bg-ink-soft p-6 transition duration-300 hover:border-brand-mint/25 hover:bg-white/[0.03] ${
                    feature.span === "wide" ? "sm:col-span-2 lg:col-span-2" : ""
                  } ${index === 0 ? "lg:row-span-1" : ""}`}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                    {index === 0 ? (
                      <Heart size={20} />
                    ) : index === 1 ? (
                      <Users size={20} />
                    ) : index === 2 ? (
                      <MessageCircle size={20} />
                    ) : index === 3 ? (
                      <Globe2 size={20} />
                    ) : (
                      <Lock size={20} />
                    )}
                  </span>
                  <h3 className="mt-4 text-base font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-fog">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <VisitCta
                href={affiliateUrl}
                placement="features"
                variant="outline"
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            SPLIT IMAGE + TRUST
        ========================================================= */}
        <section className="border-t border-white/10 bg-ink-soft/40 px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src={transDateVisuals.connect}
                  alt="Connect on TransDate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink/60 via-transparent to-transparent" />
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
                Before you visit
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Things to know
              </h2>

              <div className="mt-8 space-y-5">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Privacy & safety",
                    text: "Review privacy settings and consider what profile information you share on the destination site.",
                  },
                  {
                    icon: Globe2,
                    title: "Worldwide access",
                    text: "TransDate is listed as available in all countries. Regional features may vary.",
                  },
                  {
                    icon: Lock,
                    title: "Terms & pricing",
                    text: "Check the destination site's current terms, pricing, and account rules before signing up.",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-mint/10 text-brand-mint">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-bold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-fog">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ — two-column on desktop
        ========================================================= */}
        <section
          id="faq"
          className="border-t border-white/10 px-5 py-16 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-mint">
                FAQ
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Common questions
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {transDateFaqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-white/10 bg-ink-soft p-5 open:border-violet-500/30"
                >
                  <summary className="cursor-pointer list-none pr-6 text-sm font-bold transition group-hover:text-brand-mint">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-fog">
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
        <section className="relative overflow-hidden border-t border-white/10 px-5 py-16 lg:px-8 lg:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(139,92,246,0.15),transparent_60%)]"
          />

          <div className="relative mx-auto max-w-3xl rounded-3xl border border-white/10 bg-ink-soft p-8 text-center sm:p-12">
            <TransDateLogo size="md" className="mx-auto mb-5" />
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Ready to connect worldwide?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-fog sm:text-base">
              Continue to TransDate and explore profiles, messaging, and
              community features on the destination site.
            </p>
            <div className="mt-8 flex justify-center">
              <VisitCta
                href={affiliateUrl}
                placement="footer-cta"
                label="Join TransDate Free →"
              />
            </div>
            <AffiliateNote className="mx-auto mt-5 max-w-md text-[11px] leading-5 text-fog/60" />
          </div>
        </section>

        <BrowseByCountrySection
          links={getCountryBrowseLinks("gay")}
          title="Dating listings by country"
          description="Compare TransDate and related dating offers across country-specific pages."
        />
      </main>

      <Footer />
    </>
  );
}
