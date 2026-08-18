"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Flame } from "lucide-react";

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
  manFinderFeatures,
  manFinderOffer,
  manFinderVisuals,
} from "@/data/manFinderOffers";

const REL = "sponsored nofollow noopener noreferrer";

export default function ManFinderLandingV2() {
  const [affiliateUrl, setAffiliateUrl] = useState<string>(
    manFinderOffer.url
  );

  useEffect(() => {
    setAffiliateUrl(
      getTrackedAffiliateUrl(manFinderOffer.url)
    );
  }, []);

  const handleClick = (placement: string) => {
    trackAffiliateClick(
      manFinderOffer.name,
      placement
    );
  };

  return (
    <>
      <Header />

      <main className="bg-[#080608] text-[#f5f0ed]">
        <NoiseOverlay />

        {/* HERO */}
        <section className="relative min-h-[680px] overflow-hidden">
          <Image
            src={manFinderVisuals.hero}
            alt="ManFinder gay dating"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#080608] via-[#080608]/75 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080608] via-transparent to-black/30" />

          <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-24 lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-6 flex items-center gap-3">
                <ManFinderLogo size="lg" />

                <span className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur">
                  <Flame size={11} />
                  18+
                </span>
              </div>

              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d93468]">
                Gay dating · Men seeking men
              </p>

              <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
                Meet men.
                <br />
                Make a{" "}
                <span className="font-serif-accent font-normal lowercase italic text-[#c82a5c]">
                  connection.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                {manFinderOffer.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {manFinderOffer.highlights
                  .slice(0, 3)
                  .map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 bg-black/30 px-3 py-2 text-[10px] uppercase tracking-wider text-white/60"
                    >
                      {item}
                    </span>
                  ))}
              </div>

              <div className="mt-8">
                <a
                  href={affiliateUrl}
                  target="_blank"
                  rel={REL}
                  onClick={() => handleClick("v2-hero")}
                  className="group inline-flex min-h-[56px] items-center overflow-hidden rounded-lg bg-[#941940] shadow-[0_15px_45px_rgba(148,25,64,.35)] transition hover:-translate-y-1 hover:bg-[#ad1f4d]"
                >
                  <span className="px-7 text-sm font-bold uppercase tracking-[0.14em]">
                    Explore ManFinder
                  </span>

                  <span className="flex h-14 w-14 items-center justify-center border-l border-white/10">
                    <ArrowUpRight
                      size={19}
                      className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>
              </div>

              <p className="mt-4 text-[10px] text-white/30">
                Adults 18+ · Affiliate link · Availability may vary.
              </p>
            </div>
          </div>
        </section>

        {/* QUICK BENEFITS */}
        <section className="border-y border-white/10 bg-[#0d090c]">
          <div className="mx-auto grid max-w-7xl md:grid-cols-3">
            {[
              "Gay dating focused",
              "Connect with men",
              "Explore profiles & chat",
            ].map((item, index) => (
              <div
                key={item}
                className="border-b border-white/10 px-6 py-6 last:border-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <span className="font-serif-accent text-2xl italic text-[#a91d4b]">
                  0{index + 1}
                </span>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-white/80">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* VISUAL SHOWCASE */}
        <section className="px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d93468]">
                  The experience
                </p>

                <h2 className="mt-2 text-3xl font-black uppercase sm:text-4xl">
                  Inside{" "}
                  <span className="font-serif-accent font-normal lowercase italic text-[#c82a5c]">
                    ManFinder
                  </span>
                </h2>
              </div>

              <p className="hidden max-w-xs text-xs leading-5 text-white/40 sm:block">
                Explore the platform before deciding whether it is
                right for you.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {manFinderExploreCards
                .slice(0, 4)
                .map((card) => (
                  <div
                    key={card.title}
                    className="group relative aspect-[4/5] overflow-hidden border border-white/10"
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                      style={{
                        objectPosition: card.objectPosition,
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                    <div className="absolute bottom-0 p-4">
                      <h3 className="text-xs font-bold uppercase tracking-[0.1em]">
                        {card.title}
                      </h3>

                      <p className="mt-1 text-[10px] leading-4 text-white/50">
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* FEATURES + IMAGE */}
        <section className="border-y border-white/10 bg-[#0d090c] px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
              <Image
                src={manFinderVisuals.side}
                alt="ManFinder"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d93468]">
                Why explore it
              </p>

              <h2 className="mt-3 text-4xl font-black uppercase leading-none sm:text-5xl">
                Built for{" "}
                <span className="font-serif-accent font-normal lowercase italic text-[#c82a5c]">
                  connection
                </span>
              </h2>

              <div className="mt-7 space-y-4">
                {manFinderFeatures
                  .slice(0, 4)
                  .map((feature) => (
                    <div
                      key={feature.title}
                      className="flex gap-3 border-b border-white/10 pb-4"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#941940]/20 text-[#d93468]">
                        <Check size={13} />
                      </span>

                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider">
                          {feature.title}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-white/40">
                          {feature.text}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              <a
                href={affiliateUrl}
                target="_blank"
                rel={REL}
                onClick={() => handleClick("v2-features")}
                className="mt-8 inline-flex items-center gap-3 border border-[#a91d4b] bg-[#941940] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] transition hover:bg-[#ad1f4d]"
              >
                Visit ManFinder
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden">
          <div className="relative min-h-[430px]">
            <Image
              src={manFinderVisuals.wide}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />

            <div className="relative mx-auto flex min-h-[430px] max-w-7xl items-center px-5 lg:px-8">
              <div className="max-w-lg">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d93468]">
                  Ready?
                </p>

                <h2 className="mt-3 text-4xl font-black uppercase leading-none sm:text-5xl">
                  See what happens{" "}
                  <span className="font-serif-accent font-normal lowercase italic text-[#c82a5c]">
                    next.
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-6 text-white/50">
                  Visit ManFinder to explore the current platform,
                  profiles, messaging options, and terms.
                </p>

                <a
                  href={affiliateUrl}
                  target="_blank"
                  rel={REL}
                  onClick={() => handleClick("v2-final")}
                  className="mt-7 inline-flex items-center gap-4 bg-[#941940] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] transition hover:bg-[#ad1f4d]"
                >
                  Visit ManFinder
                  <ArrowUpRight size={17} />
                </a>

                <p className="mt-4 text-[10px] text-white/30">
                  Affiliate link · Adults 18+
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COUNTRY LINKS */}
        <BrowseByCountrySection
          links={getCountryBrowseLinks("gay")}
          title="Gay dating listings by country"
          description="Compare gay dating offers across country-specific pages."
        />
      </main>

      <Footer />
    </>
  );
}