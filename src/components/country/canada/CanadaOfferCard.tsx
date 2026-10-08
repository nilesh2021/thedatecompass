"use client";

import NightOfferCard from "@/components/country/common/NightOfferCard";
import type { CanadaOffer } from "@/data/countries/canada";

export default function CanadaOfferCard({ offer }: { offer: CanadaOffer }) {
  return (
    <NightOfferCard
      name={offer.name}
      category={offer.category}
      description={offer.description}
      image={offer.image}
      href={offer.href}
      country="canada"
    />
  );
}
