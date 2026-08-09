"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Offer = {
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
};
type USAOffersProps = {
  offers: Offer[];
};

const filters = [
  "All",
  "Casual",
  "Mature",
  "Gay Dating",
  "AI",
];

const categoryMap: Record<string, string[]> = {
  All: [],
  Casual: ["Casual dating"],
  Mature: ["Mature dating"],
  "Gay Dating": ["Gay Dating"],
  AI: ["AI"],
};

const hashToFilter: Record<string, string> = {
  "offers-casual": "Casual",
  "offers-mature": "Mature",
  "offers-gay": "Gay Dating",
  "offers-ai": "AI",
  offers: "All",
};

export default function USAOffers({ offers }: USAOffersProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const featuredOffers = offers.filter((offer) => offer.featured);

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      const nextFilter = hashToFilter[hash];
      if (nextFilter) {
        setActiveFilter(nextFilter);
        setShowAll(false);
      }
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const filteredOffers =
    activeFilter === "All"
      ? offers
      : offers.filter((offer) =>
          categoryMap[activeFilter].includes(offer.category)
        );

  const visibleOffers = showAll
    ? filteredOffers
    : filteredOffers.slice(0, 6);

  return (
    <section id="offers" className="relative px-6 py-20 sm:px-8 lg:px-12">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(145deg,#0f0a0e,#1f1220_60%,#12101a)]" />

      <div className="absolute -left-20 top-1/3 -z-10 h-64 w-64 rounded-full bg-rose-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl">

        {/* ============================= */}
        {/* MAIN HEADING */}
        {/* ============================= */}

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-300/80">
              USA dating options
            </p>

            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              Find your kind of{" "}
              <span className="italic text-rose-200/80">
                connection.
              </span>
            </h2>
          </div>

          <p className="max-w-md leading-relaxed text-white/50">
            Compare adult dating and social platforms available to eligible
            visitors in the USA.
          </p>
        </div>

        {/* ============================= */}
        

        {/* ============================= */}
        {/* FEATURED OFFERS */}
        {/* ============================= */}

        {featuredOffers.length > 0 && (
          <div className="mt-16">

            <div className="flex items-end justify-between gap-4">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-300/80">
                Featured picks
                </p>

                <h3 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                A few options to get started.
                </h3>
              </div>

              <span className="hidden text-sm text-white/35 sm:block">
                {featuredOffers.length} featured platforms
              </span>

            </div>

            <div className="mt-7 grid gap-6 md:grid-cols-3">

              {featuredOffers.map((offer, index) => (
                <article
                  key={offer.name}
                  className="group overflow-hidden rounded-3xl border border-[#E83E9B]/25 bg-[#E83E9B]/[0.06] p-4 shadow-xl shadow-[#E83E9B]/5 transition duration-300 hover:-translate-y-2 hover:border-[#E83E9B]/50"
                >

                  {/* Image */}
                  <div className="relative h-44 overflow-hidden rounded-2xl bg-[#1a1018]">

                    <Image
                      src={offer.image}
                      alt={`${offer.name} dating option`}
                      fill
                      priority={index < 3}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    {/* Featured badge */}
                    <span className="absolute left-4 top-4 rounded-full bg-[#E83E9B] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-[#E83E9B]/30">
                      Featured
                    </span>

                    {/* Offer name */}
                    <div className="absolute bottom-4 left-4 right-4">

                    <h4 className="font-serif text-2xl font-semibold text-white">
                        {offer.name}
                      </h4>

                      <p className="mt-1 text-sm text-white/70">
                        {offer.category}
                      </p>

                    </div>

                  </div>

                  
{/* Tags */}
<div className="mt-5 flex flex-wrap gap-2 px-1">
{offer.tags.slice(0, 2).map((tag) => (
    <span
      key={tag}
      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-white/50"
    >
      {tag}
    </span>
  ))}
</div>
                  {/* CTA */}
                  <a
  href={offer.href}
  target="_blank"
  rel="sponsored nofollow noopener noreferrer"
  className="mt-5 block rounded-full bg-[#E83E9B] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#F58BC5] hover:text-[#080808]"
>
  View option
</a>

                </article>
              ))}

            </div>
          </div>
        )}

        {/* ============================= */}
        {/* ALL OFFERS */}
        {/* ============================= */}

        <div className="mt-20">

          <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-300/80">
  All USA options
</p>

<h3 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
  Find the right platform for you.
</h3>
          </div>

          {/* ============================= */}
          {/* FILTERS */}
          {/* ============================= */}

          <div
            role="tablist"
            aria-label="Filter USA dating offers"
            className="mt-8 inline-flex max-w-full gap-1 overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-1.5 scrollbar-hide"
          >
            {filters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setActiveFilter(filter);
                    setShowAll(false);
                    const filterHashes: Record<string, string> = {
                      All: "offers",
                      Casual: "offers-casual",
                      Mature: "offers-mature",
                      "Gay Dating": "offers-gay",
                      AI: "offers-ai",
                    };

                    const hash = filterHashes[filter];
                    window.history.replaceState(null, "", `#${hash}`);
                  }}
                  className={`shrink-0 rounded-xl px-4 py-2.5 text-sm font-bold tracking-wide transition ${
                    active
                      ? "bg-[#E83E9B] text-white shadow-[0_8px_24px_rgba(232,62,155,0.45)] ring-2 ring-white/25"
                      : "bg-transparent text-white/45 hover:bg-white/[0.06] hover:text-white/85"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-sm text-white/50">
            Viewing{" "}
            <span className="font-semibold text-[#F58BC5]">{activeFilter}</span>
            {" · "}
            <span className="font-semibold text-white/70">
              {visibleOffers.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-white/70">
              {filteredOffers.length}
            </span>{" "}
            {filteredOffers.length === 1 ? "option" : "options"}
          </p>

          {/* ============================= */}
          {/* OFFER CARDS */}
          {/* ============================= */}

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {visibleOffers.map((offer) => (

              <article
                key={offer.name}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/30 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.08]"
              >

                {/* Image */}
                <div className="relative h-52 overflow-hidden rounded-2xl bg-[#1a1018]">

                  <Image
                    src={offer.image}
                    alt={`${offer.name} dating option`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/35 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5">

                    <span className="inline-block rounded-full border border-white/25 bg-[#E83E9B]/85 px-3.5 py-1 text-xs font-bold tracking-wide text-white backdrop-blur-sm">
                      {offer.badge}
                    </span>

                    <div className="mt-6 flex items-end justify-between">

                      <div>

                        <h3 className="font-serif text-3xl font-semibold tracking-tight text-white">
                          {offer.name}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-white/75">
                          {offer.category}
                        </p>

                      </div>

                      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#E83E9B] text-lg text-white shadow-lg shadow-[#E83E9B]/30 transition group-hover:scale-110">
                        ↗
                      </span>

                    </div>

                  </div>

                </div>

         

                {/* Tags */}
<div className="mt-5 flex flex-wrap gap-2">
  {offer.tags.slice(0, 2).map((tag) => (
    <span
      key={tag}
      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-white/50"
    >
      {tag}
    </span>
  ))}
</div>

{/* Description */}
<p className="mt-4 min-h-[3rem] text-sm leading-relaxed text-white/55">
  {offer.description}
</p>


                {/* CTA */}
                <a
                  href={offer.href}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="mt-5 block rounded-full bg-[#E83E9B] px-5 py-3.5 text-center text-sm font-bold text-white transition hover:bg-[#F58BC5] hover:text-[#080808]"
                >
                  Visit site
                </a>

              </article>

            ))}

          </div>
          {filteredOffers.length > 6 && (
  <div className="mt-10 flex justify-center">
    <button
      type="button"
      onClick={() => setShowAll((prev) => !prev)}
      className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-bold text-white/80 transition hover:border-[#E83E9B]/60 hover:bg-[#E83E9B]/10 hover:text-white"
    >
      {showAll ? "Show fewer options" : "Show more options"}

      <span
        className={`text-lg transition-transform duration-300 ${
          showAll ? "rotate-180" : ""
        }`}
      >
        ↓
      </span>
    </button>
  </div>
)}
        </div>

        {/* ============================= */}
        {/* DISCLAIMER */}
        {/* ============================= */}

        <p className="mt-10 text-center text-xs text-white/30">
          TheDateCompass is an independent comparison and discovery site. We
          do not own or operate the third-party platforms listed here.
        </p>

      </div>
    </section>
  );
}