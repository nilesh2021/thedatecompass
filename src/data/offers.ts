import { featuredUsaOffers } from "@/data/usaOffers";

/** @deprecated Prefer featuredUsaOffers from @/data/usaOffers */
export const featuredOffers = featuredUsaOffers.map((offer, index) => ({
  id: index + 1,
  name: offer.name,
  category: offer.category,
  country: offer.country ?? "USA",
  rating: offer.rating ?? 4.5,
  image: offer.image,
  href: offer.href,
  featured: true,
}));
