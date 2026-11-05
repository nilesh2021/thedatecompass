/**
 * Local adult lifestyle portraits used across country shortlists
 * and adult-category offer cards.
 */
const extraPortraitPng =
  "/images/extra/1eqyiSccso7couzchcXqVLjQF8PFkPWvsBwD9ptKVCw9ztaCl92n4L7nhdgjLvk46LfHmeLlhFLsWD3idQzAi1t9afPweJcUW9UlkwZQyQT3-qtwayhtiXo5DKJD_6WpHC6XOr0iBiMZ5aOctCGRWDT69PkJ7LY6hdewU3kp4Ne.png";
const extraPortraitA = "/images/extra/a.jpg";
const extraManfinder = "/images/extra/manfinder-gay-dating.jpg";

export const adultImages = {
  neon: extraPortraitA,
  stairs: extraPortraitA,
  gay: extraManfinder,
  gaybloom:
    "https://images.unsplash.com/photo-1567476783296-fff06012e17a?auto=format&fit=crop&w=900&q=80",
  pridepair:
    "https://images.unsplash.com/photo-1577130661762-1e4944ba63ac?auto=format&fit=crop&w=900&q=80",
  manfinderPortrait:
    "https://images.unsplash.com/photo-1580353588316-395bcff2eb2d?auto=format&fit=crop&w=900&q=80",
  alt: extraPortraitA,
  portraitA: extraPortraitPng,
  portraitB: extraPortraitA,
  portraitC: extraPortraitPng,
  portraitD: extraManfinder,
  portraitE: extraPortraitA,
  portraitF: extraPortraitA,
  portraitG: extraManfinder,
  portraitH: extraPortraitA,
  aiCompanion: "/images/dreamz/companion-1.webp",
} as const;

export const offerAdultImages: Record<string, string> = {
  gonaughty: adultImages.aiCompanion,
  realsexclub: adultImages.portraitA,
  transdate: adultImages.neon,
  dirtydating: adultImages.manfinderPortrait,
  milffinder: adultImages.stairs,
  grannyhunter: adultImages.portraitE,
  fetishpartner: adultImages.alt,
  fuckfinder: adultImages.portraitC,
  litlatinz: adultImages.portraitD,
  manfinder: adultImages.gay,
  cheekycrush: adultImages.portraitB,
  fremdgehen69: adultImages.portraitD,
  naughtycharm: adultImages.portraitG,
  sinparty: adultImages.portraitH,
  gaybloom: adultImages.gaybloom,
  pridepair: adultImages.pridepair,
};

export function getOfferAdultImage(offerKey: string): string {
  return offerAdultImages[offerKey.toLowerCase()] ?? adultImages.neon;
}

export function getAbsoluteOfferImageUrl(
  offerKey: string,
  siteUrl: string,
): string {
  const path = getOfferAdultImage(offerKey);
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return `${siteUrl}${path}`;
}
