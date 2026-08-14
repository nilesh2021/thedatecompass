/**
 * United Kingdom country offer configuration.
 *
 * Inventory ordered by Offer Master priority for the UK.
 * SexyFans / WannaHookup omitted — no real affiliate URL exists in project data.
 */

export type UkLinkStatus = "reused_existing" | "needs_verification";

export type UkOffer = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  href: string;
  ukLinkStatus: UkLinkStatus;
  /** True when UK availability has been confirmed for this offer */
  ukAvailabilityVerified: boolean;
  /** True when project data already listed UK/GB on this offer */
  markedForUkInSource: boolean;
  sourcedFrom: Array<"usa" | "germany">;
};

export const ukOffers: UkOffer[] = [
  {
    id: "grannyhunter",
    name: "Grannyhunter",
    category: "Mature dating",
    description:
      "An adult dating option focused on mature connections and age-specific preferences.",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/7570?aff_sub5=SF_006OG000004lmDN",
    ukLinkStatus: "reused_existing",
    ukAvailabilityVerified: true,
    markedForUkInSource: false,
    sourcedFrom: ["usa", "germany"],
  },
  {
    id: "milffinder",
    name: "MilfFinder",
    category: "Mature dating",
    description:
      "An adult dating option for mature singles interested in genuine conversations and chemistry.",
    image:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/4999?aff_sub5=SF_006OG000004lmDN",
    ukLinkStatus: "reused_existing",
    ukAvailabilityVerified: true,
    markedForUkInSource: false,
    sourcedFrom: ["germany"],
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
    ukLinkStatus: "reused_existing",
    ukAvailabilityVerified: true,
    markedForUkInSource: false,
    sourcedFrom: ["usa", "germany"],
  },
  {
    id: "litlatinz",
    name: "LitLatinz",
    category: "Adult dating",
    description:
      "An adult dating option focused on Latino community connections.",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/7410?aff_sub5=SF_006OG000004lmDN",
    ukLinkStatus: "reused_existing",
    ukAvailabilityVerified: true,
    markedForUkInSource: false,
    sourcedFrom: ["usa", "germany"],
  },
  {
    id: "transdate",
    name: "TransDate",
    category: "Trans dating",
    description:
      "A dating option for people interested in transgender and inclusive connections.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/6497?aff_sub5=SF_006OG000004lmDN",
    ukLinkStatus: "reused_existing",
    ukAvailabilityVerified: true,
    markedForUkInSource: false,
    sourcedFrom: ["usa", "germany"],
  },
];
