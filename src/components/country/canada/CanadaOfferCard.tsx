"use client";

import NightOfferCard from "@/components/country/common/NightOfferCard";
import { getCanadaReviewHref, type CanadaOffer } from "@/data/countries/canada";

export default function CanadaOfferCard({ offer }: { offer: CanadaOffer }) {
  const reviewHref = getCanadaReviewHref(offer);
  const detailHref = offer.guideHref ?? reviewHref ?? undefined;
  const detailLabel = offer.guideHref
    ? offer.guideLabel ?? "Learn more"
    : reviewHref
      ? "Read review"
      : undefined;
  return (
    <NightOfferCard
      name={offer.name}
      category={offer.category}
      description={offer.description}
      image={offer.image}
      imageAlt={offer.imageAlt}
      href={offer.href}
      country="canada"
      detailHref={detailHref}
      detailLabel={detailLabel}
    />
  );
}
