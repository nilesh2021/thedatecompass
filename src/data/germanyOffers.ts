import { getOfferAdultImage } from "@/data/adultOfferImages";

export type GermanyOffer = {
  name: string;
  slug: string;
  category: string;
  featured?: boolean;
  description: string;
  keyFocus: string;
  badge: string;
  mark: string;
  accent: string;
  image: string;
  imageAlt: string;
  href: string;
  tags: string[];
  points: string[];
  buttonText: string;
  country: "Germany";
  /**
   * Raw tracking URL. Deprecated for page CTAs — use href (`/go/slug`).
   * Kept so homepage-01 can keep the previous outbound mapping until switched.
   */
  affiliateLink: string;
  /** When false, the review page is noindex,follow and omitted from the sitemap. */
  reviewReady: boolean;
  /** Paid placement. Render as Anzeige / Sponsored, never as an editorial top pick. */
  sponsored?: boolean;
  /** Placeholder until a verified price is available. Do not invent figures. */
  priceNote: string;
  /** Placeholder until verified privacy features are documented. */
  privacyNote: string;
  /** Leave null until a verified rating exists. */
  rating: number | null;
  /** Optional on-site guide. Used instead of the English review link. */
  guideHref?: string;
  guideLabel?: string;
};

export const GERMANY_PAGE_LAST_UPDATED = {
  label: "24 October 2026",
  iso: "2026-10-24",
};

export const GERMANY_SPONSORED_LABEL = "Anzeige / Sponsored";

export type GermanyClickPlacement = "card" | "table" | "cta";

export const GERMANY_REVIEW_SLUGS: readonly string[] = [
  "dirtydating",
  "fuckfinder",
  "realsexclub",
  "grannyhunter",
  "manfinder",
  "transdate",
  "fetishpartner",
];

export function getGermanyGoHref(slug: string): string {
  return `/go/${slug}`;
}

/** Sponsored offers append ?placement= so /go/ can set aff_sub4. Others keep href. */
export function getGermanyTrackedHref(
  offer: Pick<GermanyOffer, "slug" | "href" | "sponsored">,
  placement: GermanyClickPlacement,
): string {
  if (!offer.sponsored) return offer.href;
  return `${getGermanyGoHref(offer.slug)}?placement=${placement}`;
}

export function getGermanyReviewHref(offer: Pick<GermanyOffer, "slug">): string | null {
  if (!GERMANY_REVIEW_SLUGS.includes(offer.slug)) {
    return null;
  }
  return `/germany/${offer.slug}-review`;
}

/**
 * Affiliate tracking URLs for `/go/[slug]` redirects (not exposed in page HTML).
 *
 * Compared with usaGoDestinations (same path + aff_sub5=SF_006OG000004lmDN):
 * grannyhunter, manfinder, realsexclub, and transdate are identical, so they
 * reuse the USA slugs. If a Germany destination ever diverges, register a
 * separate slug with a `-de` suffix (e.g. grannyhunter-de) instead of
 * overwriting the USA entry.
 */
export const germanyGoDestinations: Record<string, string> = {
  dirtydating: "https://t.aslr1.com/358917/5421?aff_sub5=SF_006OG000004lmDN",
  fuckfinder: "https://t.aslr1.com/358917/7346?aff_sub5=SF_006OG000004lmDN",
  realsexclub: "https://t.aslr1.com/358917/7964?aff_sub5=SF_006OG000004lmDN",
  grannyhunter:
    "https://t.aslr1.com/358917/7570?aff_sub5=SF_006OG000004lmDN",
  manfinder: "https://t.aslr1.com/358917/6488?aff_sub5=SF_006OG000004lmDN",
  transdate: "https://t.aslr1.com/358917/6497?aff_sub5=SF_006OG000004lmDN",
  fetishpartner:
    "https://t.aslr1.com/358917/5055?aff_sub5=SF_006OG000004lmDN",
  // CrakRevenue SOI. Placement is added as aff_sub4 on redirect. Do not set aff_sub here.
  fremdgehen69:
    "https://t.datsk3.com/358917/5282/0?po=6456&aff_sub5=SF_006OG000004lmDN",
};

