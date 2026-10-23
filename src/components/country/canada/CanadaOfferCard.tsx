"use client";

import NightOfferCard from "@/components/country/common/NightOfferCard";
import { getCanadaReviewHref, type CanadaOffer } from "@/data/countries/canada";

export default function CanadaOfferCard({ offer }: { offer: CanadaOffer }) {
  const reviewHref = getCanadaReviewHref(offer);
  return (
    <NightOfferCard
      name={offer.name}
      category={offer.category}
      description={offer.description}
      image={offer.image}
      imageAlt={offer.imageAlt}
      href={offer.href}
      country="canada"
      detailHref={reviewHref ?? undefined}
      detailLabel={reviewHref ? "Read review" : undefined}
    />
  );
}
