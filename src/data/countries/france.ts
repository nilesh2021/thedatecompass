/**
 * France country offer configuration.
 *
 * Inventory ordered by Offer Master priority for France.
 */

import { getOfferAdultImage } from "@/data/adultOfferImages";
import { getGoHref } from "@/lib/affiliateUrl";

export type FranceOffer = {
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
  country: "France";
  /**
   * Raw tracking URL. Deprecated for page CTAs — use href (`/go/slug`).
   */
  affiliateLink: string;
  /** When false, the review page is noindex,follow and omitted from the sitemap. */
  reviewReady: boolean;
  /** Placeholder until a verified price is available. Do not invent figures. */
  priceNote: string;
  /** Placeholder until verified privacy features are documented. */
  privacyNote: string;
  /** Leave null until a verified rating exists. */
  rating: number | null;
};

export const FRANCE_PAGE_LAST_UPDATED = {
  label: "October 2026",
  iso: "2026-10-23",
};

export const FRANCE_REVIEW_SLUGS: readonly string[] = [
  "grannyhunter",
  "manfinder",
  "realsexclub",
  "fetishpartner",
];

export function getFranceGoHref(slug: string): string {
  return getGoHref(slug, { country: "france" });
}

export function getFranceReviewHref(offer: Pick<FranceOffer, "slug">): string | null {
  const entry = franceOffers.find((item) => item.slug === offer.slug);
  if (!entry?.reviewReady) return null;
  return `/france/${offer.slug}-review`;
}

/**
 * Affiliate tracking URLs for `/go/[slug]` redirects (not exposed in page HTML).
 *
 * Compared with usaGoDestinations and germanyGoDestinations (same path +
 * aff_sub5=SF_006OG000004lmDN): grannyhunter, manfinder, realsexclub, and
 * fetishpartner are identical, so they reuse those slugs. If a France
 * destination ever diverges, register a separate slug with a `-fr` suffix
 * instead of overwriting the shared entry.
 */
export const franceGoDestinations: Record<string, string> = {
  grannyhunter: "https://t.aslr1.com/358917/7570?aff_sub5=SF_006OG000004lmDN",
  manfinder: "https://t.aslr1.com/358917/6488?aff_sub5=SF_006OG000004lmDN",
  realsexclub: "https://t.aslr1.com/358917/7964?aff_sub5=SF_006OG000004lmDN",
  fetishpartner: "https://t.aslr1.com/358917/5055?aff_sub5=SF_006OG000004lmDN",
};

const PRICE_NOTE = "See provider site";
const PRIVACY_NOTE = "See provider privacy policy";