const PRICE_NOTE = "See provider site";
const PRIVACY_NOTE = "See provider privacy policy";

/**
 * Germany inventory ordered by Offer Master priority.
 * Fremdgehen69 is appended as a paid placement (sponsored: true), not a ranked pick.
 * Its German guide lives at /de/fremdgehen69 (guideHref).
 */
export const germanyOffers: GermanyOffer[] = [
  {
    name: "DirtyDating",
    slug: "dirtydating",
    category: "Casual adult dating",
    featured: true,
    description:
      "Casual dating with an adult edge. Easy to browse and message new people; a popular pick for discreet, fun meetups.",
    keyFocus: "Casual dating with an adult edge",
    badge: "Listed for Germany",
    mark: "D",
    accent: "from-[#E83E9B] via-[#F15BAF] to-[#F58BC5]",
    image: getOfferAdultImage("dirtydating"),
    imageAlt:
      "Bearded man in a dark flat cap looking at the camera, used as the DirtyDating listing image",
    href: getGermanyGoHref("dirtydating"),
    affiliateLink: germanyGoDestinations.dirtydating,
    reviewReady: true,
    tags: ["Casual", "Adults 18+", "Germany"],
    buttonText: "Visit DirtyDating",
    points: [
      "Casual dating with an adult edge",
      "Easy to browse and message new people",
      "Popular pick for discreet, fun meetups",
    ],
    country: "Germany",
    // TODO: Replace with verified DirtyDating pricing when available.
    priceNote: PRICE_NOTE,
    // TODO: Replace with verified DirtyDating privacy features when available.
    privacyNote: PRIVACY_NOTE,
    // TODO: Add a verified DirtyDating rating when available. Do not invent scores.
    rating: null,
  },
  {
    name: "FuckFinder",
    slug: "fuckfinder",
    category: "Casual adult dating",
    description:
      "Casual adult encounters and messaging with fast registration and a niche audience focus. Straightforward browsing for adults 18+.",
    keyFocus: "Casual adult encounters and messaging",
    badge: "Listed for Germany",
    mark: "F",
    accent: "from-[#E83E9B] via-[#C8326D] to-[#8C1D4D]",
    image: getOfferAdultImage("fuckfinder"),
    imageAlt:
      "Woman with long dark hair in a black top against a pink background, used as the FuckFinder listing image",
    href: getGermanyGoHref("fuckfinder"),
    affiliateLink: germanyGoDestinations.fuckfinder,
    reviewReady: true,
    tags: ["Casual", "Adults 18+", "Germany"],
    buttonText: "Visit FuckFinder",
    points: [
      "Casual adult encounters and messaging",
      "Fast registration and niche audience focus",
      "Straightforward browsing for adults 18+",
    ],
    country: "Germany",
    // TODO: Replace with verified FuckFinder pricing when available.
    priceNote: PRICE_NOTE,
    // TODO: Replace with verified FuckFinder privacy features when available.
    privacyNote: PRIVACY_NOTE,
    // TODO: Add a verified FuckFinder rating when available. Do not invent scores.
    rating: null,
  },
  {
    name: "RealSexClub",
    slug: "realsexclub",
    category: "Adult dating & social",
    description:
      "Adult dating and social connections with a large adult member base, direct messaging, and profile tools.",
    keyFocus: "Large adult member base",
    badge: "Listed for Germany",
    mark: "R",
    accent: "from-[#E83E9B] via-[#C8326D] to-[#8C1D4D]",
    image: getOfferAdultImage("realsexclub"),
    imageAlt:
      "Woman with long dark hair in a black top against a pink background, used as the RealSexClub listing image",
    href: getGermanyGoHref("realsexclub"),
    affiliateLink: germanyGoDestinations.realsexclub,
    reviewReady: true,
    tags: ["Adult", "Adults 18+", "Germany"],
    buttonText: "Visit RealSexClub",
    points: [
      "Large adult member base",
      "Built for direct, exciting connections",
      "Solid messaging and profile tools",
    ],
    country: "Germany",
    priceNote: PRICE_NOTE,
    privacyNote: PRIVACY_NOTE,
    rating: null,
  },
  {
    name: "Grannyhunter",
    slug: "grannyhunter",
    category: "Mature dating",
    description:
      "Mature dating focused on age-specific preferences and a straightforward adult dating experience.",
    keyFocus: "Focused on mature dating preferences",
    badge: "Listed for Germany",
    mark: "G",
    accent: "from-[#A34B68] via-[#E83E9B] to-[#F58BC5]",
    image: getOfferAdultImage("grannyhunter"),
    imageAlt:
      "Older woman with short white hair in a black lace top, used as the Grannyhunter listing image",
    href: getGermanyGoHref("grannyhunter"),
    affiliateLink: germanyGoDestinations.grannyhunter,
    reviewReady: true,
    tags: ["Mature", "Adults 18+", "Germany"],
    buttonText: "Visit Grannyhunter",
    points: [
      "Focused on mature dating preferences",
      "Clear age-interest targeting",
      "Straightforward adult dating experience",
    ],
    country: "Germany",
    priceNote: PRICE_NOTE,
    privacyNote: PRIVACY_NOTE,
    rating: null,
  },
  {
    name: "Manfinder",
    slug: "manfinder",
    category: "Gay dating for men",
    description:
      "Gay dating for men looking to meet other men, with dating and social features in one place.",
    keyFocus: "Men looking to meet other men",
    badge: "Listed for Germany",
    mark: "M",
    accent: "from-[#E83E9B] via-[#C026D3] to-[#6366F1]",
    image: getOfferAdultImage("manfinder"),
    imageAlt:
      "Two men in black t-shirts holding hands outdoors, used as the Manfinder listing image",
    href: getGermanyGoHref("manfinder"),
    affiliateLink: germanyGoDestinations.manfinder,
    reviewReady: true,
    tags: ["Gay Dating", "Adults 18+", "Germany"],
    buttonText: "Visit Manfinder",
    points: [
      "Men looking to meet other men",
      "Dating and social features in one place",
      "Simple tools to start chatting fast",
    ],
    country: "Germany",
    priceNote: PRICE_NOTE,
    privacyNote: PRIVACY_NOTE,
    rating: null,
  },
  {
    name: "TransDate",
    slug: "transdate",
    category: "Trans & inclusive dating",
    description:
      "Inclusive dating for transgender connections, with a community-focused experience and private messaging.",
    keyFocus: "Inclusive dating for transgender connections",
    badge: "Listed for Germany",
    mark: "T",
    accent: "from-[#9B3CE8] via-[#E83E9B] to-[#F58BC5]",
    image: getOfferAdultImage("transdate"),
    imageAlt:
      "Woman wearing sunglasses in a car, used as the TransDate listing image",
    href: getGermanyGoHref("transdate"),
    affiliateLink: germanyGoDestinations.transdate,
    reviewReady: true,
    tags: ["Trans", "Adults 18+", "Germany"],
    buttonText: "Visit TransDate",
    points: [
      "Inclusive dating for transgender connections",
      "Respectful community-focused experience",
      "Private messaging for respectful chats",
    ],
    country: "Germany",
    priceNote: PRICE_NOTE,
    privacyNote: PRIVACY_NOTE,
    rating: null,
  },
  {
    name: "FetishPartner",
    slug: "fetishpartner",
    category: "Adult social & niche interests",
    description:
      "Adult social connections for specific interests, with niche community browsing and direct messaging.",
    keyFocus: "Built for specific adult interests",
    badge: "Listed for Germany",
    mark: "F",
    accent: "from-[#6138A8] via-[#9C5CDB] to-[#E83E9B]",
    image: getOfferAdultImage("fetishpartner"),
    imageAlt:
      "Woman posing under neon pink light, used as the FetishPartner listing image",
    href: getGermanyGoHref("fetishpartner"),
    affiliateLink: germanyGoDestinations.fetishpartner,
    reviewReady: true,
    tags: ["Niche", "Adults 18+", "Germany"],
    buttonText: "Visit FetishPartner",
    points: [
      "Built for specific adult interests",
      "Niche community connections",
      "Direct messaging and profile browsing",
    ],
    country: "Germany",
    // TODO: Replace with verified FetishPartner pricing when available.
    priceNote: PRICE_NOTE,
    // TODO: Replace with verified FetishPartner privacy features when available.
    privacyNote: PRIVACY_NOTE,
    // TODO: Add a verified FetishPartner rating when available. Do not invent scores.
    rating: null,
  },
  {
    name: "Fremdgehen69",
    slug: "fremdgehen69",
    category: "Casual dating",
    sponsored: true,
    description:
      "Casual dating platform focused on Germany and Austria; signup is free, see provider site for pricing. Some profiles may be moderated; details are in the provider’s terms.",
    keyFocus: "Casual dating in Germany and Austria",
    badge: GERMANY_SPONSORED_LABEL,
    mark: "69",
    accent: "from-[#E83E9B] via-[#C8326D] to-[#8C1D4D]",
    image: getOfferAdultImage("fremdgehen69"),
    imageAlt:
      "Woman in black lingerie reclining on white bedding, used as the Fremdgehen69 listing image",
    href: getGermanyGoHref("fremdgehen69"),
    affiliateLink: germanyGoDestinations.fremdgehen69,
    reviewReady: false,
    tags: ["Casual", "Adults 18+", "Germany", "Austria"],
    buttonText: "Visit Fremdgehen69",
    points: [
      "Casual dating platform focused on Germany and Austria",
      "Signup is free; see the provider site for pricing",
      "Some profiles may be moderated; see the provider’s terms",
    ],
    country: "Germany",
    priceNote: "Signup is free; see provider site",
    privacyNote: PRIVACY_NOTE,
    rating: null,
    guideHref: "/de/fremdgehen69",
    guideLabel: "Mehr erfahren",
  },
];

