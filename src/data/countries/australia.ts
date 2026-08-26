/**
 * Australia country offer configuration.
 *
 * Inventory ordered by Offer Master priority for Australia.
 * SexyFans / WannaHookup omitted — no real affiliate URL exists in project data.
 */

import { getOfferAdultImage } from "@/data/adultOfferImages";

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
    id: "gonaughty",
    name: "GoNaughty",
    category: "Adult dating",
    description:
      "An adult dating option targeting Australian visitors looking for casual and discreet connections.",
    image: getOfferAdultImage("gonaughty"),
    href: "https://t.datsk9.com/358917/8570/0?po=6456&aff_sub5=SF_006OG000004lmDN",
    australiaLinkStatus: "reused_existing",
    australiaAvailabilityVerified: true,
    markedForAustraliaInSource: true,
    sourcedFrom: [],
  },
  {
    id: "realsexclub",
    name: "RealSexClub",
    category: "Adult dating",
    description:
      "An adult social and dating option for people looking for direct connections.",
    image: getOfferAdultImage("realsexclub"),
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
    image: getOfferAdultImage("transdate"),
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
    image: getOfferAdultImage("dirtydating"),
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
    image: getOfferAdultImage("milffinder"),
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
    image: getOfferAdultImage("grannyhunter"),
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
    image: getOfferAdultImage("fetishpartner"),
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
    image: getOfferAdultImage("fuckfinder"),
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
    image: getOfferAdultImage("litlatinz"),
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
    image: getOfferAdultImage("manfinder"),
    href: "https://t.aslr1.com/358917/6488?aff_sub5=SF_006OG000004lmDN",
    australiaLinkStatus: "reused_existing",
    australiaAvailabilityVerified: true,
    markedForAustraliaInSource: false,
    sourcedFrom: ["usa", "germany"],
  },
];
