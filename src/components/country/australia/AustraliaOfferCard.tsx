"use client";

import NightOfferCard from "@/components/country/common/NightOfferCard";
import type { AustraliaOffer } from "@/data/countries/australia";

export default function AustraliaOfferCard({ offer }: { offer: AustraliaOffer }) {
  return (
    <NightOfferCard
      name={offer.name}
      category={offer.category}
      description={offer.description}
      image={offer.image}
      href={offer.href}
      country="australia"
    />
  );
}
