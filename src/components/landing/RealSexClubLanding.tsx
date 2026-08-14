"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
  Globe2,
  Heart,
  MessageCircle,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import MarqueeBand from "@/components/theme/MarqueeBand";
import NoiseOverlay from "@/components/theme/NoiseOverlay";
import BrowseByCountrySection from "@/components/landing/BrowseByCountrySection";
import CountryFaqSection from "@/components/country/common/CountryFaqSection";
import { getCountryBrowseLinks } from "@/data/countryBrowseLinks";
import { trackAffiliateClick } from "@/lib/analytics";
import {
  realSexClubExploreCards,
  realSexClubFaqs,
  realSexClubFeatures,
  realSexClubOffer,
  realSexClubVisuals,
} from "@/data/realSexClubOffer";

const REL = "sponsored nofollow noopener noreferrer";

const primaryCtaClass =
  "group relative inline-flex min-h-[52px] cursor-pointer items-stretch overflow-hidden rounded-2xl border-2 border-brand-rose bg-cream text-ink shadow-[6px_6px_0_0_rgba(255,61,110,0.85)] transition duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_rgba(255,61,110,0.95)]";

function VisitCta({
  placement,
  className = primaryCtaClass,
}: {
  placement: string;
  className?: string;
}) {
  return (
    <a
      href={realSexClubOffer.url}
      target="_blank"
      rel={REL}
      className={className}
      onClick={() => trackAffiliateClick(realSexClubOffer.name, placement)}
    >
      <span className="flex flex-1 items-center justify-center px-7 text-sm font-extrabold uppercase tracking-[0.12em]">
        {realSexClubOffer.ctaLabel}
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

export default function RealSexClubLanding() {
  return (
    <>
      <Header />

      <main className="relative bg-ink font-display text-cream">
        <NoiseOverlay />

        <section className="relative min-h-[88vh] overflow-hidden sm:min-h-[92vh]">
          <Image
            src={realSexClubVisuals.hero}
            alt="RealSexClub adult dating listing"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_78%_42%,rgba(255,61,110,0.28),transparent_68%)]" />

          <div className="relative mx-auto grid min-h-[88vh] max-w-6xl items-end gap-8 px-4 pb-14 pt-28 sm:min-h-[92vh] sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center lg:pb-20 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div className="max-w-2xl animate-fade-up">
              <p className="tdc-eyebrow-mint mb-5 flex items-center gap-3 before:h-px before:w-8 before:bg-brand-mint before:content-['']">
                Adult dating · Adults 18+
              </p>

              <h1 className="text-5xl font-extrabold leading-[0.92] tracking-[-0.04em] sm:text-6xl md:text-7xl">
                RealSexClub
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog">
                {realSexClubOffer.description}
              </p>

              <div className="mt-8">
                <VisitCta placement="realsexclub_hero" />
              </div>
              <AffiliateNote className="mt-4 max-w-md text-xs leading-relaxed text-fog/80" />
            </div>

            <div className="relative mx-auto hidden w-full overflow-hidden rounded-3xl border border-cream/15 shadow-[0_24px_60px_rgba(0,0,0,0.45)] lg:block">
              <div className="relative aspect-[3/4]">
                <Image
                  src={realSexClubVisuals.portrait}
                  alt=""
                  fill
                  sizes="320px"
                  className="object-cover object-[center_20%] transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-xs font-bold uppercase tracking-[0.16em] text-cream/90">
                  Adult dating listing
                </p>
              </div>
            </div>
          </div>
        </section>

        <MarqueeBand
          items={[
            "Adult dating",
            "Adults 18+",
            "Direct connections",
            "RealSexClub",
            "Affiliate listing",
          ]}
        />

        <section className="border-b border-cream/10 px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="tdc-eyebrow mb-4">Explore</p>
            <h2 className="max-w-xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              What you can explore
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog">
              Visual notes from the existing RealSexClub listing — messaging,
              profiles, and mobile access on a third-party adult dating site.
            </p>

            <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
              {realSexClubExploreCards.map((card, index) => (
                <li
                  key={card.title}
                  className="group overflow-hidden rounded-2xl border border-cream/10 bg-ink-soft transition duration-300 hover:-translate-y-1 hover:border-brand-rose/40"
                >
                  <div className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/5]">
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                      style={{ objectPosition: card.objectPosition }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                    <p className="absolute left-3 top-3 rounded-full bg-ink/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-cream backdrop-blur-sm">
                      0{index + 1}
                    </p>
                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                      <h3 className="text-sm font-bold sm:text-base">
                        {card.title}
                      </h3>
                      <p className="mt-1 hidden text-xs leading-relaxed text-fog sm:block">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="tdc-section-pitch border-b border-cream/10 px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative overflow-hidden rounded-3xl border border-cream/10 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-[4/5] sm:aspect-[5/6]">
                <Image
                  src={realSexClubVisuals.portrait}
                  alt="RealSexClub adult dating and social listing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[center_18%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/15" />
              </div>
            </div>

            <div>
              <p className="tdc-eyebrow mb-4">Features</p>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Key features
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-fog">
                RealSexClub is listed as an adult social and dating option for
                people looking for direct connections. Country pages typically
                label it as adult dating. TheDateCompass does not operate the
                destination site.
              </p>

              <ul className="mt-8 space-y-4">
                {realSexClubFeatures.map((feature, index) => (
                  <li
                    key={feature.title}
                    className="rounded-2xl border border-cream/10 bg-ink-soft/70 px-4 py-4 transition duration-300 hover:border-brand-rose/35"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-rose">
                      0{index + 1} · {feature.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-fog">
                      {feature.text}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm leading-relaxed text-fog">
                See this listing on{" "}
                <Link
                  href="/usa"
                  className="text-cream underline decoration-brand-rose/50 underline-offset-2 hover:text-brand-rose"
                >
                  USA
                </Link>
                ,{" "}
                <Link
                  href="/germany"
                  className="text-cream underline decoration-brand-rose/50 underline-offset-2 hover:text-brand-rose"
                >
                  Germany
                </Link>
                ,{" "}
                <Link
                  href="/uk"
                  className="text-cream underline decoration-brand-rose/50 underline-offset-2 hover:text-brand-rose"
                >
                  UK
                </Link>
                , and{" "}
                <Link
                  href="/top-offers"
                  className="text-cream underline decoration-brand-rose/50 underline-offset-2 hover:text-brand-rose"
                >
                  Top Offers
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-cream/10 px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="tdc-eyebrow mb-4">Audience</p>
            <h2 className="max-w-xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Who it may suit
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog">
              A possible fit for adults 18+ comparing adult dating or adult
              social listings focused on direct connections — not a ranking,
              and not the right fit for every visitor.
            </p>

            <ul className="mt-10 grid gap-5 sm:grid-cols-3">
              <li className="rounded-2xl border border-cream/10 bg-ink-soft p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-rose/40">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-rose/15 text-brand-rose">
                  <Heart size={20} />
                </span>
                <h3 className="mt-5 text-lg font-bold">Adult dating</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  Adults 18+ looking for an adult dating or adult social
                  listing rather than a general directory.
                </p>
              </li>
              <li className="rounded-2xl border border-cream/10 bg-ink-soft p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-rose/40">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-rose/15 text-brand-rose">
                  <MessageCircle size={20} />
                </span>
                <h3 className="mt-5 text-lg font-bold">Direct connections</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  People who want messaging and profile tools aimed at direct,
                  exciting connections.
                </p>
              </li>
              <li className="rounded-2xl border border-cream/10 bg-ink-soft p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-rose/40">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-rose/15 text-brand-rose">
                  <Globe2 size={20} />
                </span>
                <h3 className="mt-5 text-lg font-bold">Country shortlists</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  Visitors comparing this offer on{" "}
                  <Link
                    href="/france"
                    className="text-cream underline decoration-brand-rose/50 underline-offset-2 hover:text-brand-rose"
                  >
                    France
                  </Link>
                  ,{" "}
                  <Link
                    href="/canada"
                    className="text-cream underline decoration-brand-rose/50 underline-offset-2 hover:text-brand-rose"
                  >
                    Canada
                  </Link>
                  , and{" "}
                  <Link
                    href="/australia"
                    className="text-cream underline decoration-brand-rose/50 underline-offset-2 hover:text-brand-rose"
                  >
                    Australia
                  </Link>{" "}
                  pages.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="border-b border-cream/10 bg-ink-soft/40 px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="tdc-eyebrow-mint mb-4">Before you visit</p>
            <h2 className="max-w-xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              What to consider
            </h2>

            <ul className="mt-10 grid gap-5 sm:grid-cols-3">
              <li className="rounded-2xl border border-cream/10 bg-ink p-6">
                <ShieldCheck className="text-brand-mint" size={22} />
                <h3 className="mt-4 text-lg font-bold">Privacy</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  Review privacy settings and what profile information you are
                  asked to share on the destination site.
                </p>
              </li>
              <li className="rounded-2xl border border-cream/10 bg-ink p-6">
                <FileText className="text-brand-mint" size={22} />
                <h3 className="mt-4 text-lg font-bold">Terms & pricing</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  Check current terms, pricing, and account rules on
                  RealSexClub itself. This page does not list fees or signup
                  offers.
                </p>
              </li>
              <li className="rounded-2xl border border-cream/10 bg-ink p-6">
                <Smartphone className="text-brand-mint" size={22} />
                <h3 className="mt-4 text-lg font-bold">Availability</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  Availability may vary by location. A listing on TheDateCompass
                  does not mean the service is open in every country or region.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-cream/10">
          <div className="relative min-h-[70vh] sm:min-h-[640px]">
            <Image
              src={realSexClubVisuals.wide}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[center_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

            <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-4 py-16 sm:min-h-[640px] sm:px-6 lg:justify-center">
              <div className="max-w-xl rounded-3xl border border-cream/10 bg-ink/55 p-6 backdrop-blur-md sm:p-8">
                <p className="tdc-eyebrow-mint mb-3">Continue</p>
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Open RealSexClub
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-fog sm:text-base">
                  Review profiles, messaging, and current terms on the
                  destination site. Adults 18+ only.
                </p>
                <div className="mt-7">
                  <VisitCta placement="realsexclub_mid_cta" />
                </div>
                <AffiliateNote className="mt-4 text-xs leading-relaxed text-fog/80" />
              </div>
            </div>
          </div>
        </section>

        <CountryFaqSection
          eyebrow="FAQ"
          title="Common questions"
          variant="germany"
          items={[...realSexClubFaqs]}
        />

        <section className="px-4 pb-24 pt-4 sm:px-6 lg:pb-28">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-cream/10 bg-ink-soft px-8 py-12 text-center lg:px-12">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Continue to RealSexClub
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-fog md:text-base">
              Open the destination site in a new tab to review profiles,
              messaging, and current terms for yourself.
            </p>
            <div className="mt-8 flex justify-center">
              <VisitCta placement="realsexclub_final_cta" />
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
        <a
          href={realSexClubOffer.url}
          target="_blank"
          rel={REL}
          onClick={() =>
            trackAffiliateClick(realSexClubOffer.name, "realsexclub_fixed_cta")
          }
          className="tdc-btn-primary flex w-full !rounded-2xl !py-3.5 !text-sm"
        >
          {realSexClubOffer.ctaLabel}
        </a>
      </div>

      <Footer />
    </>
  );
}
