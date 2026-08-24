"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe } from "lucide-react";
import { usaOffers, type UsaOffer } from "@/data/usaOffers";
import { dreamzOffer } from "@/data/aiGirlfriendOffers";
import { trackAffiliateClick } from "@/lib/analytics";

const TABS = ["All", "AI", "Dating", "Gay", "Mature", "Casual", "Adult"] as const;
type OfferTab = (typeof TABS)[number];

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

  if (tab === "All") return true;
  if (tab === "AI") return key.includes("ai") || name.includes("dreamz");
  if (tab === "Gay") return key.includes("gay");
  if (tab === "Mature") return key.includes("mature");
  if (tab === "Casual") return key.includes("casual");
  if (tab === "Adult") return key.includes("adult") && !key.includes("casual");
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

const dreamzDiscoveryOffer: UsaOffer = {
  name: dreamzOffer.name,
  category: "AI",
  featured: true,
  description: dreamzOffer.description,
  badge: dreamzOffer.badge,
  mark: "D",
  accent: "from-[#E83E9B] via-[#C026D3] to-[#6366F1]",
  image: "/images/dreamz/companion-1.webp",
  href: dreamzOffer.url,
  tags: ["AI", "Adults 18+"],
};

const discoveryOffers = [
  dreamzDiscoveryOffer,
  ...usaOffers.filter(
    (offer, index, list) => list.findIndex((item) => item.name === offer.name) === index
  ),
];

export default function FeaturedOffers() {
  const [activeTab, setActiveTab] = useState<OfferTab>("All");

  const visibleOffers = useMemo(
    () => discoveryOffers.filter((offer) => matchesTab(offer, activeTab)),
    [activeTab]
  );

  return (
    <section
      id="featured"
      className="relative overflow-hidden py-24 font-display text-cream"
      style={{
        background:
          "radial-gradient(ellipse 70% 55% at 8% 0%, rgba(122, 28, 52, 0.38), transparent 58%), radial-gradient(ellipse 50% 40% at 100% 80%, rgba(90, 18, 40, 0.28), transparent 55%), linear-gradient(180deg, #070708 0%, #12080d 48%, #070708 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#d4af87]">
            Discover platforms
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-cream sm:text-5xl">
            Browse dating offers by category
          </h2>

          <p className="mx-auto mt-6 font-serif-accent text-xl italic text-cream/55">
            Explore featured third-party dating and AI companion platforms.
            Availability varies by country.
          </p>
        </div>

        <div
          className="mt-12 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Offer categories"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 border px-5 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] transition duration-300 ${
                  isActive
                    ? "border-[#d4af87] bg-[#d4af87]/15 text-[#f3e6d4] shadow-[0_0_0_1px_rgba(212,175,135,0.35)]"
                    : "border-cream/15 bg-cream/[0.03] text-cream/55 hover:border-brand-rose/40 hover:text-cream"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {visibleOffers.length === 0 ? (
          <p className="mt-16 text-center font-serif-accent text-lg italic text-cream/45">
            No platforms in this category on the homepage yet.
          </p>
        ) : (
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {visibleOffers.map((offer) => {
              const explore = getExploreLink(offer.category);

              return (
                <article
                  key={offer.name}
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

                    <p className="mt-3 flex items-center gap-2 text-sm text-cream/50">
                      <ShieldCheck size={16} className="text-brand-rose" />
                      Adults 18+ only
                    </p>

                    <p className="mt-3 flex-1 text-cream/65">{offer.description}</p>

                    <a
                      href={offer.href}
                      target="_blank"
                      rel="sponsored nofollow noopener noreferrer"
                      className="tdc-btn-primary mt-8 w-full"
                      onClick={() =>
                        trackAffiliateClick(
                          offer.name,
                          "featured_offer",
                          offer.country?.trim().toLowerCase() || undefined
                        )
                      }
                    >
                      Visit site
                    </a>

                    {explore ? (
                      <Link
                        href={explore.href}
                        className="mt-3 text-center text-xs font-semibold text-cream/40 underline-offset-2 transition hover:text-brand-rose hover:underline"
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
            className="tdc-btn-line border-[#d4af87]/40 text-[#f3e6d4] hover:border-brand-rose hover:text-brand-rose"
          >
            Browse offers by country
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
