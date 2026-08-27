"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { adultImages } from "@/data/adultOfferImages";
import { trackAffiliateClick } from "@/lib/analytics";
import { getTrackedAffiliateUrl } from "@/lib/trafficstars";

export const TRANSDATE_NORWAY_URL =
  "https://t.aslr1.com/358917/6497?aff_sub5=SF_006OG000004lmDN";

const OFFER_NAME = "TransDate";
const COUNTRY = "Norway";
const REL = "sponsored nofollow noopener noreferrer";

const HERO_IMG = adultImages.portraitE;
const DETAIL_IMG = adultImages.portraitD;
const PROFILE_IMGS = [
  adultImages.portraitE,
  adultImages.portraitA,
  adultImages.portraitD,
  adultImages.neon,
] as const;

function NorwayFlag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 22 16" aria-hidden className={className}>
      <rect width="22" height="16" rx="1" fill="#BA0C2F" />
      <rect x="6" width="4" height="16" fill="#fff" />
      <rect y="6" width="22" height="4" fill="#fff" />
      <rect x="7" width="2" height="16" fill="#00205B" />
      <rect y="7" width="22" height="2" fill="#00205B" />
    </svg>
  );
}

function TransDateMark({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
}) {
  const sizeClass = {
    sm: "text-base tracking-[0.08em]",
    md: "text-2xl tracking-[0.1em]",
    lg: "text-4xl tracking-[0.12em] sm:text-5xl",
    hero: "text-5xl tracking-[-0.02em] sm:text-7xl lg:text-[5.5rem]",
  }[size];

  return (
    <span
      className={`inline-flex items-baseline font-display font-extrabold uppercase leading-none ${sizeClass} ${className}`}
      aria-label="TransDate"
    >
      <span className="text-cream">Trans</span>
      <span className="bg-gradient-to-r from-[#ff3d6e] via-[#ff6b8f] to-[#5BCEFA] bg-clip-text text-transparent">
        Date
      </span>
    </span>
  );
}

function AffiliateLink({
  href,
  placement,
  children,
  className = "",
}: {
  href: string;
  placement: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel={REL}
      className={className}
      onClick={() => trackAffiliateClick(OFFER_NAME, placement, COUNTRY)}
    >
      {children}
    </a>
  );
}

function VisitTransDate({
  href,
  placement,
  children,
  className = "",
}: {
  href: string;
  placement: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <AffiliateLink
      href={href}
      placement={placement}
      className={`group inline-flex min-h-[54px] items-stretch overflow-hidden rounded-xl bg-brand-rose text-cream shadow-[0_16px_40px_rgba(255,61,110,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-brand-rose-soft hover:shadow-[0_20px_48px_rgba(255,61,110,0.45)] focus:outline-none focus:ring-2 focus:ring-brand-rose focus:ring-offset-2 focus:ring-offset-ink ${className}`}
    >
      <span className="flex flex-1 items-center justify-center px-7 text-[12px] font-extrabold uppercase tracking-[0.14em]">
        {children}
      </span>
      <span className="flex w-14 shrink-0 items-center justify-center bg-black/15">
        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </span>
    </AffiliateLink>
  );
}

const benefits = [
  {
    title: "Built for trans dating",
    text: "A platform oriented around transgender connections — not a generic dating feed with an afterthought filter.",
  },
  {
    title: "Browse, then decide",
    text: "Explore profiles at your pace. Start a conversation only when something actually interests you.",
  },
  {
    title: "Private messaging",
    text: "Move from a profile to a chat without the noise of a public social feed.",
  },
];

const steps = [
  {
    number: "01",
    title: "Open TransDate",
    text: "Visit the platform and see who is active for your area.",
  },
  {
    number: "02",
    title: "Set up your profile",
    text: "Share what you are looking for and make yourself discoverable.",
  },
  {
    number: "03",
    title: "Start connecting",
    text: "Message members and take it from there — on your terms.",
  },
];

const cities = ["Oslo", "Bergen", "Trondheim", "Stavanger", "Tromsø"];

