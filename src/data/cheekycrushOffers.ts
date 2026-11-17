import { getOfferHeroImage } from "@/data/adultOfferImages";

/**
 * CheekyCrush prelander — /offers/cheekycrush
 * Public CTAs use /go/cheekycrush. The tracking URL stays in usaGoDestinations.
 */

export const CHEEKYCRUSH_GO_HREF = "/go/cheekycrush";

export const cheekycrushOffer = {
  name: "CheekyCrush",
  badge: "USA",
  bestFor: "Casual dating",
  category: "Casual dating",
  availability: "United States",
  url: CHEEKYCRUSH_GO_HREF,
  ctaLabel: "Start now!",
  headline: "Finally, dates worth your time.",
  description:
    "CheekyCrush is a playful casual dating site for adults in the USA who want flirty chats and fast connections.",
  highlights: ["Adults 18+", "USA", "Free to start", "Private chats"],
  promo: "Free to start",
} as const;

export const cheekycrushVisuals = {
  hero: getOfferHeroImage("cheekycrush"),
} as const;

export const cheekycrushAges = Array.from({ length: 78 - 18 + 1 }, (_, index) =>
  String(18 + index),
);

export const cheekycrushOrientations = [
  "a man looking for a woman",
  "a woman looking for a man",
  "a man looking for a man",
  "a woman looking for a woman",
] as const;

export const cheekycrushRoles = [
  "Rather not say",
  "Top",
  "Versatile",
  "Bottom",
  "Versatop",
  "Versabottom",
] as const;

export function cheekycrushNeedsRole(orientation: string): boolean {
  return (
    orientation === "a man looking for a man" ||
    orientation === "a woman looking for a woman"
  );
}