export const germanyFaqs = [
  {
    question: "Is adult dating legal in Germany?",
    answer:
      "Adults aged 18 or over may use dating platforms in Germany. Each provider sets its own terms, age checks, and eligibility rules. Confirm those details on the destination site before you register.",
  },
  {
    question: "Are these sites safe and discreet?",
    answer:
      "Safety and privacy tools differ by provider. Review each site’s privacy policy, profile visibility settings, and reporting tools before you create an account. TheDateCompass does not operate these platforms or host member profiles.",
  },
  {
    question: "Are there free options?",
    answer:
      "Signup rules, free features, and paid memberships are set by each provider and can change. TheDateCompass does not publish prices here. Check the destination site for current terms before you join.",
  },
  {
    question: "Which site is best for casual dating?",
    answer:
      "DirtyDating and FuckFinder are listed in the casual adult dating category on this page. Fremdgehen69 is shown in that category as a paid placement labelled Anzeige / Sponsored, for Germany and Austria. This page does not name a winner. Compare the descriptions, then visit the provider site to confirm whether it matches what you want.",
  },
  {
    question: "How do I protect my privacy?",
    answer:
      "Use the privacy and blocking tools on the provider site, avoid sharing sensitive personal or financial details with new contacts, and read the provider’s privacy policy before you sign up.",
  },
  {
    question: "How does TheDateCompass choose which sites to list?",
    answer:
      "We list third-party platforms with a Germany focus by category, publicly described features, and ease of comparison. We may earn a commission from some links. Paid placements are labelled Anzeige / Sponsored. That does not mean every site is right for every visitor.",
  },
];