export default function TransDateNorwayLanding() {
  const [href, setHref] = useState(TRANSDATE_NORWAY_URL);
  useEffect(() => setHref(getTrackedAffiliateUrl(TRANSDATE_NORWAY_URL)), []);

  return (
    <main className="overflow-hidden bg-ink font-display text-cream antialiased">
      {/* HERO — full-bleed adult dating composition */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src={HERO_IMG}
          alt="Adult dating atmosphere for TransDate in Norway"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_18%] transition-transform duration-[8s] ease-out will-change-transform motion-safe:scale-105 motion-safe:hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/55" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_75%_40%,rgba(255,61,110,0.28),transparent_65%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_20%_80%,rgba(91,206,250,0.12),transparent_60%)]"
        />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-24 sm:px-8 sm:pb-16 lg:justify-center lg:pb-20 lg:pt-28">
          <div className="max-w-2xl animate-fade-up">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-fog">
              <span className="inline-flex items-center gap-2">
                <NorwayFlag className="h-3.5 w-[19px]" />
                Norway
              </span>
              <span className="text-cream/25">·</span>
              <span>Adults 18+</span>
            </div>

            <TransDateMark size="hero" />

            <h1 className="mt-6 max-w-xl font-serif-accent text-3xl font-normal leading-[1.05] tracking-[-0.02em] text-cream sm:text-4xl lg:text-[2.75rem]">
              Trans dating in Norway —{" "}
              <em className="not-italic text-brand-rose-soft">
                meet people who actually get it.
              </em>
            </h1>

            <p className="mt-5 max-w-md text-[15px] leading-7 text-fog">
              Browse profiles, chat privately, and connect with trans and
              curious singles looking for something real — or something tonight.
            </p>

            <div className="mt-8">
              <VisitTransDate href={href} placement="transdate_hero_cta">
                Join TransDate Free
              </VisitTransDate>
            </div>

            <p className="mt-4 max-w-sm text-[11px] leading-5 text-fog/70">
              Independent listing · Affiliate link · TransDate is a third-party
              platform for adults 18+.
            </p>
          </div>
        </div>
      </section>

      {/* Pulse strip */}
      <div className="relative overflow-hidden border-y border-cream/10 bg-ink-soft">
        <div className="flex animate-marquee whitespace-nowrap py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-fog">
          {[0, 1].map((copy) => (
            <span key={copy} className="flex shrink-0 items-center gap-8 px-4">
              {[
                "Trans dating",
                "Norway",
                "Adults 18+",
                "Private chat",
                "Free to explore",
                "Oslo · Bergen · Trondheim",
              ].map((item) => (
                <span key={`${copy}-${item}`} className="inline-flex items-center gap-8">
                  <span className="text-brand-rose">{item}</span>
                  <span className="h-1 w-1 rounded-full bg-cream/30" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="tdc-section-pitch px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <p className="tdc-eyebrow mb-4">What is TransDate</p>
            <h2 className="max-w-md font-serif-accent text-4xl leading-[1.02] tracking-[-0.03em] sm:text-5xl">
              An adult space for transgender dating.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-fog">
              TransDate brings together trans and non-binary people with people
              interested in meeting them. Create a profile, browse who is
              around, and message when you are ready.
            </p>
          </div>

          <div className="relative min-h-[320px] overflow-hidden sm:min-h-[420px]">
            <Image
              src={DETAIL_IMG}
              alt="Portrait mood for TransDate dating"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_20%] transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-rose">
                Adults only
              </p>
              <p className="mt-2 max-w-xs font-serif-accent text-2xl leading-tight">
                Direct. Flirty. Built around who you want to meet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why / benefits */}
      <section className="border-t border-cream/10 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="tdc-eyebrow mb-4">Why TransDate</p>
          <h2 className="max-w-xl font-serif-accent text-4xl leading-[1.02] tracking-[-0.03em] sm:text-5xl">
            Less scrolling past the wrong crowd.
          </h2>

          <div className="mt-12 grid gap-0 border-y border-cream/10 sm:grid-cols-3 sm:divide-x sm:divide-cream/10">
            {benefits.map((item, i) => (
              <div key={item.title} className="border-b border-cream/10 px-0 py-8 last:border-b-0 sm:border-b-0 sm:px-7 sm:py-10 lg:px-9">
                <span className="text-[10px] font-bold tracking-[0.18em] text-brand-rose">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-serif-accent text-2xl leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-6 text-fog">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile strip — interactive CTAs */}
      <section className="bg-ink-soft px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="tdc-eyebrow mb-4">Near you</p>
              <h2 className="font-serif-accent text-4xl leading-none tracking-[-0.03em] sm:text-5xl">
                Profiles waiting in Norway.
              </h2>
            </div>
            <p className="max-w-xs text-[13px] leading-6 text-fog">
              Sample atmosphere only — real members live on TransDate.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {PROFILE_IMGS.map((src, index) => (
              <li key={src + index}>
                <AffiliateLink
                  href={href}
                  placement={`transdate_profile_${index + 1}`}
                  className="group relative block overflow-hidden rounded-2xl border border-cream/10 bg-ink transition duration-300 hover:-translate-y-1 hover:border-brand-rose/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                >
                  <span className="relative block aspect-[3/4] w-full">
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink/70 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-cream backdrop-blur-sm">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-mint opacity-60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-mint" />
                      </span>
                      Online
                    </span>
                    <span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3 sm:p-4">
                      <span className="text-[11px] font-bold uppercase tracking-[0.12em]">
                        {cities[index] ?? "Norway"}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-brand-rose transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </span>
                </AffiliateLink>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-center">
            <VisitTransDate href={href} placement="transdate_profiles_cta">
              See who&apos;s on TransDate
            </VisitTransDate>
          </div>
        </div>
      </section>

      {/* Norway */}
      <section className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_0%_50%,rgba(91,206,250,0.1),transparent_55%)]"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-fog">
              <NorwayFlag className="h-3.5 w-[19px]" />
              Norge · Norway
            </div>
            <h2 className="mt-6 font-serif-accent text-5xl leading-[0.98] tracking-[-0.03em] sm:text-6xl">
              TransDate
              <br />
              <em className="not-italic text-brand-rose">in Norway.</em>
            </h2>
            <p className="mt-7 max-w-lg text-[15px] leading-7 text-fog">
              Whether you are in Oslo, Bergen, Trondheim, Stavanger, or a
              smaller kommune, online dating opens a wider circle than your
              immediate scene.
            </p>
            <div className="mt-8">
              <VisitTransDate href={href} placement="transdate_norway_cta">
                Explore TransDate
              </VisitTransDate>
            </div>
          </div>

          <div className="self-end border-t border-cream/10 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#5BCEFA]">
              A wider dating circle
            </p>
            <div className="mt-8 space-y-8">
              {[
                [
                  "Start nearby",
                  "Look for connections around your city or local area.",
                ],
                [
                  "Look beyond it",
                  "An online platform makes a smaller local pool feel less limiting.",
                ],
                [
                  "Choose your pace",
                  "Browse first, create a profile, or message when you feel ready.",
                ],
              ].map(([title, text]) => (
                <div key={title}>
                  <p className="font-serif-accent text-2xl">{title}</p>
                  <p className="mt-1.5 max-w-md text-[14px] leading-6 text-fog">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-t border-cream/10 bg-ink-soft px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 border-b border-cream/10 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="tdc-eyebrow mb-4">How it works</p>
              <h2 className="font-serif-accent text-4xl leading-none tracking-[-0.03em] sm:text-5xl">
                Three steps.
              </h2>
            </div>
            <p className="max-w-sm text-[13px] leading-6 text-fog">
              Keep it simple: open the platform, set up your profile, then
              decide who you want to talk to.
            </p>
          </div>

          <ol className="grid divide-y divide-cream/10 border-b border-cream/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {steps.map((step) => (
              <li
                key={step.number}
                className="px-0 py-8 sm:px-7 sm:py-10 lg:px-10"
              >
                <span className="text-[10px] font-bold tracking-[0.18em] text-brand-rose">
                  {step.number}
                </span>
                <h3 className="mt-5 font-serif-accent text-2xl">{step.title}</h3>
                <p className="mt-3 text-[14px] leading-6 text-fog">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_100%,rgba(255,61,110,0.22),transparent_55%)]"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <TransDateMark size="lg" className="justify-center" />
          <h2 className="mt-8 font-serif-accent text-4xl leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Ready to see who&apos;s online?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-7 text-fog">
            Jump into TransDate and decide for yourself if the vibe fits.
          </p>
          <div className="mt-9 flex justify-center">
            <VisitTransDate href={href} placement="transdate_final_cta">
              Visit TransDate
            </VisitTransDate>
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-fog/70">
            Adults 18+ · Third-party platform
          </p>
        </div>
      </section>

      {/* Disclosure */}
      <section className="border-t border-cream/10 px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-rose">
            Affiliate disclosure
          </p>
          <p className="mt-4 text-[13px] leading-6 text-fog">
            TheDateCompass is an independent dating-platform discovery site. We
            do not operate TransDate. We may earn a commission if you visit
            TransDate through links on this page, at no extra cost to you.
            TransDate is a third-party service for adults 18+.{" "}
            <Link
              href="/affiliate-disclosure"
              className="font-medium text-cream underline decoration-brand-rose/50 underline-offset-4 hover:text-brand-rose"
            >
              Full disclosure
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
