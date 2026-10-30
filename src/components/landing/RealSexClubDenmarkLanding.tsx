"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
  Globe2,
  Heart,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import MarqueeBand from "@/components/theme/MarqueeBand";
import NoiseOverlay from "@/components/theme/NoiseOverlay";
import BrowseByCountrySection from "@/components/landing/BrowseByCountrySection";
import CountryFaqSection from "@/components/country/common/CountryFaqSection";
import { getCountryBrowseLinks } from "@/data/countryBrowseLinks";
import TrackedAffiliateLink, {
  useTrackedAffiliateUrl,
} from "@/components/affiliate/TrackedAffiliateLink";
import { trackAffiliateClick } from "@/lib/analytics";
import {
  realSexClubDenmarkAudience,
  realSexClubDenmarkCities,
  realSexClubDenmarkFaqs,
  realSexClubDenmarkFeatures,
  realSexClubDenmarkMarquee,
  realSexClubDenmarkOffer,
  realSexClubDenmarkSteps,
  realSexClubDenmarkVisuals,
} from "@/data/realSexClubDenmark";

const REL = "sponsored nofollow noopener noreferrer";
const COUNTRY = "denmark";

const primaryCtaClass =
  "group relative inline-flex min-h-[52px] cursor-pointer items-stretch overflow-hidden rounded-2xl border-2 border-brand-rose bg-cream text-ink shadow-[6px_6px_0_0_rgba(255,61,110,0.85)] transition duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_rgba(255,61,110,0.95)]";

function DenmarkFlag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 22 16" aria-hidden className={className}>
      <rect width="22" height="16" rx="1.5" fill="#C60C30" />
      <rect x="7" width="3.2" height="16" fill="#fff" />
      <rect y="6.4" width="22" height="3.2" fill="#fff" />
    </svg>
  );
}

function VisitCta({
  placement,
  className = primaryCtaClass,
}: {
  placement: string;
  className?: string;
}) {
  const trackedHref = useTrackedAffiliateUrl(
    realSexClubDenmarkOffer.url,
    placement,
    COUNTRY
  );
  return (
    <a
      href={trackedHref}
      target="_blank"
      rel={REL}
      className={className}
      onClick={() =>
        trackAffiliateClick(realSexClubDenmarkOffer.name, placement, COUNTRY)
      }
    >
      <span className="flex flex-1 items-center justify-center px-7 text-sm font-extrabold uppercase tracking-[0.12em]">
        {realSexClubDenmarkOffer.ctaLabel}
      </span>
      <span className="flex w-14 shrink-0 items-center justify-center bg-brand-rose text-cream">
        <ArrowUpRight size={18} />
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
        className="text-cream underline decoration-brand-rose/60 underline-offset-2 hover:text-brand-rose"
      >
        Affiliate disclosure
      </Link>
    </p>
  );
}

