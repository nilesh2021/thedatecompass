"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Sparkles, Star } from "lucide-react";
import CountryAffiliateDisclaimer from "@/components/country/common/CountryAffiliateDisclaimer";
import CountrySectionHeading from "@/components/country/common/CountrySectionHeading";
import { trackAffiliateClick } from "@/lib/analytics";

export type UsaOfferItem = {
  name: string;
  category: string;
  featured?: boolean;
  description: string;
  badge: string;
  mark: string;
  accent: string;
  image: string;
  href: string;
  tags: string[];
  rating?: number;
  country?: string;
};

type USAOffersProps = {
  offers: UsaOfferItem[];
};

type TabKey = "All" | "Gay Dating" | "Casual & Adult" | "Mature" | "Trans";

interface TabDefinition {
  id: TabKey;
  label: string;
  hash: string;
  match: (offer: UsaOfferItem) => boolean;
}

const TABS: TabDefinition[] = [
  {
    id: "All",
    label: "All Offers",
    hash: "offers",
    match: () => true,
  },
  {
    id: "Gay Dating",
    label: "Gay Dating",
    hash: "offers-gay",
    match: (o) => o.category.toLowerCase().includes("gay"),
  },
  {
    id: "Casual & Adult",
    label: "Casual & Adult",
    hash: "offers-casual",
    match: (o) => {
      const c = o.category.toLowerCase();
      return c.includes("casual") || c.includes("adult");
    },
  },
  {
    id: "Mature",
    label: "Mature",
    hash: "offers-mature",
    match: (o) => o.category.toLowerCase().includes("mature"),
  },
  {
    id: "Trans",
    label: "Trans",
    hash: "offers-trans",
    match: (o) => o.category.toLowerCase().includes("trans"),
  },
];

const HASH_TO_TAB: Record<string, TabKey> = {
  offers: "All",
  "offers-gay": "Gay Dating",
  "offers-casual": "Casual & Adult",
  "offers-adult": "Casual & Adult",
  "offers-mature": "Mature",
  "offers-trans": "Trans",
};

