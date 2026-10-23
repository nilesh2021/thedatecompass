"use client";

import NightOfferCard from "@/components/country/common/NightOfferCard";
import { getAustraliaReviewHref, type AustraliaOffer } from "@/data/countries/australia";

export default function AustraliaOfferCard({ offer }: { offer: AustraliaOffer }) {
  const reviewHref = getAustraliaReviewHref(offer);
  return (
    <NightOfferCard
      name={offer.name}
      category={offer.category}
      description={offer.description}
      image={offer.image}
      imageAlt={offer.imageAlt}
      href={offer.href}
      country="australia"
      detailHref={reviewHref ?? undefined}
      detailLabel={reviewHref ? "Read review" : undefined}
    />
  );
}
