"use client";

import NightOfferCard from "@/components/country/common/NightOfferCard";
import type { FranceOffer } from "@/data/countries/france";

export default function FranceOfferCard({ offer }: { offer: FranceOffer }) {
  return (
    <NightOfferCard
      name={offer.name}
      category={offer.category}
      description={offer.description}
      image={offer.image}
      href={offer.href}
      country="france"
    />
  );
}
