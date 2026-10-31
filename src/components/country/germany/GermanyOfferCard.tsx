"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import TrackedAffiliateLink from "@/components/affiliate/TrackedAffiliateLink";
import { trackAffiliateClick } from "@/lib/analytics";
import { germanyPageVisuals } from "@/data/germanyPageVisuals";
import {
  GERMANY_SPONSORED_LABEL,
  getGermanyReviewHref,
  getGermanyTrackedHref,
  type GermanyOffer,
} from "@/data/germanyOffers";

const offerVisual = (slug: string) =>
  germanyPageVisuals.offers[slug as keyof typeof germanyPageVisuals.offers];

export default function GermanyOfferCard({
  offer,
  featured = false,
}: {
  offer: GermanyOffer;
  featured?: boolean;
}) {
  const visual = offerVisual(offer.slug);
  const reviewHref = getGermanyReviewHref(offer);
  const detailHref = offer.guideHref ?? reviewHref ?? undefined;
  const detailLabel = offer.guideHref
    ? offer.guideLabel ?? "Mehr erfahren"
    : reviewHref
      ? "Read review"
      : undefined;

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-[28px] border border-[#ff2d87]/35 bg-[#141a3d] ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <TrackedAffiliateLink
        href={getGermanyTrackedHref(offer, "card")}
        placement="card"
        country="germany"
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        onClick={() => trackAffiliateClick(offer.name, "card", "germany")}
        className={`group flex flex-1 flex-col text-cream no-underline ${
          featured ? "lg:flex-row" : ""
        }`}
      >
        <div
          className={`relative overflow-hidden ${
            featured
              ? "aspect-[16/11] lg:aspect-auto lg:min-h-[420px] lg:w-[46%]"
              : "aspect-[16/10]"
          }`}
        >
          <Image
            src={visual?.src ?? offer.image}
            alt={visual?.alt ?? offer.imageAlt}
            fill
            sizes={featured ? "(max-width: 1024px) 100vw, 46vw" : "(max-width: 768px) 100vw, 33vw"}
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#141a3d] via-[#141a3d]/10 to-transparent"
            aria-hidden
          />
          <span className="absolute left-3 top-3 rounded-full bg-[#0c1230]/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            18+
          </span>
          {visual?.city ? (
            <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-[#0c1230]/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-cream">
              <MapPin size={11} aria-hidden />
              {visual.city}
            </span>
          ) : null}
        </div>
        <div
          className={`flex flex-1 flex-col px-5 pb-5 pt-4 ${
            featured ? "lg:justify-center lg:px-8 lg:py-8" : ""
          }`}
        >
          {offer.sponsored ? (
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#ff8aa8]">
              {GERMANY_SPONSORED_LABEL} · DE & AT
            </p>
          ) : null}
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#ff2d87]">
            {offer.category}
          </p>
          <h3
            className={`mt-2 font-extrabold tracking-tight ${
              featured ? "text-3xl sm:text-4xl" : "text-2xl"
            }`}
          >
            {offer.name.trim()}
          </h3>
          <p className="mt-3 text-sm leading-6 text-cream/75">{offer.description}</p>
          <ul className="mt-4 space-y-1.5 text-sm leading-6 text-cream/70">
            {offer.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <span className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#ff2d87] px-6 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-white shadow-[0_8px_24px_rgba(255,45,135,0.28)] transition group-hover:brightness-110 sm:w-auto">
            Visit {offer.name}
            <ArrowUpRight size={16} />
            <span className="sr-only"> (opens in a new tab)</span>
          </span>
        </div>
      </TrackedAffiliateLink>
      {detailHref && detailLabel ? (
        <div className="border-t border-[#ff2d87]/20 px-5 py-3">
          <Link
            href={detailHref}
            className="text-xs font-bold uppercase tracking-[0.12em] text-[#ff8aa8] underline decoration-[#ff2d87]/40 underline-offset-4 transition hover:text-white"
          >
            {detailLabel}
          </Link>
        </div>
      ) : null}
    </article>
  );
}
