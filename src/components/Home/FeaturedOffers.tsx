"use client";

import { useMemo, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import TrackedAffiliateLink from "@/components/affiliate/TrackedAffiliateLink";
import { useCountriesOpen } from "@/components/Home/CountriesOpen";
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
  const { toggle } = useCountriesOpen();
  const [activeTab, setActiveTab] = useState<OfferTab>("All");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const visibleOffers = useMemo(
    () =>
      discoveryOffers
        .filter((offer) => matchesTab(offer, activeTab))
        .slice(0, 6),
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
          "radial-gradient(ellipse 70% 55% at 8% 0%, rgba(255, 45, 135, 0.22), transparent 58%), radial-gradient(ellipse 50% 40% at 100% 80%, rgba(40, 60, 140, 0.35), transparent 55%), linear-gradient(180deg, #0c1230 0%, #141a3d 48%, #0c1230 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">
            Tonight&apos;s lineup
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-cream sm:text-5xl">
            Platforms with a pulse
          </h2>

          <p className="mx-auto mt-5 max-w-xl font-serif-accent text-lg italic leading-relaxed text-cream/70 sm:mt-6 sm:text-xl">
            Hand-picked adult dating offers. Chemistry first — availability
            still depends on your country.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <div
            className="mx-auto flex w-full max-w-xl gap-2 overflow-x-auto rounded-full border border-[#ff2d87]/30 bg-[#0c1230]/80 p-1.5"
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
                  className={`min-h-11 flex-1 whitespace-nowrap rounded-full px-4 text-[0.72rem] font-bold uppercase tracking-[0.14em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff2d87] ${
                    isActive
                      ? "bg-[#ff2d87] text-white shadow-[0_8px_24px_rgba(255,45,135,0.28)]"
                      : "text-white/75 hover:bg-white/10 hover:text-white"
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
            className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 xl:grid-cols-3"
          >
            {visibleOffers.map((offer) => {
              const explore = getExploreLink(offer.category);

              return (
                <article
                  key={`${offer.name}-${offer.href}`}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#ff2d87]/35 bg-[#141a3d]"
                >
                  <TrackedAffiliateLink
                    href={offer.href}
                    target="_blank"
                    rel="sponsored nofollow noopener noreferrer"
                    className="group flex flex-1 flex-col text-cream no-underline"
                    onClick={() =>
                      trackAffiliateClick(
                        offer.name,
                        "featured_offer",
                        offer.country?.trim().toLowerCase() || undefined
                      )
                    }
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={offer.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover object-top transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141a3d] via-transparent to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full bg-[#0c1230]/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                        18+
                      </span>
                      {offer.featured ? (
                        <span className="absolute right-3 top-3 rounded-full bg-[#ff2d87] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                          Featured
                        </span>
                      ) : null}
                    </div>

                    <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#ff2d87]">
                        {offer.category}
                        {offer.country ? ` · ${offer.country}` : ""}
                      </p>
                      <h3 className="mt-2 text-2xl font-extrabold tracking-tight">
                        {offer.name}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/75">
                        {offer.description}
                      </p>
                      <span className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#ff2d87] px-6 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-white shadow-[0_8px_24px_rgba(255,45,135,0.28)] transition group-hover:brightness-110">
                        Open offer
                        <ArrowUpRight size={16} />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </span>
                    </div>
                  </TrackedAffiliateLink>

                  {explore ? (
                    <Link
                      href={explore.href}
                      className="px-5 pb-4 text-center text-sm font-semibold text-white/70 underline-offset-4 hover:text-[#ff2d87] hover:underline"
                    >
                      {explore.label}
                    </Link>
                  ) : null}
                </article>
              );
            })}
          </div>
        )}

        <div className="mt-16 text-center">
          <button
            type="button"
            onClick={toggle}
            className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#ff2d87]/50 bg-transparent px-6 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff2d87] sm:w-auto"
          >
            Browse offers by country
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
