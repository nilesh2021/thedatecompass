/**
 * Editorial Unsplash dating & lifestyle photos — one primary image per offer slug.
 * Cards and country shortlists use {@link getOfferAdultImage}; landings use {@link getOfferVisuals}.
 */

type UnsplashOpts = { w?: number; h?: number; q?: number };

export function unsplashPhoto(photoId: string, opts: UnsplashOpts = {}): string {
  const { w = 900, h, q = 80 } = opts;
  let url = `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${w}&q=${q}`;
  if (h != null) url += `&h=${h}`;
  return url;
}

/** Primary photo per active offer — IDs must not repeat across slugs. */
const OFFER_PHOTO_ID: Record<string, string> = {
  cheekycrush: "photo-1496747611176-843222e1e57c",
  naughtycharm: "photo-1487412727227-d4ba3c91d7a0",
  gaybloom: "photo-1567476783296-fff06012e17a",
  manfinder: "photo-1519085360753-af0119f7cbe7",
  transdate: "photo-1529156069898-49953e39b3ac",
  milffinder: "photo-1573496359142-b8d87734a5a2",
  grannyhunter: "photo-1594744803329-e58b31de8bf5",
  realsexclub: "photo-1534528741775-53994a69daeb",
  dirtydating: "photo-1474558705414-bac4673288b2",
  fuckfinder: "photo-1495474479360-baa99b729893",
  fetishpartner: "photo-1414235077428-338989a2e8c0",
  singleflirt: "photo-1524504388940-b1c1722653e1",
  sinparty: "photo-1531746020798-e6953c6e8e04",
  gonaughty: "photo-1518621736915-611b06952358",
  fremdgehen69: "photo-1465495966091-b86d1c68c461",
  beijosquentes: "photo-1516589178581-6cd7833ae3b2",
};

const DEFAULT_LANDING_ACCENTS = {
  wide: "photo-1488161628813-04466f872be2",
  side: "photo-1580489944761-15a19d654956",
} as const;

/** Layout accent photos — not used as any offer primary card image. */
const OFFER_LANDING_ACCENTS: Record<string, { wide: string; side: string }> = {
  cheekycrush: {
    wide: "photo-1522673607800-1d9837241f65",
    side: "photo-1507003211169-0a1dd7228f2d",
  },
  naughtycharm: {
    wide: "photo-1518192518494-566ffe933e82",
    side: "photo-1544717297-fa95b6ee9643",
  },
  gaybloom: {
    wide: "photo-1506794778202-cad84cf45f1d",
    side: "photo-1492562080023-ab3db95bfbce",
  },
  manfinder: {
    wide: "photo-1463453091185-61582044d556",
    side: "photo-1579650382425-256093056bca",
  },
  transdate: {
    wide: "photo-1522202176988-66273c2fd55f",
    side: "photo-1650550740607-24aa0eff1c4a",
  },
  milffinder: {
    wide: "photo-1544005313-94ddf0286df2",
    side: "photo-1522528612940-595e6e800d8e",
  },
  grannyhunter: {
    wide: "photo-1524504388940-b1c1722653e1",
    side: "photo-1508214751196-bcfd4ca60f91",
  },
  realsexclub: {
    wide: "photo-1529156069898-44073e7cce91",
    side: "photo-1539571696357-5a69c17a67c6",
  },
  dirtydating: {
    wide: "photo-1485178548765-673f6d7d3f16",
    side: "photo-1518192518494-566ffe933e82",
  },
  fuckfinder: {
    wide: "photo-1568590320589-8a16645ec483",
    side: "photo-1503264116251-35a269479413",
  },
  fetishpartner: {
    wide: "photo-1469334031218-ea5d4d3c8c0b",
    side: "photo-1517841905240-472988babdf9",
  },
  singleflirt: {
    wide: "photo-1492562080023-ab3db95bfbce",
    side: "photo-1506794778202-cad84cf45f1d",
  },
  sinparty: {
    wide: "photo-1517841905240-472988babdf9",
    side: "photo-1503264116251-35a269479413",
  },
  gonaughty: {
    wide: "photo-1529332950113-fd7a1c3aa01b",
    side: "photo-1472099645785-5658abf4ff4e",
  },
  fremdgehen69: {
    wide: "photo-1528728329032-2972f65dfb3f",
    side: "photo-1560969184-10fe8719e047",
  },
  beijosquentes: {
    wide: "photo-1522673607800-1d9837241f65",
    side: "photo-1544005313-94ddf0286df2",
  },
};

export type OfferVisualSet = {
  hero: string;
  portrait: string;
  wide: string;
  side: string;
};

export function getOfferVisuals(slug: string): OfferVisualSet {
  const key = slug.toLowerCase();
  const photoId = OFFER_PHOTO_ID[key] ?? OFFER_PHOTO_ID.cheekycrush;
  const accents = OFFER_LANDING_ACCENTS[key] ?? DEFAULT_LANDING_ACCENTS;

  return {
    hero: unsplashPhoto(photoId, { w: 1800 }),
    portrait: unsplashPhoto(photoId, { w: 900, h: 1200 }),
    wide: unsplashPhoto(accents.wide, { w: 1800, h: 900 }),
    side: unsplashPhoto(accents.side, { w: 900, h: 1200 }),
  };
}

export const offerAdultImages: Record<string, string> = Object.fromEntries(
  Object.entries(OFFER_PHOTO_ID).map(([slug, id]) => [
    slug,
    unsplashPhoto(id),
  ]),
);

/** Legacy keys used by homepage hero and a few landings. */
export const adultImages = {
  neon: offerAdultImages.transdate,
  stairs: offerAdultImages.milffinder,
  gay: offerAdultImages.manfinder,
  gaybloom: offerAdultImages.gaybloom,
  manfinderPortrait: offerAdultImages.dirtydating,
  alt: offerAdultImages.fetishpartner,
  portraitA: offerAdultImages.fuckfinder,
  portraitB: offerAdultImages.cheekycrush,
  portraitC: offerAdultImages.realsexclub,
  portraitD: offerAdultImages.singleflirt,
  portraitE: offerAdultImages.grannyhunter,
  portraitF: offerAdultImages.naughtycharm,
  portraitG: offerAdultImages.gonaughty,
  portraitH: offerAdultImages.sinparty,
  /** Legacy homepage tile; keep for alternate homepage layout. */
  aiCompanion: offerAdultImages.gonaughty,
} as const;

export function getOfferAdultImage(offerKey: string): string {
  return offerAdultImages[offerKey.toLowerCase()] ?? offerAdultImages.cheekycrush;
}

export function getOfferHeroImage(offerKey: string): string {
  return getOfferVisuals(offerKey).hero;
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