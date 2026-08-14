/**
 * France country offer configuration.
 *
 * Inventory ordered by Offer Master priority for France.
 */

export type FranceLinkStatus = "reused_existing" | "needs_verification";

export type FranceOffer = {
  /** Stable id for future toggles / filtering */
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  /**
   * Outbound link for the France page.
   * - A real URL means it was copied from an existing USA/Germany affiliate link.
   * - "#" means no usable existing link was taken / still needs a France-specific URL.
   */
  href: string;
  /** Whether `href` is a reused project link or still a placeholder */
  franceLinkStatus: FranceLinkStatus;
  /** True when France availability has been confirmed for this offer */
  franceAvailabilityVerified: boolean;
  /** Which existing country dataset(s) this row was drawn from */
  sourcedFrom: Array<"usa" | "germany">;
};

export const franceOffers: FranceOffer[] = [
  {
    id: "grannyhunter",
    name: "Grannyhunter",
    category: "Mature dating",
    description:
      "An adult dating option focused on mature connections and age-specific preferences.",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/7570?aff_sub5=SF_006OG000004lmDN",
    franceLinkStatus: "reused_existing",
    franceAvailabilityVerified: true,
    sourcedFrom: ["usa", "germany"],
  },
  {
    id: "manfinder",
    name: "Manfinder",
    category: "Gay Dating",
    description:
      "A dating and social platform for men looking to meet and connect with other men.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/6488?aff_sub5=SF_006OG000004lmDN",
    franceLinkStatus: "reused_existing",
    franceAvailabilityVerified: true,
    sourcedFrom: ["usa", "germany"],
  },
  {
    id: "realsexclub",
    name: "RealSexClub",
    category: "Adult dating",
    description:
      "An adult social and dating option for people looking for direct connections.",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/7964?aff_sub5=SF_006OG000004lmDN",
    franceLinkStatus: "reused_existing",
    franceAvailabilityVerified: true,
    sourcedFrom: ["usa", "germany"],
  },
  {
    id: "fetishpartner",
    name: "FetishPartner",
    category: "Adult social",
    description:
      "An adult-focused platform for exploring connections around specific interests.",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/5055?aff_sub5=SF_006OG000004lmDN",
    franceLinkStatus: "reused_existing",
    franceAvailabilityVerified: true,
    sourcedFrom: ["usa", "germany"],
  },
];

/** Convenience: offers whose href is still a placeholder */
export const franceOffersNeedingLink = franceOffers.filter(
  (offer) => offer.href === "#" || offer.franceLinkStatus === "needs_verification"
);

/** Convenience: offers still pending France availability confirmation */
export const franceOffersPendingAvailability = franceOffers.filter(
  (offer) => offer.franceAvailabilityVerified === false
);
