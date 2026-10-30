"use client";

import Image from "next/image";
import {
  GAYBLOOM_USA_OFFER_PATH,
  gayBloomUsaOffer,
  gayBloomUsaPoints,
  gayBloomUsaVisuals,
} from "@/data/gayBloomUsa";
import { useTrackedAffiliateUrl } from "@/components/affiliate/TrackedAffiliateLink";
import { trackAffiliateClick } from "@/lib/analytics";
import FixedOfferCta from "./FixedOfferCta";

const REL = "sponsored nofollow noopener noreferrer";

function GayBloomMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline font-display text-xl font-extrabold uppercase tracking-[0.14em] ${className}`}
      aria-label="GayBloom"
    >
      <span className="bg-gradient-to-r from-cream via-cream to-fog bg-clip-text text-transparent">
        Gay
      </span>
      <span className="bg-gradient-to-r from-[#D45CF1] via-[#F58BC5] to-[#9B3CE8] bg-clip-text text-transparent">
        Bloom
      </span>
    </span>
  );
}

function ExploreCta({
  label = "Join GayBloom",
  placement,
}: {
  label?: string;
  placement: string;
}) {
  const trackedHref = useTrackedAffiliateUrl(
    GAYBLOOM_USA_OFFER_PATH,
    placement,
    "usa"
  );
  return (
    <a
      href={trackedHref}
      target="_blank"
      rel={REL}
      onClick={() => trackAffiliateClick(gayBloomUsaOffer.name, placement)}
      className="group inline-flex min-h-[52px] items-center overflow-hidden rounded-full bg-[#9B3CE8] pl-7 pr-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_rgba(155,60,232,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D45CF1] hover:shadow-[0_22px_50px_rgba(212,92,241,0.45)]"
    >
      <span>{label}</span>
      <span className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-base transition-transform duration-300 group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}

export default function GayBloomUsaLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0709] pb-24 font-sans text-[#f6f1ee] lg:pb-0">
      <section className="relative">
        <div className="mx-auto grid min-h-[720px] max-w-6xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center px-5 py-16 lg:px-8 lg:py-24">
            <GayBloomMark />

            <p className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#9B3CE8]/40 bg-[#9B3CE8]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#F58BC5]">
              Gay dating in the USA · Adults 18+
            </p>

            <h1 className="mt-7 max-w-xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] sm:text-6xl lg:text-[4.4rem]">
              GayBloom
              <span className="mt-2 block font-serif-accent text-4xl font-normal lowercase italic tracking-normal text-[#F58BC5] sm:text-5xl">
                for USA gay dating
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-white/62 sm:text-lg">
              {gayBloomUsaOffer.description} Inclusive adult dating for gay
              singles and communities in the USA.
            </p>

            <div className="mt-10">
              <ExploreCta
                label="Join GayBloom"
                placement="gaybloom_usa_hero"
              />
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-full">
            <Image
              src={gayBloomUsaVisuals.portrait}
              alt="GayBloom gay dating in the USA"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0709] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0a0709] lg:via-[#0a0709]/20 lg:to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {gayBloomUsaPoints.map((item) => (
            <article
              key={item.number}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-[10px] font-bold tracking-[0.22em] text-[#F58BC5]">
                {item.number}
              </p>
              <h2 className="mt-4 text-xl font-black uppercase tracking-tight">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/55">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="relative min-h-[480px]">
          <Image
            src={gayBloomUsaVisuals.wide}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0a0709]/78" />
          <div className="relative mx-auto flex min-h-[480px] max-w-6xl items-center px-5 py-20 lg:px-8">
            <div className="max-w-2xl rounded-3xl border border-white/10 bg-black/35 p-8 backdrop-blur-md sm:p-12">
              <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
                Meet, chat, connect
                <span className="mt-2 block font-serif-accent text-3xl font-normal lowercase italic tracking-normal text-[#F58BC5] sm:text-4xl">
                  on GayBloom.
                </span>
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-white/60">
                One offer for USA visitors looking for inclusive gay dating.
                Open GayBloom to browse profiles and start conversations.
              </p>
              <div className="mt-9">
                <ExploreCta
                  label="Visit GayBloom"
                  placement="gaybloom_usa_footer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-5 py-8">
        <p className="mx-auto max-w-5xl text-center text-[10px] leading-5 text-white/25">
          Affiliate disclosure: TheDateCompass may earn a commission if you
          visit GayBloom through links on this page. Adults 18+ only.
          Availability, features, and terms are determined by the destination
          site.
        </p>
      </footer>

      <FixedOfferCta
        offer={gayBloomUsaOffer}
        placement="gaybloom_usa_fixed_cta"
        ctaLabel="Join GayBloom →"
      />
    </main>
  );
}
