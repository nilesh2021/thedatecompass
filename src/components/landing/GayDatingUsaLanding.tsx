"use client";

import Image from "next/image";
import Link from "next/link";
import {
  manFinderOffer,
  manFinderVisuals,
} from "@/data/manFinderOffers";
import ManFinderLogo from "@/components/landing/ManFinderLogo";
import { useTrackedAffiliateUrl } from "@/components/affiliate/TrackedAffiliateLink";
import { trackAffiliateClick } from "@/lib/analytics";
import { usaOffers } from "@/data/usaOffers";
import FixedOfferCta from "./FixedOfferCta";

const OFFER_PATH = "/go/manfinder";
const REL = "sponsored nofollow noopener noreferrer";

const GAY_PAGE_BY_SLUG: Record<string, string> = {
  manfinder: "/usa/manfinder",
  gaybloom: "/usa/gaybloom",
};

const relatedGayOffers = usaOffers.flatMap((offer) => {
  if (!offer.slug || !offer.category.toLowerCase().includes("gay")) return [];
  const href = offer.guideHref ?? GAY_PAGE_BY_SLUG[offer.slug];
  return href ? [{ name: offer.name, href }] : [];
});

function ExploreCta({
  label = "Visit Manfinder",
  placement,
}: {
  label?: string;
  placement: string;
}) {
  const trackedHref = useTrackedAffiliateUrl(OFFER_PATH, placement, "usa");
  return (
    <a
      href={trackedHref}
      target="_blank"
      rel={REL}
      onClick={() => trackAffiliateClick(manFinderOffer.name, placement)}
      className="group inline-flex min-h-[52px] items-center overflow-hidden rounded-full bg-[#c82a5c] pl-7 pr-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_rgba(200,42,92,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0386e] hover:shadow-[0_22px_50px_rgba(200,42,92,0.45)]"
    >
      <span>{label}</span>
      <span className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-base transition-transform duration-300 group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}

const points = [
  {
    number: "01",
    title: "One sponsored offer",
    text: "This page sends visitors to Manfinder only. GayBloom is named below and is not a button on this page.",
  },
  {
    number: "02",
    title: "Profiles and messages",
    text: "The Manfinder listing covers browsing profiles and sending direct messages. The provider decides which details are visible.",
  },
  {
    number: "03",
    title: "Adults 18+ only",
    text: "Prices and paid features are shown on the provider site. This page does not publish a fee.",
  },
];

export default function GayDatingUsaLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0709] pb-24 font-sans text-[#f6f1ee] lg:pb-0">
      <section className="relative">
        <div className="mx-auto grid min-h-[720px] max-w-6xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center px-5 py-16 lg:px-8 lg:py-24">
            <ManFinderLogo size="md" />

            <p className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#c82a5c]/40 bg-[#c82a5c]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#ff6b93]">
              Gay adult dating · USA · Adults 18+
            </p>

            <h1 className="mt-7 max-w-xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] sm:text-6xl lg:text-[4.4rem]">
              Gay adult dating sites
              <span className="mt-2 block font-serif-accent text-4xl font-normal lowercase italic tracking-normal text-[#ff6b93] sm:text-5xl">
                in the USA.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-white/62 sm:text-lg">
              Manfinder is the sponsored gay dating offer on this page for adult
              men in the USA. You can browse profiles and send direct messages
              on the provider site. Prices are shown there, not here.
            </p>

            <div className="mt-10">
              <ExploreCta label="Visit Manfinder" placement="lp_hero" />
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-full">
            <Image
              src={manFinderVisuals.portrait}
              alt="ManFinder gay dating"
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
          {points.map((item) => (
            <article
              key={item.number}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-[10px] font-bold tracking-[0.22em] text-[#ff6b93]">
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
            src={manFinderVisuals.wide}
            alt="ManFinder"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0a0709]/78" />
          <div className="relative mx-auto flex min-h-[480px] max-w-6xl items-center px-5 py-20 lg:px-8">
            <div className="max-w-2xl rounded-3xl border border-white/10 bg-black/35 p-8 backdrop-blur-md sm:p-12">
              <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
                Meet men
                <span className="mt-2 block font-serif-accent text-3xl font-normal lowercase italic tracking-normal text-[#ff6b93] sm:text-4xl">
                  on ManFinder.
                </span>
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-white/60">
                Open Manfinder to review profiles, messaging, and current prices.
                TheDateCompass does not run the platform.
              </p>
              <div className="mt-9">
                <ExploreCta
                  label="Visit Manfinder"
                  placement="lp_end"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-black uppercase tracking-tight">
            Related gay dating offers
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/60">
            These USA listings are in the gay dating category. The buttons on this page go to Manfinder only.
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {relatedGayOffers.map((offer) => (
              <li key={offer.href}>
                <Link
                  href={offer.href}
                  className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-5 text-sm font-semibold text-[#ff6b93] underline-offset-4 hover:underline"
                >
                  {offer.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="px-5 py-8">
        <p className="mx-auto max-w-5xl text-center text-[10px] leading-5 text-white/25">
          Affiliate disclosure: TheDateCompass may earn a commission if you
          visit ManFinder through links on this page. Adults 18+ only.
          Availability, features, and terms are determined by the destination
          site.
        </p>
      </footer>

      <FixedOfferCta
        offer={{ ...manFinderOffer, url: OFFER_PATH }}
        placement="lp_end"
        country="usa"
        ctaLabel="Visit Manfinder →"
      />
    </main>
  );
}
