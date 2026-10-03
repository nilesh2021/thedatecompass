"use client";

import Image from "next/image";
import {
  manFinderOffer,
  manFinderVisuals,
} from "@/data/manFinderOffers";
import ManFinderLogo from "@/components/landing/ManFinderLogo";
import { useTrackedAffiliateUrl } from "@/components/affiliate/TrackedAffiliateLink";
import { trackAffiliateClick } from "@/lib/analytics";
import FixedOfferCta from "./FixedOfferCta";

const OFFER_PATH = "/go/manfinder";
const REL = "sponsored nofollow noopener noreferrer";

function ExploreCta({
  label = "Join ManFinder",
  placement,
}: {
  label?: string;
  placement: string;
}) {
  const trackedHref = useTrackedAffiliateUrl(OFFER_PATH);
  return (
    <a
      href={trackedHref}
      target="_blank"
      rel={REL}
      onClick={() => trackAffiliateClick(manFinderOffer.name, placement)}
      className="group inline-flex min-h-[52px] items-center overflow-hidden rounded-full bg-[#c82a5c] pl-7 pr-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_rgba(200,42,92,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0386e]"
    >
      <span>{label}</span>
      <span className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/15 text-base transition-transform duration-300 group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}

const points = [
  {
    number: "01",
    title: "Casual encounters",
    text: "Connect with men looking for casual encounters and real connections.",
  },
  {
    number: "02",
    title: "High-intent users",
    text: "ManFinder is built for people who want to meet men without extra steps.",
  },
  {
    number: "03",
    title: "No-friction experience",
    text: "A smooth path from signup to browsing and messaging on the destination site.",
  },
];

export default function FreeDatingSitesForGayLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-white pb-24 font-sans text-[#161216] lg:pb-0">
      <section className="relative">
        <div className="mx-auto grid min-h-[720px] max-w-6xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center px-5 py-16 lg:px-8 lg:py-24">
            <span className="inline-flex w-fit rounded-full bg-[#161216] px-4 py-2">
              <ManFinderLogo size="md" />
            </span>

            <p className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#c82a5c]/25 bg-[#c82a5c]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#c82a5c]">
              Free dating sites for gay · Adults 18+
            </p>

            <h1 className="mt-7 max-w-xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[#161216] sm:text-6xl lg:text-[4.2rem]">
              Free dating sites
              <span className="mt-2 block font-serif-accent text-4xl font-normal lowercase italic tracking-normal text-[#c82a5c] sm:text-5xl">
                for gay.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#161216]/65 sm:text-lg">
              ManFinder is a well-established gay dating brand focused on
              connecting men seeking casual encounters and real connections.
              Built for high-intent users, the platform offers a smooth,
              no-friction experience that drives strong engagement.
            </p>

            <div className="mt-10">
              <ExploreCta
                label="Join ManFinder"
                placement="free_dating_sites_for_gay_hero"
              />
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden lg:min-h-full lg:rounded-bl-[2.5rem]">
            <Image
              src={manFinderVisuals.portrait}
              alt="ManFinder gay dating"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/10 lg:to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {points.map((item) => (
            <article
              key={item.number}
              className="rounded-3xl border border-[#161216]/10 bg-[#faf7f8] p-6"
            >
              <p className="text-[10px] font-bold tracking-[0.22em] text-[#c82a5c]">
                {item.number}
              </p>
              <h2 className="mt-4 text-xl font-black uppercase tracking-tight text-[#161216]">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#161216]/60">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-8 lg:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem]">
          <div className="relative min-h-[440px]">
            <Image
              src={manFinderVisuals.wide}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-white/82" />
            <div className="relative mx-auto flex min-h-[440px] max-w-6xl items-center px-5 py-16 lg:px-10">
              <div className="max-w-2xl rounded-3xl border border-[#161216]/10 bg-white/90 p-8 shadow-[0_20px_60px_rgba(22,18,22,0.08)] sm:p-12">
                <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#161216] sm:text-5xl">
                  Meet men
                  <span className="mt-2 block font-serif-accent text-3xl font-normal lowercase italic tracking-normal text-[#c82a5c] sm:text-4xl">
                    on ManFinder.
                  </span>
                </h2>
                <p className="mt-6 max-w-lg text-sm leading-7 text-[#161216]/65">
                  One offer for visitors looking for free dating sites for gay
                  men. Open ManFinder to browse profiles and start
                  conversations.
                </p>
                <div className="mt-9">
                  <ExploreCta
                    label="Open ManFinder"
                    placement="free_dating_sites_for_gay_footer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-5 py-8">
        <p className="mx-auto max-w-5xl text-center text-[10px] leading-5 text-[#161216]/40">
          Affiliate disclosure: TheDateCompass may earn a commission if you
          visit ManFinder through links on this page. Adults 18+ only.
          Availability, features, and terms are determined by the destination
          site.
        </p>
      </footer>

      <FixedOfferCta
        offer={{ ...manFinderOffer, url: OFFER_PATH }}
        placement="free_dating_sites_for_gay_fixed_cta"
        ctaLabel="Join ManFinder →"
      />
    </main>
  );
}
