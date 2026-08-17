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
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
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

const primaryButton =
  "group inline-flex min-h-[56px] items-stretch overflow-hidden rounded-xl border border-brand-rose bg-brand-rose text-white shadow-[0_12px_35px_rgba(255,61,110,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(255,61,110,0.4)]";

const secondaryButton =
  "inline-flex min-h-[56px] items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] px-7 text-sm font-bold uppercase tracking-[0.1em] text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-brand-mint/50 hover:bg-white/[0.1]";

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
      onClick={() =>
        trackAffiliateClick(manFinderOffer.name, placement)
      }
    >
      <span className="flex flex-1 items-center justify-center px-7 text-sm font-extrabold uppercase tracking-[0.1em]">
        {label ?? manFinderOffer.ctaLabel}
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

function AffiliateNote({
  className = "",
}: {
  className?: string;
}) {
  return (
    <p className={className}>
      Affiliate link · Adults 18+. TheDateCompass may earn a commission if you
      visit through this link.{" "}
      <Link
        href="/affiliate-disclosure"
        className="underline decoration-brand-rose/60 underline-offset-2 hover:text-brand-rose"
      >
        Affiliate disclosure
      </Link>
    </p>
  );
}

function Glow({
  className = "",
  color = "rose",
}: {
  className?: string;
  color?: "rose" | "violet";
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[110px] ${
        color === "violet"
          ? "bg-purple-500/15"
          : "bg-brand-rose/20"
      } ${className}`}
    />
  );
}

export default function ManFinderLanding() {
  const [affiliateUrl, setAffiliateUrl] = useState(
    manFinderOffer.url
  );

  useEffect(() => {
    setAffiliateUrl(
      getTrackedAffiliateUrl(manFinderOffer.url)
    );
  }, []);

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-ink text-cream">
        <NoiseOverlay />

        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative min-h-[760px] overflow-hidden lg:min-h-[820px]">
          <Image
            src={manFinderVisuals.hero}
            alt="ManFinder gay dating"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_15%]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_40%,rgba(255,61,110,0.25),transparent_38%)]" />

          <Glow className="-right-24 top-32 h-80 w-80" />
          <Glow
            color="violet"
            className="-left-24 bottom-20 h-72 w-72"
          />

          <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-5 pb-16 pt-32 lg:min-h-[820px] lg:grid-cols-[1.1fr_0.7fr] lg:px-8">
            {/* Hero content */}
            <div className="max-w-2xl">
              <div className="mb-7 flex flex-wrap items-center gap-3">
                <ManFinderLogo size="lg" />

                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-rose/40 bg-brand-rose/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-rose backdrop-blur-md">
                  <Flame size={11} />
                  Adults 18+
                </span>
              </div>

              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-mint">
                <span className="h-px w-8 bg-brand-mint" />
                Gay dating · Men seeking men
              </p>

              <h1 className="text-5xl font-black leading-[0.94] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                {manFinderOffer.name}

                <span className="mt-3 block font-serif-accent text-[0.82em] font-normal italic text-brand-rose">
                  where men connect.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-fog sm:text-lg">
                {manFinderOffer.description}
              </p>

              {/* Highlights */}
              <div className="mt-7 flex flex-wrap gap-2">
                {manFinderOffer.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-xs font-semibold text-white/80 backdrop-blur-md"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <VisitCta
                  href={affiliateUrl}
                  placement="hero"
                />

                <a
                  href="#features"
                  className={secondaryButton}
                >
                  Explore ManFinder
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-fog/80">
                <span className="flex items-center gap-2">
                  <Sparkles
                    size={14}
                    className="text-brand-rose"
                  />
                  {manFinderOffer.promo}
                </span>

                <span>
                  Best for: {manFinderOffer.bestFor}
                </span>
              </div>

              <AffiliateNote className="mt-5 max-w-md text-[11px] leading-5 text-fog/60" />
            </div>

            {/* Hero image card */}
            <div className="relative mx-auto w-full max-w-[360px]">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-rose via-purple-500 to-brand-rose/20 opacity-40 blur-2xl" />

              <a
                href={affiliateUrl}
                target="_blank"
                rel={REL}
                onClick={() =>
                  trackAffiliateClick(
                    manFinderOffer.name,
                    "hero-portrait"
                  )
                }
                className="group relative block overflow-hidden rounded-[1.7rem] border border-white/15 bg-black/30 shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={manFinderVisuals.portrait}
                    alt="ManFinder dating profiles"
                    fill
                    priority
                    sizes="(max-width: 1024px) 360px, 400px"
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/10" />

                  <span className="absolute left-4 top-4 rounded-full bg-brand-rose px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] shadow-lg shadow-brand-rose/30">
                    {manFinderOffer.badge}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur-md">
                      <p className="text-xs font-bold uppercase tracking-[0.15em]">
                        Explore ManFinder
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

        {/* =========================================================
            QUICK BENEFITS
        ========================================================= */}
        <section className="relative border-y border-white/10 bg-ink-soft">
          <div className="mx-auto grid max-w-7xl divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              {
                icon: Heart,
                title: "Gay dating",
                text: "A platform focused on men seeking men.",
              },
              {
                icon: MessageCircle,
                title: "Connect & chat",
                text: "Browse profiles and explore messaging options.",
              },
              {
                icon: Globe2,
                title: "Explore by country",
                text: "Compare dating offers available in your location.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 px-6 py-7 lg:px-10"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-rose/10 text-brand-rose">
                  <Icon size={20} />
                </span>

                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-fog">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            IMAGE SHOWCASE
        ========================================================= */}
        <section className="border-b border-white/10 px-5 py-14 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-rose">
                  Explore the experience
                </p>

                <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                  A closer look at{" "}
                  <span className="font-serif-accent font-normal italic text-brand-rose">
                    ManFinder
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-fog">
                Explore the platform and decide whether it fits what
                you are looking for.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {manFinderExploreCards.map((card, index) => (
                <div
                  key={card.title}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 ${
                    index === 0
                      ? "sm:row-span-2 lg:col-span-2"
                      : ""
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
                      style={{
                        objectPosition: card.objectPosition,
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-rose">
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

        {/* =========================================================
            FEATURES
        ========================================================= */}
        <section
          id="features"
          className="relative border-b border-white/10 px-5 py-16 lg:px-8 lg:py-24"
        >
          <Glow
            color="violet"
            className="-left-40 top-1/3 h-96 w-96"
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-brand-rose/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={manFinderVisuals.side}
                    alt="ManFinder gay dating platform"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] backdrop-blur-md">
                    Gay dating platform
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-rose">
                Why explore it
              </p>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Built around{" "}
                <span className="font-serif-accent font-normal italic text-brand-rose">
                  connection
                </span>
              </h2>

              <p className="mt-5 text-sm leading-6 text-fog">
                ManFinder is presented as a gay dating and social
                platform for men seeking men. TheDateCompass does not
                operate the destination site.
              </p>

              <div className="mt-8 space-y-3">
                {manFinderFeatures.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-brand-rose/30 hover:bg-white/[0.05]"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-rose/10 text-brand-rose">
                      <Check size={15} />
                    </span>

                    <div>
                      <h3 className="text-sm font-bold">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-fog">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <VisitCta
                  href={affiliateUrl}
                  placement="features"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            WHO IS IT FOR
        ========================================================= */}
        <section className="border-b border-white/10 bg-ink-soft/60 px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-mint">
                Who it may suit
              </p>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Is ManFinder right for you?
              </h2>

              <p className="mt-4 text-sm leading-6 text-fog">
                For adults exploring gay dating, social connections,
                profile discovery, and messaging with other men.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
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
                  className="rounded-2xl border border-white/10 bg-ink p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-rose/30"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-rose/10 text-brand-rose">
                    <Icon size={20} />
                  </span>

                  <h3 className="mt-5 text-lg font-black">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-fog">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            THINGS TO KNOW
        ========================================================= */}
        <section className="border-b border-white/10 px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-mint">
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
                  text: "Availability can vary by location and may change over time.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-ink-soft p-6"
                >
                  <Icon
                    size={22}
                    className="text-brand-mint"
                  />

                  <h3 className="mt-4 font-bold">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-fog">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA BANNER
        ========================================================= */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="relative min-h-[500px]">
            <Image
              src={manFinderVisuals.wide}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[center_25%]"
            />

            <div className="absolute inset-0 bg-ink/75" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/30" />

            <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-5 py-16 lg:px-8">
              <div className="max-w-xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-mint">
                  Ready to explore?
                </p>

                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                  See what{" "}
                  <span className="font-serif-accent font-normal italic text-brand-rose">
                    ManFinder
                  </span>{" "}
                  has to offer.
                </h2>

                <p className="mt-5 text-sm leading-6 text-fog sm:text-base">
                  Visit the destination site to review profiles,
                  messaging options, terms, and availability.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <VisitCta
                    href={affiliateUrl}
                    placement="mid-cta"
                  />

                  <a
                    href="#faq"
                    className={secondaryButton}
                  >
                    Read FAQ
                  </a>
                </div>

                <AffiliateNote className="mt-5 text-[11px] leading-5 text-fog/60" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================= */}
        <section
          id="faq"
          className="border-b border-white/10 px-5 py-16 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-rose">
                FAQ
              </p>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Common questions
              </h2>
            </div>

            <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-ink-soft">
              {manFinderFaqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group px-6 py-5"
                >
                  <summary className="cursor-pointer list-none pr-8 text-sm font-bold transition group-hover:text-brand-rose">
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

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="relative overflow-hidden px-5 py-16 lg:px-8 lg:py-24">
          <Glow className="left-1/2 top-0 h-72 w-[500px] -translate-x-1/2" />

          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-ink-soft p-8 text-center sm:p-12 lg:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,61,110,0.14),transparent_55%)]" />

            <div className="relative">
              <ManFinderLogo
                size="md"
                className="mx-auto mb-6"
              />

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Ready to explore?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-fog sm:text-base">
                Continue to ManFinder and review the current
                experience, profiles, messaging options, and terms
                for yourself.
              </p>

              <div className="mt-8 flex justify-center">
                <VisitCta
                  href={affiliateUrl}
                  placement="footer-cta"
                  label="Visit ManFinder"
                />
              </div>

              <AffiliateNote className="mx-auto mt-5 max-w-md text-[11px] leading-5 text-fog/60" />
            </div>
          </div>
        </section>

        {/* =========================================================
            COUNTRY LINKS
        ========================================================= */}
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