export default function USAOffers({ offers }: USAOffersProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("All");

  useEffect(() => {
    const handleHash = () => {
      const rawHash = window.location.hash.replace("#", "").toLowerCase();
      if (rawHash in HASH_TO_TAB) {
        setActiveTab(HASH_TO_TAB[rawHash]);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const tabCounts = useMemo(() => {
    const counts: Record<TabKey, number> = {
      All: offers.length,
      "Gay Dating": 0,
      "Casual & Adult": 0,
      Mature: 0,
      Trans: 0,
    };

    for (const tab of TABS) {
      if (tab.id === "All") continue;
      counts[tab.id] = offers.filter(tab.match).length;
    }

    return counts;
  }, [offers]);

  const displayedOffers = useMemo(() => {
    const currentTab = TABS.find((t) => t.id === activeTab) ?? TABS[0];
    return offers.filter(currentTab.match);
  }, [offers, activeTab]);

  const selectTab = (tab: TabDefinition) => {
    setActiveTab(tab.id);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${tab.hash}`);
    }
  };

  return (
    <section
      id="offers"
      className="relative scroll-mt-20 px-6 py-20 sm:px-8 lg:px-12"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(145deg,#0a0b0d,#16181c_60%,#0a0b0d)]" />
      <div className="absolute -left-20 top-1/4 -z-10 h-80 w-80 rounded-full bg-brand-rose/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-1/3 -z-10 h-80 w-80 rounded-full bg-brand-mint/5 blur-[120px]" />

      {/* Anchor targets for hash deep links */}
      <span id="offers-casual" className="pointer-events-none absolute top-0" aria-hidden />
      <span id="offers-adult" className="pointer-events-none absolute top-0" aria-hidden />
      <span id="offers-mature" className="pointer-events-none absolute top-0" aria-hidden />
      <span id="offers-gay" className="pointer-events-none absolute top-0" aria-hidden />
      <span id="offers-trans" className="pointer-events-none absolute top-0" aria-hidden />

      <div className="mx-auto max-w-7xl">
        {/* Header & Eyebrow */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <CountrySectionHeading
              variant="usa"
              eyebrow="USA dating options · 2026"
              title={
                <>
                  Find your kind of{" "}
                  <span className="italic text-brand-rose">connection.</span>
                </>
              }
            />
          </div>

          <p className="max-w-md leading-relaxed text-white/60">
            Compare verified adult dating and social platforms active for eligible
            visitors in the United States. Filter by category to find your match.
          </p>
        </div>

        {/* Smart Category Tabs */}
        <div className="mt-10">
          <div
            role="tablist"
            aria-label="Filter USA dating offers by category"
            className="inline-flex max-w-full flex-wrap gap-2 rounded-2xl border border-white/10 bg-black/40 p-1.5 backdrop-blur-md"
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              const count = tabCounts[tab.id];

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="usa-offers-grid"
                  onClick={() => selectTab(tab)}
                  className={`group inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 sm:text-sm ${
                    isActive
                      ? "bg-brand-rose text-white shadow-[0_8px_24px_rgba(255,61,110,0.4)] ring-1 ring-white/30"
                      : "bg-white/[0.03] text-white/60 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-semibold transition ${
                      isActive
                        ? "bg-black/25 text-white"
                        : "bg-white/10 text-white/50 group-hover:text-white"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-xs tracking-wide text-white/45 sm:text-sm">
            Showing{" "}
            <span className="font-semibold text-brand-rose-soft">
              {displayedOffers.length}
            </span>{" "}
            {displayedOffers.length === 1 ? "offer" : "offers"} in{" "}
            <span className="font-semibold text-white/80">{activeTab}</span>
          </p>
        </div>

        {/* Modern High-Contrast Grid */}
        <div
          id="usa-offers-grid"
          role="tabpanel"
          aria-label={`${activeTab} offers`}
          className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {displayedOffers.map((offer) => {
            const isFeatured = Boolean(offer.featured);
            const ratingValue = offer.rating ?? 4.7;

            return (
              <article
                key={offer.name}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,61,110,0.18)] ${
                  isFeatured
                    ? "border-brand-rose/40 bg-gradient-to-b from-brand-rose/[0.08] via-white/[0.03] to-white/[0.02] shadow-[0_12px_36px_rgba(255,61,110,0.12)] hover:border-brand-rose/70"
                    : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]"
                }`}
              >
                {/* Visual Image & Floating Badges */}
                <div>
                  <div className="relative h-56 overflow-hidden rounded-t-3xl bg-ink-soft">
                    <Image
                      src={offer.image}
                      alt={`${offer.name} adult dating platform`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-black/30 to-transparent" />

                    {/* Top Floating Badges */}
                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-2">
                      <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-mint/90 backdrop-blur-md">
                        {offer.category}
                      </span>

                      {isFeatured ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-brand-rose px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-lg shadow-brand-rose/40">
                          <Sparkles size={11} />
                          Top Pick
                        </span>
                      ) : (
                        <span className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/70 backdrop-blur-md">
                          USA 18+
                        </span>
                      )}
                    </div>

                    {/* Bottom Floating Stats on Image */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1 rounded-full border border-amber-400/30 bg-black/70 px-2.5 py-1 font-bold text-amber-300 backdrop-blur-sm">
                        <Star size={12} className="fill-amber-400 text-amber-400" />
                        <span>{ratingValue.toFixed(1)}</span>
                        <span className="text-[10px] text-white/50">/ 5.0</span>
                      </div>

                      <div className="flex items-center gap-1 text-[11px] font-medium text-white/75">
                        <ShieldCheck size={13} className="text-brand-mint/80" />
                        <span>Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Offer Name */}
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-brand-rose-soft transition-colors">
                        {offer.name}
                      </h3>
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
                        {offer.country ?? "USA"}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {offer.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-relaxed text-white/65 line-clamp-3">
                      {offer.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer & Direct Affiliate CTA */}
                <div className="p-6 pt-0">
                  <a
                    href={offer.href}
                    target="_blank"
                    rel="sponsored nofollow noopener noreferrer"
                    onClick={() =>
                      trackAffiliateClick(offer.name, "usa_offer_card", "usa")
                    }
                    className={`group/btn flex min-h-[50px] w-full items-center justify-between rounded-xl px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white transition-all duration-300 ${
                      isFeatured
                        ? "bg-brand-rose shadow-[0_6px_20px_rgba(255,61,110,0.35)] hover:bg-brand-rose-soft hover:shadow-[0_10px_28px_rgba(255,61,110,0.5)] hover:-translate-y-0.5"
                        : "border border-white/15 bg-white/[0.08] hover:border-brand-rose/60 hover:bg-brand-rose hover:shadow-[0_6px_20px_rgba(255,61,110,0.3)] hover:-translate-y-0.5"
                    }`}
                  >
                    <span>Visit {offer.name}</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/25 text-white transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>

                  <p className="mt-2.5 text-center text-[10px] tracking-wide text-white/35">
                    18+ adults only · External third-party site
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Affiliate Disclaimer Card */}
        <div className="mt-14">
          <CountryAffiliateDisclaimer
            variant="usa"
            text="TheDateCompass is an independent adult dating comparison resource. We may receive referral compensation when you visit a provider through our links. We do not operate these external platforms, process payments, or manage member profiles. Always review destination terms and age rules before signing up."
          />
        </div>
      </div>
    </section>
  );
}
