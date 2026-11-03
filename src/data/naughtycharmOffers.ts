/**
 * NaughtyCharm prelander — /offers/naughtycharm
 * Public CTAs use /go/naughtycharm. The tracking URL stays in usaGoDestinations.
 */

export const NAUGHTYCHARM_GO_HREF = "/go/naughtycharm";

export const naughtycharmOffer = {
  name: "NaughtyCharm",
  badge: "USA",
  bestFor: "Casual dating",
  category: "Casual dating",
  availability: "United States",
  url: NAUGHTYCHARM_GO_HREF,
  ctaLabel: "Start now!",
  headline: "Discreet dates, without the wait.",
  description:
    "NaughtyCharm is a casual dating site for adults in the USA who want discreet chats and straightforward connections.",
  highlights: ["Adults 18+", "USA", "Free to start", "Private chats"],
  promo: "Free to start",
} as const;

export const naughtycharmVisuals = {
  hero: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1600&q=80",
} as const;

export const naughtycharmAges = Array.from({ length: 78 - 18 + 1 }, (_, index) =>
  String(18 + index),
);

export const naughtycharmOrientations = [
  "a man looking for a woman",
  "a woman looking for a man",
  "a man looking for a man",
  "a woman looking for a woman",
] as const;

export const naughtycharmRoles = [
  "Rather not say",
  "Top",
  "Versatile",
  "Bottom",
  "Versatop",
  "Versabottom",
] as const;

export function naughtycharmNeedsRole(orientation: string): boolean {
  return (
    orientation === "a man looking for a man" ||
    orientation === "a woman looking for a woman"
  );
}
