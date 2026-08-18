"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Globe2,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import ManFinderLogo from "@/components/landing/ManFinderLogo";
import BrowseByCountrySection from "@/components/landing/BrowseByCountrySection";
import MarqueeBand from "@/components/theme/MarqueeBand";

import { trackAffiliateClick } from "@/lib/analytics";
import { getCountryBrowseLinks } from "@/data/countryBrowseLinks";
import { getTrackedAffiliateUrl } from "@/lib/trafficstars";

import {
  gayDatingSitesFaqs,
  gayDatingSitesOffers,
  type GayDatingSiteOffer,
} from "@/data/gayDatingSitesOffers";

const REL = "sponsored nofollow noopener noreferrer";

function useTrackedUrls(offers: GayDatingSiteOffer[]) {
  const [urls, setUrls] = useState<Record<string, string>>(() =>
    Object.fromEntries(offers.map((o) => [o.id, o.url]))
  );

  useEffect(() => {
    setUrls(
      Object.fromEntries(
        offers.map((o) => [o.id, getTrackedAffiliateUrl(o.url)])
      )
    );
  }, [offers]);

  return urls;
}

function AffiliateNote({ className = "" }: { className?: string }) {
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

function OfferCta({
  offer,
  href,
  placement,
  className,
}: {
  offer: GayDatingSiteOffer;
  href: string;
  placement: string;
  className: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel={REL}
      className={className}
      onClick={() => trackAffiliateClick(offer.name, placement)}
    >
      <span className="flex flex-1 items-center justify-center px-6 text-sm font-extrabold uppercase tracking-[0.1em]">
        {offer.ctaLabel}
      </span>
      <span className="flex w-14 shrink-0 items-center justify-center bg-black/10">
        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </a>
  );
}

function accentStyles(accent: GayDatingSiteOffer["accent"]) {
  if (accent === "mint") {
    return {
      ring: "ring-brand-mint/40",
      badge: "bg-brand-mint/15 text-brand-mint border-brand-mint/30",
      rank: "bg-brand-mint text-ink",
      cta: "group border-brand-mint bg-brand-mint text-ink shadow-[0_12px_35px_rgba(125,255,195,0.22)] hover:shadow-[0_18px_45px_rgba(125,255,195,0.35)]",
      dot: "text-brand-mint",
      glow: "from-brand-mint/20",
    };
  }

  return {
    ring: "ring-brand-rose/40",
    badge: "bg-brand-rose/15 text-brand-rose border-brand-rose/30",
    rank: "bg-brand-rose text-cream",
    cta: "group border-brand-rose bg-brand-rose text-cream shadow-[0_12px_35px_rgba(255,61,110,0.28)] hover:shadow-[0_18px_45px_rgba(255,61,110,0.4)]",
    dot: "text-brand-rose",
    glow: "from-brand-rose/20",
  };
}

function OfferCard({
  offer,
  href,
}: {
  offer: GayDatingSiteOffer;
  href: string;
}) {
  const styles = accentStyles(offer.accent);

  return (
    <article
      className={`relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-soft ring-1 ${styles.ring} transition duration-300 hover:-translate-y-1`}
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${styles.glow} to-transparent blur-3xl`}
        aria-hidden
      />

      <div className="relative grid gap-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-full">
          <Image
            src={offer.image}
            alt={`${offer.name} gay dating`}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-soft via-ink-soft/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink-soft/90" />

          <span
            className={`absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-sm font-black ${styles.rank}`}
          >
            {offer.rank}
          </span>
        </div>

        <div className="relative flex flex-col p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${styles.badge}`}
            >
              <MapPin size={11} />
              {offer.countries}
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-fog">
              {offer.badge}
            </span>
          </div>

          <div className="mt-4">
            {offer.id === "manfinder" ? (
              <ManFinderLogo size="md" />
            ) : (
              <h3 className="text-3xl font-black tracking-tight text-cream sm:text-4xl">
                {offer.name}
              </h3>
            )}
          </div>

          <p className="mt-1 text-sm font-semibold text-brand-mint">
            {offer.bestFor}
          </p>

          <p className="mt-4 text-sm leading-6 text-fog">{offer.description}</p>

          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {offer.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-cream/85"
              >
                <Check size={15} className={`mt-0.5 shrink-0 ${styles.dot}`} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-fog/80">
            <span className="flex items-center gap-1.5">
              <Sparkles size={13} className={styles.dot} />
              {offer.promo}
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 size={13} />
              {offer.countryNote}
            </span>
          </div>

          <div className="mt-7">
            <OfferCta
              offer={offer}
              href={href}
              placement={`gay_dating_sites_offer_${offer.id}`}
              className={`inline-flex min-h-[52px] w-full items-stretch overflow-hidden rounded-xl border transition duration-300 hover:-translate-y-0.5 sm:w-auto ${styles.cta}`}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function GayDatingSitesLanding() {
  const trackedUrls = useTrackedUrls(gayDatingSitesOffers);
  const featured = gayDatingSitesOffers[0];

  return (
    <>
      <Header />

      <main>
        {/* Editorial stone hero — distinct from ManFinder's full-bleed photo hero */}
        <section className="tdc-section-stone relative overflow-hidden px-5 pb-14 pt-28 lg:px-8 lg:pb-20 lg:pt-32">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(10,11,13,0.08) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative mx-auto max-w-6xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-ink/50">
              <span className="h-px w-10 bg-brand-rose" />
              Gay dating sites · Adults 18+
            </p>

            <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
                  Compare top{" "}
                  <span className="font-serif-accent font-normal italic text-brand-rose">
                    gay dating sites
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-ink/70 sm:text-lg">
                  Side-by-side offers for GayBloom and ManFinder — compare
                  country availability, features, and signup before visiting a
                  third-party platform.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#offers"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-ink px-7 text-sm font-extrabold uppercase tracking-[0.1em] text-cream transition hover:-translate-y-0.5"
                  >
                    View offers
                  </a>
                  <a
                    href={trackedUrls[featured.id]}
                    target="_blank"
                    rel={REL}
                    onClick={() =>
                      trackAffiliateClick(
                        featured.name,
                        "gay_dating_sites_hero"
                      )
                    }
                    className="inline-flex min-h-[52px] items-center gap-2 rounded-xl border-2 border-ink/15 px-7 text-sm font-extrabold uppercase tracking-[0.1em] text-ink transition hover:-translate-y-0.5 hover:border-brand-rose hover:text-brand-rose"
                  >
                    Try {featured.name}
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <AffiliateNote className="mt-5 max-w-md text-[11px] leading-5 text-ink/50" />
              </div>

              {/* Mini comparison snapshot */}
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {gayDatingSitesOffers.map((offer) => {
                  const styles = accentStyles(offer.accent);
                  return (
                    <a
                      key={offer.id}
                      href={trackedUrls[offer.id]}
                      target="_blank"
                      rel={REL}
                      onClick={() =>
                        trackAffiliateClick(
                          offer.name,
                          `gay_dating_sites_hero_card_${offer.id}`
                        )
                      }
                      className="group flex items-center gap-4 rounded-xl border border-ink/10 bg-cream p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-md"
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-black ${styles.rank}`}
                      >
                        {offer.rank}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-bold text-ink">
                          {offer.name}
                        </p>
                        <p className="truncate text-xs text-ink/55">
                          {offer.countries}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="shrink-0 text-ink/30 transition group-hover:text-brand-rose"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <MarqueeBand
          items={[
            "Gay dating sites",
            "GayBloom",
            "ManFinder",
            "United States",
            "International",
            "Men seeking men",
            "Adults 18+",
          ]}
        />

        {/* Offers comparison — primary section */}
        <section
          id="offers"
          className="relative overflow-hidden bg-ink px-5 py-16 text-cream lg:px-8 lg:py-24"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(255,61,110,0.1),transparent_60%)]" />

          <div className="relative mx-auto max-w-6xl">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <p className="tdc-eyebrow-mint mb-3">Offers</p>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                  Gay dating sites compared
                </h2>
                <p className="mt-4 text-sm leading-6 text-fog sm:text-base">
                  Two curated gay dating offers with different country coverage.
                  Review highlights below, then continue to the destination site
                  for current signup details.
                </p>
              </div>

              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-fog">
                <ShieldCheck size={14} className="text-brand-mint" />
                Independent · Affiliate links · 18+
              </p>
            </div>

            <div className="grid gap-6 lg:gap-8">
              {gayDatingSitesOffers.map((offer) => (
                <OfferCard
                  key={offer.id}
                  offer={offer}
                  href={trackedUrls[offer.id]}
                />
              ))}
            </div>

            <p className="mt-8 rounded-xl border border-white/10 bg-ink-soft px-4 py-3 text-center text-xs leading-relaxed text-fog">
              TheDateCompass is an independent comparison site. We may earn a
              commission when you visit gay dating platforms through our links.
              All listed services are third-party providers for adults 18+.
            </p>
          </div>
        </section>

        {/* Quick comparison table — stone section */}
        <section className="tdc-section-stone px-5 py-14 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-rose">
              At a glance
            </p>
            <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">
              Quick comparison
            </h2>

            <div className="mt-8 overflow-x-auto rounded-xl border border-ink/10 bg-cream shadow-sm">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-ink/10 bg-stone/60">
                    <th className="px-5 py-4 font-bold text-ink/60">Offer</th>
                    <th className="px-5 py-4 font-bold text-ink/60">
                      Countries
                    </th>
                    <th className="px-5 py-4 font-bold text-ink/60">
                      Best for
                    </th>
                    <th className="px-5 py-4 font-bold text-ink/60">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {gayDatingSitesOffers.map((offer) => (
                    <tr
                      key={offer.id}
                      className="border-b border-ink/5 last:border-0"
                    >
                      <td className="px-5 py-4 font-bold text-ink">
                        {offer.name}
                      </td>
                      <td className="px-5 py-4 text-ink/70">
                        {offer.countries}
                      </td>
                      <td className="px-5 py-4 text-ink/70">{offer.bestFor}</td>
                      <td className="px-5 py-4">
                        <a
                          href={trackedUrls[offer.id]}
                          target="_blank"
                          rel={REL}
                          onClick={() =>
                            trackAffiliateClick(
                              offer.name,
                              `gay_dating_sites_table_${offer.id}`
                            )
                          }
                          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.1em] text-brand-rose transition hover:text-ink"
                        >
                          Visit
                          <ArrowUpRight size={13} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How to choose */}
        <section className="border-y border-cream/10 bg-ink-soft px-5 py-14 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="tdc-eyebrow mb-3">How to choose</p>
            <h2 className="max-w-xl text-3xl font-black tracking-tight sm:text-4xl">
              Pick the offer that fits your location
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                {
                  title: "US-focused dating",
                  text: "GayBloom is listed for the United States — a strong pick if you want a US gay dating environment.",
                  icon: MapPin,
                },
                {
                  title: "Broader availability",
                  text: "ManFinder covers the United States and other accepted countries — useful if you need wider regional access.",
                  icon: Globe2,
                },
              ].map(({ title, text, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-ink p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-mint/10 text-brand-mint">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-fog">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="px-5 py-16 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="tdc-eyebrow mb-3">FAQ</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Common questions
              </h2>
            </div>

            <div className="mt-10 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-stone">
              {gayDatingSitesFaqs.map((faq) => (
                <details key={faq.question} className="group px-6 py-5">
                  <summary className="cursor-pointer list-none pr-8 text-sm font-bold text-ink transition group-hover:text-brand-rose">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-ink/70">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="tdc-section-pitch border-t border-cream/10 px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Ready to explore a gay dating site?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-fog sm:text-base">
              Start with GayBloom or ManFinder, then confirm signup details,
              pricing, and availability on the destination platform.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              {gayDatingSitesOffers.map((offer) => (
                <OfferCta
                  key={offer.id}
                  offer={offer}
                  href={trackedUrls[offer.id]}
                  placement={`gay_dating_sites_footer_${offer.id}`}
                  className={`inline-flex min-h-[52px] items-stretch overflow-hidden rounded-xl border transition duration-300 hover:-translate-y-0.5 ${accentStyles(offer.accent).cta}`}
                />
              ))}
            </div>

            <AffiliateNote className="mx-auto mt-5 max-w-md text-[11px] leading-5 text-fog/60" />
          </div>
        </section>

        <BrowseByCountrySection
          links={getCountryBrowseLinks("gay")}
          title="Gay dating listings by country"
          description="Compare GayBloom, ManFinder, and related gay dating offers across country-specific pages."
        />
      </main>

      <Footer />
    </>
  );
}
