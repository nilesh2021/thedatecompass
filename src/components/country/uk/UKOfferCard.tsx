"use client";

import NightOfferCard from "@/components/country/common/NightOfferCard";
import { getUkReviewHref, type UkOffer } from "@/data/countries/uk";

export default function UKOfferCard({ offer }: { offer: UkOffer }) {
  const reviewHref = getUkReviewHref(offer);
  return (
    <NightOfferCard
      name={offer.name}
      category={offer.category}
      description={offer.description}
      image={offer.image}
      imageAlt={offer.imageAlt}
      href={offer.href}
      country="uk"
      detailHref={reviewHref ?? undefined}
      detailLabel={reviewHref ? "Read review" : undefined}
    />
  );
}
