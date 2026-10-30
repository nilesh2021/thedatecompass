/**
 * Denmark country offer configuration.
 * Affiliate URLs match the existing Germany / EU lineup.
 * Denmark availability is not independently verified.
 */

import { getOfferAdultImage } from "@/data/adultOfferImages";
import { getGoHref } from "@/lib/affiliateUrl";

export type DenmarkOffer = {
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
  country: "Denmark";
  affiliateLink: string;
  reviewReady: boolean;
  priceNote: string;
  privacyNote: string;
  rating: number | null;
  guideHref?: string;
  guideLabel?: string;
};

export const DENMARK_PAGE_LAST_UPDATED = {
  label: "October 2026",
  iso: "2026-10-23",
};

const URLS = {
  realsexclub: "https://t.aslr1.com/358917/7964?aff_sub5=SF_006OG000004lmDN",
  dirtydating: "https://t.aslr1.com/358917/5421?aff_sub5=SF_006OG000004lmDN",
  fuckfinder: "https://t.aslr1.com/358917/7346?aff_sub5=SF_006OG000004lmDN",
  grannyhunter: "https://t.aslr1.com/358917/7570?aff_sub5=SF_006OG000004lmDN",
  manfinder: "https://t.aslr1.com/358917/6488?aff_sub5=SF_006OG000004lmDN",
  transdate: "https://t.aslr1.com/358917/6497?aff_sub5=SF_006OG000004lmDN",
  fetishpartner: "https://t.aslr1.com/358917/5055?aff_sub5=SF_006OG000004lmDN",
} as const;

export const denmarkGoDestinations: Record<string, string> = { ...URLS };

export const DENMARK_REVIEW_SLUGS: readonly string[] = Object.keys(URLS);

export function getDenmarkGoHref(slug: string): string {
  return getGoHref(slug, { country: "denmark" });
}

export function getDenmarkReviewHref(offer: Pick<DenmarkOffer, "slug">): string | null {
  const entry = denmarkOffers.find((item) => item.slug === offer.slug);
  if (!entry?.reviewReady) return null;
  return `/denmark/${offer.slug}-review`;
}

const PRICE_NOTE = "See provider site";
const PRIVACY_NOTE = "See provider privacy policy";

function row(
  slug: keyof typeof URLS,
  name: string,
  category: string,
  points: string[],
  imageAlt: string,
  mark: string,
  extra?: Pick<DenmarkOffer, "guideHref" | "guideLabel" | "featured">,
): DenmarkOffer {
  return {
    name,
    slug,
    category,
    description: points[0],
    keyFocus: points[0],
    badge: "Listed for Denmark",
    mark,
    accent: "from-[#E83E9B] via-[#C8326D] to-[#8C1D4D]",
    image: getOfferAdultImage(slug),
    imageAlt,
    href: getDenmarkGoHref(slug),
    affiliateLink: URLS[slug],
    reviewReady: false,
    tags: [category, "Adults 18+", "Denmark"],
    buttonText: `Visit ${name}`,
    points,
    country: "Denmark",
    // TODO: Replace with verified pricing when available.
    priceNote: PRICE_NOTE,
    // TODO: Replace with verified privacy features when available.
    privacyNote: PRIVACY_NOTE,
    // TODO: Add a verified rating when available. Do not invent scores.
    // TODO: Set reviewReady true only after this listing has real review content.
    rating: null,
    ...extra,
  };
}

export const denmarkOffers: DenmarkOffer[] = [
  row(
    "realsexclub",
    "RealSexClub",
    "Adult dating & social",
    [
      "Adult dating and social listings for direct connections",
      "Messaging and profile tools on a third-party site",
      "A featured pick on this Denmark shortlist",
    ],
    "RealSexClub logo – adult dating site in Denmark",
    "R",
    {
      featured: true,
      guideHref: "/offers/realsexclub-denmark",
      guideLabel: "Read the Denmark guide",
    },
  ),
  row("dirtydating", "DirtyDating", "Casual adult dating", ["Casual dating with an adult edge", "Easy to browse and message new people", "Popular pick for discreet, fun meetups"], "DirtyDating logo – adult dating site in Denmark", "D"),
  row("fuckfinder", "FuckFinder", "Casual adult dating", ["Casual adult encounters and messaging", "Fast registration and niche audience focus", "Straightforward browsing for adults 18+"], "FuckFinder logo – adult dating site in Denmark", "F"),
  row("grannyhunter", "Grannyhunter", "Mature dating", ["Focused on mature dating preferences", "Clear age-interest targeting", "Straightforward adult dating experience"], "Grannyhunter logo – mature dating site in Denmark", "G"),
  row("manfinder", "Manfinder", "Gay dating for men", ["Men looking to meet other men", "Dating and social features in one place", "Simple tools to start chatting fast"], "Manfinder logo – gay dating site in Denmark", "M"),
  row("transdate", "TransDate", "Trans & inclusive dating", ["Inclusive dating for transgender connections", "Respectful community-focused experience", "Private messaging for respectful chats"], "TransDate logo – inclusive dating site in Denmark", "T"),
  row("fetishpartner", "FetishPartner", "Adult social & niche interests", ["Built for specific adult interests", "Niche community connections", "Direct messaging and profile browsing"], "FetishPartner logo – adult dating site in Denmark", "F"),
];

export const denmarkFaqs = [
  {
    question: "Is adult dating legal in Denmark?",
    answer:
      "Adults aged 18 or over may use dating platforms in Denmark. Each provider sets its own terms, age checks, and eligibility rules. Confirm those details on the destination site before you register.",
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
      "DirtyDating and FuckFinder are listed in the casual adult dating category on this page. RealSexClub is the featured adult dating and social listing. Compare their descriptions, then visit the provider site to confirm whether it matches what you want.",
  },
  {
    question: "How do I protect my privacy?",
    answer:
      "Use the privacy and blocking tools on the provider site, avoid sharing sensitive personal or financial details with new contacts, and read the provider’s privacy policy before you sign up.",
  },
  {
    question: "How does TheDateCompass choose which sites to list?",
    answer:
      "We list third-party platforms with a Denmark focus by category, publicly described features, and ease of comparison. We may earn a commission from some links. That does not mean every site is right for every visitor.",
  },
];
