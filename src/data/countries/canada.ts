/**
 * Canada country offer configuration.
 *
 * Standardized core inventory (6 offers). Availability is PENDING VERIFICATION
 * for every offer below — not confirmation that an offer is live in Canada.
 *
 * Source material is copied from existing USA / Germany datasets only.
 */

export type CanadaLinkStatus = "reused_existing" | "needs_verification";

export type CanadaOffer = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  href: string;
  canadaLinkStatus: CanadaLinkStatus;
  /** True when Canada availability has been confirmed for this offer */
  canadaAvailabilityVerified: boolean;
  /** True when project data already listed CA/Canada on this offer */
  markedForCanadaInSource: boolean;
  sourcedFrom: Array<"usa" | "germany" | "platforms">;
};

/**
 * Core 6-offer Canada inventory (pending verification).
 */
export const canadaOffers: CanadaOffer[] = [
  {
    id: "cheekycrush",
    name: "CheekyCrush",
    category: "Casual dating",
    description:
      "A casual adult dating option for people looking to explore new connections.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/10377/0?po=6456&aff_sub5=SF_006OG000004lmDN",
    canadaLinkStatus: "reused_existing",
    canadaAvailabilityVerified: true,
    markedForCanadaInSource: false,
    sourcedFrom: ["usa", "germany"],
  },
  {
    id: "gaybloom",
    name: "GayBloom",
    category: "Gay Dating",
    description:
      "An inclusive adult dating option for gay singles and communities.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/10378/0?po=6456&aff_sub5=SF_006OG000004lmDN",
    canadaLinkStatus: "reused_existing",
    canadaAvailabilityVerified: true,
    markedForCanadaInSource: false,
    sourcedFrom: ["usa", "germany"],
  },
  {
    id: "naughtycharm",
    name: "NaughtyCharm",
    category: "Adult dating",
    description:
      "An adult-focused dating option for people who know what they are looking for.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/10376/0?po=6456&aff_sub5=SF_006OG000004lmDN",
    canadaLinkStatus: "reused_existing",
    canadaAvailabilityVerified: true,
    markedForCanadaInSource: false,
    sourcedFrom: ["usa", "germany"],
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
    canadaLinkStatus: "reused_existing",
    canadaAvailabilityVerified: true,
    markedForCanadaInSource: false,
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
    canadaLinkStatus: "reused_existing",
    canadaAvailabilityVerified: true,
    markedForCanadaInSource: false,
    sourcedFrom: ["usa", "germany"],
  },
  {
    id: "dreamz-ai",
    name: "Dreamz.ai",
    category: "AI",
    description:
      "Explore an AI companion experience designed for personalized conversations and virtual connections.",
    image: "/images/ai-model.webp",
    href: "https://t.vlmai-5.com/358917/10461/0?aff_sub5=SF_006OG000004lmDN",
    canadaLinkStatus: "reused_existing",
    canadaAvailabilityVerified: true,
    markedForCanadaInSource: false,
    sourcedFrom: ["usa", "germany"],
  },
];