export default function RealSexClubDenmarkLanding() {
  return (
    <>
      <Header />

      <main className="relative bg-ink font-display text-cream">
        <NoiseOverlay />

        <section className="relative min-h-[90vh] overflow-hidden">
          <Image
            src={realSexClubDenmarkVisuals.hero}
            alt="RealSexClub adult dating listing for Denmark"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_18%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/84 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/55" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_80%_38%,rgba(255,61,110,0.32),transparent_68%)]" />

          <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 lg:justify-center lg:pb-24">
            <div className="max-w-2xl animate-fade-up">
              <p className="tdc-eyebrow-mint mb-5 flex items-center gap-3">
                <DenmarkFlag className="h-3.5 w-5 shrink-0 overflow-hidden rounded-[2px] shadow-sm" />
                Denmark · Adults 18+
              </p>

              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-rose">
                RealSexClub
              </p>

              <h1 className="mt-3 font-serif text-5xl font-normal leading-[0.92] tracking-tight sm:text-6xl md:text-7xl">
                Private adult dating
                <span className="mt-1 block font-serif-accent italic text-brand-rose">
                  in Denmark
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog">
                A premium listing of RealSexClub for Denmark visitors comparing
                adult dating sites — from Copenhagen to Aarhus, Odense, and
                Aalborg. Direct connections on a third-party adult social
                platform.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <VisitCta placement="lp_hero" />
                <Link
                  href="/denmark"
                  className="text-xs font-bold uppercase tracking-[0.16em] text-fog underline decoration-cream/25 underline-offset-4 hover:text-cream"
                >
                  Compare Denmark offers
                </Link>
              </div>
              <AffiliateNote className="mt-4 max-w-md text-xs leading-relaxed text-fog/80" />
            </div>
          </div>
        </section>

        <MarqueeBand items={[...realSexClubDenmarkMarquee]} />

        <section className="border-b border-cream/10 px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <p className="tdc-eyebrow mb-4">Why Denmark</p>
              <h2 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                Adult dating Denmark,{" "}
                <em className="font-serif-accent text-brand-rose">without the noise</em>
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-fog sm:text-base">
                <p>
                  Searching dating sites Denmark often means sorting through
                  apps that try to be everything. RealSexClub is listed here as
                  an adult dating and social option for people who want direct
                  connections — useful if you are comparing adult dating
                  Denmark from Copenhagen or elsewhere in the country.
                </p>
                <p>
                  TheDateCompass does not operate RealSexClub. This page is an
                  independent listing so you can read how the offer is framed,
                  then visit the destination site to confirm profiles,
                  messaging, and current terms for yourself.
                </p>
              </div>
              <div className="mt-8">
                <VisitCta placement="lp_mid" />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-cream/10 shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
              <div className="relative aspect-[4/5] sm:aspect-[5/6]">
                <Image
                  src={realSexClubDenmarkVisuals.portrait}
                  alt="RealSexClub adult dating listing for Denmark visitors"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[center_16%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/15" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-ink/55 px-5 py-4 backdrop-blur-md">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cream/55">
                    Online dating Copenhagen
                  </p>
                  <p className="mt-1 font-serif-accent text-xl italic text-cream">
                    Direct, discreet, adults only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-cream/10 px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="tdc-eyebrow mb-4">What RealSexClub offers</p>
            <h2 className="max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Tools listed for{" "}
              <em className="font-serif-accent text-brand-rose">adult dating</em>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog">
              Visual notes from the existing RealSexClub listing — messaging,
              profiles, and adult social browsing on a third-party site.
            </p>

            <ul className="mt-12 grid gap-5 md:grid-cols-3">
              {realSexClubDenmarkFeatures.map((feature, index) => (
                <li
                  key={feature.title}
                  className="group overflow-hidden rounded-[28px] border border-cream/10 bg-ink-soft transition duration-300 hover:-translate-y-1 hover:border-brand-rose/40"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={feature.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-ink/75 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-cream backdrop-blur-sm">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-fog">
                      {feature.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-cream/10 px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="tdc-eyebrow mb-4">How it works</p>
            <h2 className="max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Three steps to open{" "}
              <em className="font-serif-accent text-brand-rose">RealSexClub</em>
            </h2>
            <ol className="mt-12 grid gap-5 md:grid-cols-3">
              {realSexClubDenmarkSteps.map((step) => (
                <li
                  key={step.number}
                  className="rounded-[28px] border border-cream/10 bg-ink-soft p-7"
                >
                  <span className="font-serif-accent text-4xl italic text-brand-rose">
                    {step.number}
                  </span>
                  <h3 className="mt-5 font-serif text-2xl tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-fog">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-b border-cream/10 px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="tdc-eyebrow mb-4">Cities</p>
            <h2 className="max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Dating sites Denmark visitors{" "}
              <em className="font-serif-accent text-brand-rose">often compare from</em>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog">
              City names add local context. They are not a claim that
              RealSexClub guarantees profiles in every Danish city.
            </p>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2">
              {realSexClubDenmarkCities.map((city) => (
                <li
                  key={city.name}
                  className="rounded-[24px] border border-cream/10 bg-ink-soft/80 px-6 py-6"
                >
                  <span className="inline-flex items-center gap-2 text-brand-rose">
                    <MapPin size={16} />
                    <h3 className="text-lg font-bold">{city.name}</h3>
                  </span>
                  <p className="mt-3 text-sm leading-7 text-fog">{city.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-cream/10 px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="tdc-eyebrow mb-4">Audience</p>
            <h2 className="max-w-xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Who it may suit
            </h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-3">
              {realSexClubDenmarkAudience.map((item) => {
                const Icon =
                  item.title === "Adult dating"
                    ? Heart
                    : item.title === "Direct connections"
                      ? MessageCircle
                      : Globe2;
                return (
                  <li
                    key={item.title}
                    className="rounded-[24px] border border-cream/10 bg-ink-soft p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-rose/40"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-rose/15 text-brand-rose">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fog">
                      {item.text}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="border-b border-cream/10 bg-ink-soft/40 px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="tdc-eyebrow-mint mb-4">Before you visit</p>
            <h2 className="max-w-xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              What to consider
            </h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-3">
              <li className="rounded-[24px] border border-cream/10 bg-ink p-6">
                <ShieldCheck className="text-brand-mint" size={22} />
                <h3 className="mt-4 text-lg font-bold">Privacy</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  Review privacy settings and what profile information you are
                  asked to share on the destination site.
                </p>
              </li>
              <li className="rounded-[24px] border border-cream/10 bg-ink p-6">
                <FileText className="text-brand-mint" size={22} />
                <h3 className="mt-4 text-lg font-bold">Terms & pricing</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  Check current terms, pricing, and account rules on
                  RealSexClub itself. This page does not list fees.
                </p>
              </li>
              <li className="rounded-[24px] border border-cream/10 bg-ink p-6">
                <Globe2 className="text-brand-mint" size={22} />
                <h3 className="mt-4 text-lg font-bold">Availability</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  Availability may vary by location. A Denmark listing does not
                  mean the service is open in every city.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-cream/10">
          <div className="relative min-h-[560px] sm:min-h-[640px]">
            <Image
              src={realSexClubDenmarkVisuals.mid}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[center_22%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ink/35" />
            <div className="relative mx-auto flex min-h-[560px] max-w-6xl flex-col justify-end px-4 py-16 sm:min-h-[640px] sm:px-6 lg:justify-center">
              <div className="max-w-xl rounded-3xl border border-cream/10 bg-ink/55 p-6 backdrop-blur-md sm:p-8">
                <p className="tdc-eyebrow-mint mb-3">Continue</p>
                <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
                  Open RealSexClub
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-fog sm:text-base">
                  Review profiles, messaging, and current terms on the
                  destination site. Adults 18+ only.
                </p>
                <div className="mt-7">
                  <VisitCta placement="lp_mid" />
                </div>
                <AffiliateNote className="mt-4 text-xs leading-relaxed text-fog/80" />
              </div>
            </div>
          </div>
        </section>

        <CountryFaqSection
          eyebrow="FAQ · Denmark"
          title="Common questions"
          subtitle="Straight answers about this RealSexClub Denmark listing."
          variant="germany"
          items={[...realSexClubDenmarkFaqs]}
        />

        <section className="px-4 pb-24 pt-4 sm:px-6 lg:pb-28">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-[32px] border border-cream/10 bg-ink-soft px-8 py-12 text-center lg:px-12">
            <p className="tdc-eyebrow-mint mb-4 justify-center">Denmark listing</p>
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Continue to RealSexClub
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-fog md:text-base">
              Open the destination site in a new tab, or return to the{" "}
              <Link
                href="/denmark"
                className="text-cream underline decoration-brand-rose/50 underline-offset-2 hover:text-brand-rose"
              >
                Denmark comparison
              </Link>
              , the{" "}
              <Link
                href="/offers/realsexclub"
                className="text-cream underline decoration-brand-rose/50 underline-offset-2 hover:text-brand-rose"
              >
                RealSexClub listing
              </Link>
              , or{" "}
              <Link
                href="/top-offers/adult"
                className="text-cream underline decoration-brand-rose/50 underline-offset-2 hover:text-brand-rose"
              >
                adult dating offers
              </Link>
              .
            </p>
            <div className="mt-8 flex justify-center">
              <VisitCta placement="lp_end" />
            </div>
            <AffiliateNote className="mx-auto mt-4 max-w-md text-xs text-fog/70" />
          </div>
        </section>

        <BrowseByCountrySection
          links={getCountryBrowseLinks("adult")}
          title="Adult dating listings by country"
          description="See how adult dating offers, including RealSexClub where listed, appear on live country pages."
        />
      </main>

      <div
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-cream/10 bg-ink-soft/95 px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden"
        role="region"
        aria-label="Offer call to action"
      >
        <TrackedAffiliateLink
          href={realSexClubDenmarkOffer.url}
          placement="lp_end"
          country={COUNTRY}
          target="_blank"
          rel={REL}
          onClick={() =>
            trackAffiliateClick(
              realSexClubDenmarkOffer.name,
              "lp_end",
              COUNTRY
            )
          }
          className="tdc-btn-primary flex w-full !rounded-2xl !py-3.5 !text-sm"
        >
          {realSexClubDenmarkOffer.ctaLabel}
        </TrackedAffiliateLink>
      </div>

      <Footer />
    </>
  );
}
