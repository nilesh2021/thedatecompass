/**
 * United Kingdom country offer configuration.
 * Inventory ordered by Offer Master priority for the UK.
 * SexyFans / WannaHookup omitted — no real affiliate URL exists in project data.
 */

import { getOfferAdultImage } from "@/data/adultOfferImages";

export type UkOffer = {
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
  country: "UK";
  affiliateLink: string;
  reviewReady: boolean;
  priceNote: string;
  privacyNote: string;
  rating: number | null;
};

export const UK_PAGE_LAST_UPDATED = {
  label: "October 2026",
  iso: "2026-10-23",
};

const URLS = {
  grannyhunter: "https://t.aslr1.com/358917/7570?aff_sub5=SF_006OG000004lmDN",
  milffinder: "https://t.aslr1.com/358917/4999?aff_sub5=SF_006OG000004lmDN",
  realsexclub: "https://t.aslr1.com/358917/7964?aff_sub5=SF_006OG000004lmDN",
  litlatinz: "https://t.aslr1.com/358917/7410?aff_sub5=SF_006OG000004lmDN",
  transdate: "https://t.aslr1.com/358917/6497?aff_sub5=SF_006OG000004lmDN",
} as const;

export const ukGoDestinations: Record<string, string> = { ...URLS };

export const UK_REVIEW_SLUGS: readonly string[] = Object.keys(URLS);

export function getUkGoHref(slug: string): string {
  return `/go/${slug}`;
}

export function getUkReviewHref(offer: Pick<UkOffer, "slug">): string | null {
  if (!UK_REVIEW_SLUGS.includes(offer.slug)) return null;
  return `/uk/${offer.slug}-review`;
}

const PRICE_NOTE = "See provider site";
const PRIVACY_NOTE = "See provider privacy policy";

function row(
  slug: keyof typeof URLS,
  name: string,
  category: string,
  description: string,
  keyFocus: string,
  imageAlt: string,
  mark: string,
): UkOffer {
  return {
    name,
    slug,
    category,
    description,
    keyFocus,
    badge: "Listed for the UK",
    mark,
    accent: "from-[#E83E9B] via-[#C8326D] to-[#8C1D4D]",
    image: getOfferAdultImage(slug),
    imageAlt,
    href: getUkGoHref(slug),
    affiliateLink: URLS[slug],
    reviewReady: false,
    tags: [category, "Adults 18+", "UK"],
    buttonText: `Visit ${name}`,
    points: [description],
    country: "UK",
    // TODO: Replace with verified pricing when available.
    priceNote: PRICE_NOTE,
    // TODO: Replace with verified privacy features when available.
    privacyNote: PRIVACY_NOTE,
    // TODO: Add a verified rating when available. Do not invent scores.
    // TODO: Set reviewReady true only after this listing has real review content.
    rating: null,
  };
}

export const ukOffers: UkOffer[] = [
  row("grannyhunter", "Grannyhunter", "Mature dating", "An adult dating option focused on mature connections and age-specific preferences.", "Mature connections and age-specific preferences", "Grannyhunter logo – mature dating site in the UK", "G"),
  row("milffinder", "MilfFinder", "Mature dating", "An adult dating option for mature singles interested in genuine conversations and chemistry.", "Mature singles and genuine conversations", "MilfFinder logo – mature dating site in the UK", "M"),
  row("realsexclub", "RealSexClub", "Adult dating", "An adult social and dating option for people looking for direct connections.", "Direct adult social and dating connections", "RealSexClub logo – adult dating site in the UK", "R"),
  row("litlatinz", "LitLatinz", "Adult dating", "An adult dating option focused on Latino community connections.", "Latino community connections", "LitLatinz logo – adult dating site in the UK", "L"),
  row("transdate", "TransDate", "Trans dating", "A dating option for people interested in transgender and inclusive connections.", "Transgender and inclusive connections", "TransDate logo – inclusive dating site in the UK", "T"),
];

ukOffers[0].featured = true;

export const ukFaqs = [
  {
    question: "Is adult dating legal in the UK?",
    answer:
      "Adults aged 18 or over may use dating platforms in the UK. Each provider sets its own terms, age checks, and eligibility rules. Confirm those details on the destination site before you register.",
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
      "RealSexClub and LitLatinz are listed in the adult dating category on this page. Compare their descriptions, then visit the provider site to confirm whether it matches what you want.",
  },
  {
    question: "How do I protect my privacy?",
    answer:
      "Use the privacy and blocking tools on the provider site, avoid sharing sensitive personal or financial details with new contacts, and read the provider’s privacy policy before you sign up.",
  },
  {
    question: "How does TheDateCompass choose which sites to list?",
    answer:
      "We list third-party platforms with a UK focus by category, publicly described features, and ease of comparison. We may earn a commission from some links. That does not mean every site is right for every visitor.",
  },
];
