"use client";

import { useMemo, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe } from "lucide-react";
import { usaOffers } from "@/data/usaOffers";
import { trackAffiliateClick } from "@/lib/analytics";

type OfferTab =
  | "All"
  | "AI"
  | "Dating"
  | "Gay"
  | "Mature"
  | "Casual"
  | "Adult"
  | "TransDate";
const VISIBLE_TABS: OfferTab[] = ["All", "Gay", "TransDate", "Adult"];

/** One secondary internal link per clearly matched category. */
function getExploreLink(category: string): { href: string; label: string } | null {
  const key = category.trim().toLowerCase();

  if (key === "gay dating") {
    return { href: "/gay-dating", label: "Explore gay dating offers" };
  }
  if (key === "ai") {
    return { href: "/category/ai-girlfriend", label: "Explore AI companions" };
  }
  if (key === "adult dating") {
    return { href: "/top-offers/adult", label: "See adult dating options" };
  }
  if (key === "mature dating") {
    return { href: "/top-offers/mature", label: "Explore mature dating" };
  }
  if (key === "adult social") {
    return { href: "/cozy-sites", label: "Explore cozy & niche sites" };
  }
  if (key === "casual dating") {
    return { href: "/top-offers", label: "Explore casual dating" };
  }

  return null;
}

function matchesTab(offer: { name: string; category: string }, tab: OfferTab): boolean {
  const key = offer.category.trim().toLowerCase();
  const name = offer.name.trim().toLowerCase();

  if (tab === "All") return !key.includes("ai") && !name.includes("dreamz");
  if (tab === "AI") return key.includes("ai") || name.includes("dreamz");
  if (tab === "Gay") return key.includes("gay");
  if (tab === "TransDate") return key.includes("trans") || name.includes("transdate");
  if (tab === "Mature") return key.includes("mature");
  if (tab === "Casual") return key.includes("casual");
  if (tab === "Adult") {
    return (
      key.includes("adult") ||
      key.includes("mature") ||
      key.includes("casual")
    );
  }
  if (tab === "Dating") {
    return (
      key.includes("dating") &&
      !key.includes("gay") &&
      !key.includes("mature") &&
      !key.includes("casual") &&
      !key.includes("adult") &&
      !key.includes("ai")
    );
  }

  return false;
}

const discoveryOffers = usaOffers.filter(
  (offer, index, list) =>
    !offer.name.trim().toLowerCase().includes("dreamz") &&
    list.findIndex((item) => item.name === offer.name) === index
);

