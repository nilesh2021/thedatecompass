"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { getOfferTabByRoute } from "@/data/datingOffersTabs";
import MarqueeBand from "@/components/theme/MarqueeBand";
import BrowseByCountrySection from "@/components/landing/BrowseByCountrySection";
import { getCountryBrowseLinks } from "@/data/countryBrowseLinks";
import { trackAffiliateClick } from "@/lib/analytics";

const gayTab = getOfferTabByRoute("gay-dating")!;

/** Male model portraits for gay dating offers */
const MODEL = {
  hero: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1600&q=80",
  heroSide:
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
  stripA:
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
  stripB:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=800&q=80",
  stripC:
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
  cta: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=1400&q=80",
} as const;

const offerModels: Record<string, string> = {
  gaybloom:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  pridepair:
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80",
  manfinder:
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
  transdate:
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=80",
};

const ctaClass =
  "group relative inline-flex min-h-[52px] cursor-pointer items-stretch overflow-hidden border-2 border-brand-rose bg-cream text-ink shadow-[6px_6px_0_0_rgba(255,61,110,0.85)] transition duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_rgba(255,61,110,0.95)]";

export default function GayDatingLanding() {
  const featured = gayTab.offers.find((o) => o.featured) ?? gayTab.offers[0];
  const otherOffers = gayTab.offers.filter((o) => o.id !== featured.id);

  return (
    <div className="bg-ink font-display text-cream">
      {/* Full-bleed hero with male models */}
      <section className="relative min-h-[78vh] overflow-hidden">
        <Image
          src={MODEL.hero}
          alt="Gay dating model — find real connections"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_70%_40%,rgba(255,61,110,0.22),transparent_70%)]" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6 lg:justify-center lg:pb-20">
          <div className="max-w-2xl animate-fade-up">
            <p className="tdc-eyebrow-mint mb-5 flex items-center gap-3 before:h-px before:w-8 before:bg-brand-mint before:content-['']">
              Gay dating · Adults 18+ · 2026
            </p>

            <h1 className="text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              Gay dating
              <span className="mt-2 block font-serif-accent text-[1.02em] italic text-brand-rose">
                that actually connects.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog">
              Compare gay dating sites and LGBTQ+ apps — GayBloom, PridePair,
              Manfinder, and TransDate — with curated offers for real
              conversations.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#offers"
                className={ctaClass}
              >
                <span className="flex flex-1 items-center justify-center px-7 text-sm font-extrabold uppercase tracking-[0.12em]">
                  Compare offers
                </span>
                <span className="flex w-14 shrink-0 items-center justify-center bg-brand-rose text-cream">
                  <ArrowUpRight size={18} />
                </span>
              </a>
              <a
                href={featured.url}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="tdc-btn-line"
                onClick={() =>
                  trackAffiliateClick(featured.name, "gay_dating_offer")
                }
              >
                Try {featured.name}
              </a>
            </div>
          </div>

          {/* Floating side model — desktop */}
          <div className="pointer-events-none absolute bottom-16 right-6 hidden w-48 overflow-hidden border-4 border-ink shadow-2xl lg:block xl:right-0 xl:w-56">
            <div className="relative aspect-[3/4]">
              <Image
                src={MODEL.heroSide}
                alt="Gay dating member portrait"
                fill
                sizes="224px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <MarqueeBand
        items={[
          "Gay dating",
          "Men seeking men",
          "LGBTQ+ connections",
          "GayBloom",
          "PridePair",
          "Manfinder",
          "Adults 18+",
        ]}
      />

      {/* Model strip */}
      <section className="border-b border-cream/10 bg-ink-soft" aria-hidden>
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-px bg-cream/10">
          {[MODEL.stripA, MODEL.stripB, MODEL.stripC].map((src, i) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden bg-ink">
              <Image
                src={src}
                alt=""
                fill
                sizes="33vw"
                className="object-cover object-top transition duration-700 hover:scale-105"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            </div>
          ))}
        </div>
      </section>

      {/* Offers */}
      <section id="offers" className="tdc-section-pitch py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="tdc-eyebrow mb-3">Gay dating offers</p>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                Gay dating sites compared
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-fog">
                {gayTab.seoIntro}
              </p>
            </div>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-fog">
              <ShieldCheck size={14} className="text-brand-mint" />
              Independent · Affiliate links · 18+
            </p>
          </div>

          {/* Featured offer */}
          <article className="relative mb-6 overflow-hidden border border-brand-rose/40 bg-[linear-gradient(145deg,rgba(255,61,110,0.14),rgba(22,24,28,0.95))]">
            <div className="absolute right-0 top-0 z-10 bg-brand-rose px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-cream">
              {featured.badge || "Featured"}
            </div>

            <div className="grid gap-0 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
              <div className="relative min-h-[300px] lg:min-h-[440px]">
                <Image
                  src={offerModels[featured.id] ?? featured.logo}
                  alt={`${featured.name} gay dating model`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink/30" />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-10">
                <p className="text-sm font-medium text-brand-rose">
                  {featured.bestFor}
                </p>
                <h3 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {featured.name}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-fog">
                  {featured.description}
                </p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {featured.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-cream/80"
                    >
                      <span className="mt-0.5 text-brand-mint">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={featured.url}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className={`${ctaClass} mt-8 w-full sm:w-fit`}
                  onClick={() =>
                    trackAffiliateClick(featured.name, "gay_dating_offer")
                  }
                >
                  <span className="flex flex-1 items-center justify-center px-6 text-sm font-extrabold uppercase tracking-[0.12em]">
                    Visit {featured.name}
                  </span>
                  <span className="flex w-14 shrink-0 items-center justify-center bg-brand-rose text-cream">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </div>
            </div>
          </article>

          {/* Other offers with model photos */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherOffers.map((offer) => (
              <a
                key={offer.id}
                href={offer.url}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                onClick={() =>
                  trackAffiliateClick(offer.name, "gay_dating_offer")
                }
                className="group flex flex-col overflow-hidden border border-cream/10 bg-ink-soft no-underline transition duration-300 hover:-translate-y-1 hover:border-brand-rose/40"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={offerModels[offer.id] ?? offer.logo}
                    alt={`${offer.name} gay dating model`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  {offer.badge && (
                    <span className="absolute left-3 top-3 bg-brand-rose px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-cream">
                      {offer.badge}
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="mt-1 text-2xl font-extrabold text-cream">
                      {offer.name}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm font-medium text-brand-rose">
                    {offer.bestFor}
                  </p>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-fog">
                    {offer.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {offer.highlights.slice(0, 3).map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-xs text-cream/75"
                      >
                        <span className="text-brand-mint">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-mint transition group-hover:text-cream">
                    Visit {offer.name}
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <p className="mt-8 border border-cream/10 bg-ink-soft px-4 py-3 text-center text-xs leading-relaxed text-fog">
            TheDateCompass is an independent comparison site. We may earn a
            commission when you visit gay dating platforms through our links.
            All listed services are third-party providers for adults 18+.
          </p>
        </div>
      </section>

      {/* How it works — compact */}
      <section className="border-t border-cream/10 bg-ink-soft py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="tdc-eyebrow mb-3">How it works</p>
          <h2 className="max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Three steps to your next connection
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Pick a gay dating offer",
                body: "Browse GayBloom, PridePair, Manfinder, or TransDate based on the connection you want.",
              },
              {
                step: "02",
                title: "Create your profile",
                body: "Sign up on the platform, add photos, and set preferences for men seeking men.",
              },
              {
                step: "03",
                title: "Start chatting",
                body: "Message matches, plan dates, and build chemistry — on your terms.",
              },
            ].map((item) => (
              <div key={item.step}>
                <span className="font-serif-accent text-4xl italic text-brand-rose">
                  {item.step}
                </span>
                <h3 className="mt-3 text-xl font-extrabold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrowseByCountrySection
        links={getCountryBrowseLinks("gay")}
        title="Explore gay dating by country"
        description="Country shortlists that include gay dating offers from our active regional pages."
      />

      {/* Closing CTA with model */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <Image
          src={MODEL.cta}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/70" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-xl">
            <p className="tdc-eyebrow-mint mb-4">Ready when you are</p>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Meet someone who{" "}
              <span className="font-serif-accent italic text-brand-rose">
                gets you
              </span>
            </h2>
            <p className="mt-5 text-lg text-fog">
              Start with a featured gay dating offer below, then confirm signup
              details on the partner platform. Adults 18+.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={featured.url}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className={ctaClass}
                onClick={() =>
                  trackAffiliateClick(featured.name, "gay_dating_offer")
                }
              >
                <span className="flex flex-1 items-center justify-center px-7 text-sm font-extrabold uppercase tracking-[0.12em]">
                  Get started with {featured.name}
                </span>
                <span className="flex w-14 shrink-0 items-center justify-center bg-brand-rose text-cream">
                  <ArrowUpRight size={18} />
                </span>
              </a>
              <Link href="#offers" className="tdc-btn-line">
                Compare offers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