export const franceOffers: FranceOffer[] = [
  {
    name: "Grannyhunter",
    slug: "grannyhunter",
    category: "Mature dating",
    featured: true,
    description:
      "An adult dating option focused on mature connections and age-specific preferences.",
    keyFocus: "Mature connections and age-specific preferences",
    badge: "Listed for France",
    mark: "G",
    accent: "from-[#A34B68] via-[#E83E9B] to-[#F58BC5]",
    image: getOfferAdultImage("grannyhunter"),
    imageAlt: "Grannyhunter logo – mature dating site in France",
    href: getFranceGoHref("grannyhunter"),
    affiliateLink: franceGoDestinations.grannyhunter,
    reviewReady: false,
    tags: ["Mature", "Adults 18+", "France"],
    buttonText: "Visit Grannyhunter",
    points: [
      "An adult dating option focused on mature connections and age-specific preferences.",
    ],
    country: "France",
    // TODO: Replace with verified Grannyhunter pricing when available.
    priceNote: PRICE_NOTE,
    // TODO: Replace with verified Grannyhunter privacy features when available.
    privacyNote: PRIVACY_NOTE,
    // TODO: Add a verified Grannyhunter rating when available. Do not invent scores.
    // TODO: Set reviewReady true only after this listing has real review content.
    rating: null,
  },
  {
    name: "Manfinder",
    slug: "manfinder",
    category: "Gay Dating",
    description:
      "A dating and social platform for men looking to meet and connect with other men.",
    keyFocus: "Men looking to meet and connect with other men",
    badge: "Listed for France",
    mark: "M",
    accent: "from-[#E83E9B] via-[#C026D3] to-[#6366F1]",
    image: getOfferAdultImage("manfinder"),
    imageAlt: "Manfinder logo – gay dating site in France",
    href: getFranceGoHref("manfinder"),
    affiliateLink: franceGoDestinations.manfinder,
    reviewReady: false,
    tags: ["Gay Dating", "Adults 18+", "France"],
    buttonText: "Visit Manfinder",
    points: [
      "A dating and social platform for men looking to meet and connect with other men.",
    ],
    country: "France",
    // TODO: Replace with verified Manfinder pricing when available.
    priceNote: PRICE_NOTE,
    // TODO: Replace with verified Manfinder privacy features when available.
    privacyNote: PRIVACY_NOTE,
    // TODO: Add a verified Manfinder rating when available. Do not invent scores.
    // TODO: Set reviewReady true only after this listing has real review content.
    rating: null,
  },
  {
    name: "RealSexClub",
    slug: "realsexclub",
    category: "Adult dating",
    description:
      "An adult social and dating option for people looking for direct connections.",
    keyFocus: "Direct adult social and dating connections",
    badge: "Listed for France",
    mark: "R",
    accent: "from-[#E83E9B] via-[#C8326D] to-[#8C1D4D]",
    image: getOfferAdultImage("realsexclub"),
    imageAlt: "RealSexClub logo – adult dating site in France",
    href: getFranceGoHref("realsexclub"),
    affiliateLink: franceGoDestinations.realsexclub,
    reviewReady: false,
    tags: ["Adult", "Adults 18+", "France"],
    buttonText: "Visit RealSexClub",
    points: [
      "An adult social and dating option for people looking for direct connections.",
    ],
    country: "France",
    // TODO: Replace with verified RealSexClub pricing when available.
    priceNote: PRICE_NOTE,
    // TODO: Replace with verified RealSexClub privacy features when available.
    privacyNote: PRIVACY_NOTE,
    // TODO: Add a verified RealSexClub rating when available. Do not invent scores.
    // TODO: Set reviewReady true only after this listing has real review content.
    rating: null,
  },
  {
    name: "FetishPartner",
    slug: "fetishpartner",
    category: "Adult social",
    description:
      "An adult-focused platform for exploring connections around specific interests.",
    keyFocus: "Connections around specific adult interests",
    badge: "Listed for France",
    mark: "F",
    accent: "from-[#6138A8] via-[#9C5CDB] to-[#E83E9B]",
    image: getOfferAdultImage("fetishpartner"),
    imageAlt: "FetishPartner logo – adult dating site in France",
    href: getFranceGoHref("fetishpartner"),
    affiliateLink: franceGoDestinations.fetishpartner,
    reviewReady: false,
    tags: ["Niche", "Adults 18+", "France"],
    buttonText: "Visit FetishPartner",
    points: [
      "An adult-focused platform for exploring connections around specific interests.",
    ],
    country: "France",
    // TODO: Replace with verified FetishPartner pricing when available.
    priceNote: PRICE_NOTE,
    // TODO: Replace with verified FetishPartner privacy features when available.
    privacyNote: PRIVACY_NOTE,
    // TODO: Add a verified FetishPartner rating when available. Do not invent scores.
    // TODO: Set reviewReady true only after this listing has real review content.
    rating: null,
  },
];

export const franceFaqs = [
  {
    question: "Is adult dating legal in France?",
    answer:
      "Adults aged 18 or over may use dating platforms in France. Each provider sets its own terms, age checks, and eligibility rules. Confirm those details on the destination site before you register.",
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
      "RealSexClub is listed in the adult dating category, and FetishPartner is listed for adult social interests. Compare their descriptions, then visit the provider site to confirm whether it matches what you want.",
  },
  {
    question: "How do I protect my privacy?",
    answer:
      "Use the privacy and blocking tools on the provider site, avoid sharing sensitive personal or financial details with new contacts, and read the provider’s privacy policy before you sign up.",
  },
  {
    question: "How does TheDateCompass choose which sites to list?",
    answer:
      "We list third-party platforms with a France focus by category, publicly described features, and ease of comparison. We may earn a commission from some links. That does not mean every site is right for every visitor.",
  },
];
