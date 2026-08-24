/**
 * United Kingdom country offer configuration.
 *
 * Inventory ordered by Offer Master priority for the UK.
 * SexyFans / WannaHookup omitted — no real affiliate URL exists in project data.
 */

import { getOfferAdultImage } from "@/data/adultOfferImages";

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
    image: getOfferAdultImage("grannyhunter"),
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
    image: getOfferAdultImage("milffinder"),
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
    image: getOfferAdultImage("realsexclub"),
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
    image: getOfferAdultImage("litlatinz"),
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
    image: getOfferAdultImage("transdate"),
    href: "https://t.datsk9.com/358917/6497?aff_sub5=SF_006OG000004lmDN",
    ukLinkStatus: "reused_existing",
    ukAvailabilityVerified: true,
    markedForUkInSource: false,
    sourcedFrom: ["usa", "germany"],
  },
];
