/**
 * Australia country offer configuration.
 *
 * Inventory ordered by Offer Master priority for Australia.
 * SexyFans / WannaHookup omitted — no real affiliate URL exists in project data.
 */

export type AustraliaLinkStatus = "reused_existing" | "needs_verification";

export type AustraliaOffer = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  href: string;
  australiaLinkStatus: AustraliaLinkStatus;
  /** True when Australia availability has been confirmed for this offer */
  australiaAvailabilityVerified: boolean;
  /** True when project data already listed AU/Australia on this offer */
  markedForAustraliaInSource: boolean;
  sourcedFrom: Array<"usa" | "germany">;
};

export const australiaOffers: AustraliaOffer[] = [
  {
    id: "realsexclub",
    name: "RealSexClub",
    category: "Adult dating",
    description:
      "An adult social and dating option for people looking for direct connections.",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/7964?aff_sub5=SF_006OG000004lmDN",
    australiaLinkStatus: "reused_existing",
    australiaAvailabilityVerified: true,
    markedForAustraliaInSource: false,
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
    australiaLinkStatus: "reused_existing",
    australiaAvailabilityVerified: true,
    markedForAustraliaInSource: false,
    sourcedFrom: ["usa", "germany"],
  },
  {
    id: "dirtydating",
    name: "DirtyDating",
    category: "Casual dating",
    description:
      "A casual adult dating option for people interested in meeting new connections.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/5421?aff_sub5=SF_006OG000004lmDN",
    australiaLinkStatus: "reused_existing",
    australiaAvailabilityVerified: true,
    markedForAustraliaInSource: false,
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
    australiaLinkStatus: "reused_existing",
    australiaAvailabilityVerified: true,
    markedForAustraliaInSource: false,
    sourcedFrom: ["germany"],
  },
  {
    id: "grannyhunter",
    name: "Grannyhunter",
    category: "Mature dating",
    description:
      "An adult dating option focused on mature connections and age-specific preferences.",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/7570?aff_sub5=SF_006OG000004lmDN",
    australiaLinkStatus: "reused_existing",
    australiaAvailabilityVerified: true,
    markedForAustraliaInSource: false,
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
    australiaLinkStatus: "reused_existing",
    australiaAvailabilityVerified: true,
    markedForAustraliaInSource: false,
    sourcedFrom: ["usa", "germany"],
  },
  {
    id: "fuckfinder",
    name: "FuckFinder",
    category: "Casual dating",
    description:
      "An adult dating option for casual encounters and direct connections.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    href: "https://t.crdtg2.com/358917/7346?aff_sub5=SF_006OG000004lmDN",
    australiaLinkStatus: "reused_existing",
    australiaAvailabilityVerified: true,
    markedForAustraliaInSource: false,
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
    australiaLinkStatus: "reused_existing",
    australiaAvailabilityVerified: true,
    markedForAustraliaInSource: false,
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
    australiaLinkStatus: "reused_existing",
    australiaAvailabilityVerified: true,
    markedForAustraliaInSource: false,
    sourcedFrom: ["usa", "germany"],
  },
];