export default function FeaturedOffers() {
  const [activeTab, setActiveTab] = useState<OfferTab>("All");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const visibleOffers = useMemo(
    () => discoveryOffers.filter((offer) => matchesTab(offer, activeTab)),
    [activeTab]
  );

  const selectTab = (tab: OfferTab, index: number, focus = false) => {
    setActiveTab(tab);
    if (focus) tabRefs.current[index]?.focus();
  };

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const current = VISIBLE_TABS.indexOf(activeTab);
    let next = current;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = (current + 1) % VISIBLE_TABS.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = (current - 1 + VISIBLE_TABS.length) % VISIBLE_TABS.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = VISIBLE_TABS.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    selectTab(VISIBLE_TABS[next], next, true);
  };

  return (
    <section
      id="featured"
      className="relative overflow-x-clip py-16 font-display text-cream sm:py-24"
      style={{
        background:
          "radial-gradient(ellipse 70% 55% at 8% 0%, rgba(122, 28, 52, 0.38), transparent 58%), radial-gradient(ellipse 50% 40% at 100% 80%, rgba(90, 18, 40, 0.28), transparent 55%), linear-gradient(180deg, #070708 0%, #12080d 48%, #070708 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#d4af87]">
            Discover platforms
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-cream sm:text-5xl">
            Browse dating offers by category
          </h2>

          <p className="mx-auto mt-5 max-w-xl font-serif-accent text-lg italic leading-relaxed text-cream/70 sm:mt-6 sm:text-xl">
            Explore featured third-party dating platforms. Availability varies
            by country.
          </p>
        </div>

        <div className="sticky top-[3.625rem] z-30 -mx-4 mt-8 bg-[#12080d]/90 px-4 py-3 backdrop-blur-md sm:static sm:mx-0 sm:mt-12 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none">
          <div
            className="mx-auto grid w-full max-w-2xl grid-cols-2 gap-2 rounded-2xl border border-[#d4af87]/30 bg-black/45 p-2 sm:flex sm:gap-1 sm:rounded-full sm:p-1.5"
            role="tablist"
            aria-label="Filter dating offers by category"
          >
            {VISIBLE_TABS.map((tab, index) => {
              const isActive = activeTab === tab;
              const tabId = `featured-tab-${tab.toLowerCase()}`;

              return (
                <button
                  key={tab}
                  id={tabId}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="featured-offers-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => selectTab(tab, index)}
                  onKeyDown={onTabKeyDown}
                  className={`min-h-11 rounded-xl px-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af87] sm:min-h-12 sm:flex-1 sm:rounded-full sm:px-6 sm:tracking-[0.16em] ${
                    isActive
                      ? "bg-gradient-to-r from-brand-rose to-[#d4af87] text-ink shadow-[0_8px_24px_rgba(255,61,110,0.28)]"
                      : "text-cream/80 hover:bg-cream/[0.08] hover:text-cream"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visibleOffers.length} {activeTab === "All" ? "dating" : activeTab}{" "}
          platforms.
        </p>

        {visibleOffers.length === 0 ? (
          <p className="mt-10 text-center font-serif-accent text-lg italic text-cream/70 sm:mt-16">
            No platforms in this category on the homepage yet.
          </p>
        ) : (
          <div
            id="featured-offers-panel"
            role="tabpanel"
            aria-labelledby={`featured-tab-${activeTab.toLowerCase()}`}
            className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2 xl:grid-cols-4"
          >
            {visibleOffers.map((offer) => {
              const explore = getExploreLink(offer.category);

              return (
                <article
                  key={`${offer.name}-${offer.href}`}
                  className="group flex h-full flex-col overflow-hidden border border-[#d4af87]/20 bg-[#0e0a0c] transition duration-300 hover:-translate-y-1 hover:border-brand-rose/45"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={offer.image}
                      alt={`${offer.name} dating platform`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    {offer.featured ? (
                      <div className="absolute left-4 top-4 bg-brand-rose px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cream">
                        Featured
                      </div>
                    ) : null}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-semibold text-cream">
                      <Globe size={14} className="text-[#d4af87]" />
                      {offer.country ?? "Multi-region"}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#d4af87]">
                        {offer.category}
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-cream">
                      {offer.name}
                    </h3>

                    <p className="mt-3 flex items-center gap-2 text-sm text-cream/75">
                      <ShieldCheck size={16} className="text-brand-rose" />
                      Adults 18+ only
                    </p>

                    <p className="mt-3 flex-1 leading-relaxed text-cream/80">
                      {offer.description}
                    </p>

                    <a
                      href={offer.href}
                      target="_blank"
                      rel="sponsored nofollow noopener noreferrer"
                      className="tdc-btn-primary mt-8 min-h-12 w-full"
                      onClick={() =>
                        trackAffiliateClick(
                          offer.name,
                          "featured_offer",
                          offer.country?.trim().toLowerCase() || undefined
                        )
                      }
                    >
                      Visit {offer.name}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>

                    {explore ? (
                      <Link
                        href={explore.href}
                        className="mt-2 inline-flex min-h-11 w-full items-center justify-center text-center text-sm font-semibold text-cream/80 underline-offset-4 transition hover:text-brand-rose hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af87]"
                      >
                        {explore.label}
                      </Link>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        )}

        <div className="mt-16 text-center">
          <Link
            href="#countries"
            className="tdc-btn-line min-h-12 w-full border-[#d4af87]/40 text-[#f3e6d4] hover:border-brand-rose hover:text-brand-rose sm:w-auto"
          >
            Browse offers by country
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
