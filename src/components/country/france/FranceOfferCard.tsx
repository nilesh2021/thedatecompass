"use client";

import NightOfferCard from "@/components/country/common/NightOfferCard";
import { getFranceReviewHref, type FranceOffer } from "@/data/countries/france";

export default function FranceOfferCard({ offer }: { offer: FranceOffer }) {
  const reviewHref = getFranceReviewHref(offer);
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
      country="france"
      detailHref={detailHref}
      detailLabel={detailLabel}
    />
  );
}
