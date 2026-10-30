"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TrackedAffiliateLink from "@/components/affiliate/TrackedAffiliateLink";
import {
  GERMANY_GEO_NOTE,
  GERMANY_SPONSORED_LABEL,
  germanyOffers,
  getGermanyTrackedHref,
} from "@/data/germanyOffers";
import { trackAffiliateClick } from "@/lib/analytics";

const offer = germanyOffers.find((item) => item.slug === "fremdgehen69");

export default function GermanySponsoredStrip() {
  if (!offer) return null;

  return (
    <section className="border-y border-[#ff2d87]/20 bg-[#141a3d] py-10 font-display text-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-6 lg:grid-cols-[160px_1fr_auto]">
        <div className="relative hidden h-28 overflow-hidden rounded-2xl lg:block">
          <Image
            src={offer.image}
            alt={offer.imageAlt}
            fill
            sizes="160px"
            className="object-cover object-top"
          />
        </div>
        <div>
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#ff8aa8]">
            {GERMANY_SPONSORED_LABEL} · DE & AT · 18+
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">{offer.name}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-cream/70">{offer.description}</p>
          <p className="mt-2 max-w-2xl text-xs leading-5 text-cream/50">{GERMANY_GEO_NOTE}</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
          <TrackedAffiliateLink
            href={getGermanyTrackedHref(offer, "card")}
            placement="card"
            country="germany"
            rel="sponsored nofollow noopener noreferrer"
            target="_blank"
            onClick={() => trackAffiliateClick(offer.name, "card", "germany")}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#ff2d87] px-5 text-xs font-bold uppercase tracking-[0.1em] text-white"
          >
            Visit {offer.name}
            <ArrowRight size={14} aria-hidden />
          </TrackedAffiliateLink>
          {offer.guideHref ? (
            <Link
              href={offer.guideHref}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#ff2d87]/40 px-5 text-xs font-bold uppercase tracking-[0.1em] text-[#ff8aa8]"
            >
              {offer.guideLabel ?? "Mehr erfahren"}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
