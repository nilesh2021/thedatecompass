import { getOfferAdultImage } from "@/data/adultOfferImages";

export type UsaOffer = {
  name: string;
  slug?: string;
  category: string;
  featured?: boolean;
  description: string;
  keyFocus?: string;
  badge: string;
  mark: string;
  accent: string;
  image: string;
  href: string;
  tags: string[];
  rating?: number;
  country?: string;
};

export const USA_PAGE_LAST_UPDATED = {
  label: "September 2026",
  iso: "2026-09-26",
};

/** Add a slug here once `/usa/[slug]-review` exists to enable review links. */
export const USA_REVIEW_SLUGS: readonly string[] = [
  "cheekycrush",
  "gaybloom",
  "grannyhunter",
  "litlatinz",
  "manfinder",
  "realsexclub",
  "transdate",
  "milffinder",
  "pridepair",
];

export function getUsaReviewHref(offer: UsaOffer): string | null {
  if (!offer.slug || !USA_REVIEW_SLUGS.includes(offer.slug)) {
    return null;
  }
  return `/usa/${offer.slug}-review`;
}

/** Affiliate tracking URLs for `/go/[slug]` redirects (not exposed in page HTML). */
export const usaGoDestinations: Record<string, string> = {
  grannyhunter:
    "https://t.aslr1.com/358917/7570?aff_sub5=SF_006OG000004lmDN",
  litlatinz: "https://t.aslr1.com/358917/7410?aff_sub5=SF_006OG000004lmDN",
  manfinder: "https://t.aslr1.com/358917/6488?aff_sub5=SF_006OG000004lmDN",
  realsexclub: "https://t.aslr1.com/358917/7964?aff_sub5=SF_006OG000004lmDN",
  transdate: "https://t.aslr1.com/358917/6497?aff_sub5=SF_006OG000004lmDN",
  milffinder: "https://t.aslr1.com/358917/4999?aff_sub5=SF_006OG000004lmDN",
  cheekycrush:
    "https://t.aslr1.com/358917/10377/0?po=6456&aff_sub5=SF_006OG000004lmDN",
  gaybloom:
    "https://t.aslr1.com/358917/10378/0?po=6456&aff_sub5=SF_006OG000004lmDN",
  pridepair:
    "https://t.aslr1.com/358917/10379/0?po=6456&aff_sub5=SF_006OG000004lmDN",
};

export function getUsaGoHref(slug: string): string {
  return `/go/${slug}`;
}

/**
 * USA inventory ordered by Offer Master priority.
 * SexyFans / WannaHookup omitted — no real affiliate URL exists in project data.
 */
export const usaOffers: UsaOffer[] = [
  {
    name: "Grannyhunter",
    slug: "grannyhunter",
    category: "Mature dating",
    description:
      "Mature dating focused on age-specific preferences and connections with experienced adults.",
    keyFocus: "Mature connections and age-specific preferences",
    badge: "USA available",
    mark: "G",
    accent: "from-[#A34B68] via-[#E83E9B] to-[#F58BC5]",
    image: getOfferAdultImage("grannyhunter"),
    href: getUsaGoHref("grannyhunter"),
    tags: ["Mature", "Adults 18+", "USA"],
    rating: 4.5,
    country: "USA",
  },
  {
    name: "LitLatinz",
    slug: "litlatinz",
    category: "Adult dating",
    featured: true,
    description:
      "Adult dating with a focus on Latino community connections in the United States.",
    keyFocus: "Latino community connections in the US",
    badge: "USA available",
    mark: "L",
    accent: "from-[#6138A8] via-[#9C5CDB] to-[#E83E9B]",
    image: getOfferAdultImage("litlatinz"),
    href: getUsaGoHref("litlatinz"),
    tags: ["Adult", "Adults 18+", "USA"],
    rating: 4.7,
    country: "USA",
  },
  {
    name: "Manfinder",
    slug: "manfinder",
    category: "Gay Dating",
    featured: true,
    description:
      "A well-established gay dating brand focused on connecting men seeking casual encounters and real connections.",
    keyFocus: "Gay men seeking casual or deeper connections",
    badge: "USA available",
    mark: "M",
    accent: "from-[#E83E9B] via-[#C026D3] to-[#6366F1]",
    image: getOfferAdultImage("manfinder"),
    href: getUsaGoHref("manfinder"),
    tags: ["Gay Dating", "USA"],
    rating: 4.8,
    country: "USA",
  },
  {
    name: "RealSexClub",
    slug: "realsexclub",
    category: "Adult dating",
    description:
      "Adult social and dating for people looking for direct, open-minded connections.",
    keyFocus: "Direct adult social connections",
    badge: "USA available",
    mark: "R",
    accent: "from-[#E83E9B] via-[#C8326D] to-[#8C1D4D]",
    image: getOfferAdultImage("realsexclub"),
    href: getUsaGoHref("realsexclub"),
    tags: ["Adult", "Adults 18+", "USA"],
    rating: 4.6,
    country: "USA",
  },
  {
    name: "TransDate",
    slug: "transdate",
    category: "Trans dating",
    description:
      "Dating for people interested in transgender and inclusive connections.",
    keyFocus: "Transgender and inclusive dating",
    badge: "USA available",
    mark: "T",
    accent: "from-[#9B3CE8] via-[#E83E9B] to-[#F58BC5]",
    image: getOfferAdultImage("transdate"),
    href: getUsaGoHref("transdate"),
    tags: ["Trans", "Adults 18+", "USA"],
    rating: 4.6,
    country: "USA",
  },
  {
    name: "MilfFinder",
    slug: "milffinder",
    category: "Mature dating",
    description:
      "Mature dating for singles interested in genuine conversations and chemistry.",
    keyFocus: "Mature singles and conversation-led dating",
    badge: "USA available",
    mark: "M",
    accent: "from-[#A34B68] via-[#E83E9B] to-[#F58BC5]",
    image: getOfferAdultImage("milffinder"),
    href: getUsaGoHref("milffinder"),
    tags: ["Mature", "Adults 18+", "USA"],
    rating: 4.5,
    country: "USA",
  },
  {
    name: "CheekyCrush",
    slug: "cheekycrush",
    category: "Casual dating",
    featured: true,
    description:
      "Casual adult dating for people exploring new, low-pressure connections.",
    keyFocus: "Casual, low-pressure adult dating",
    badge: "USA available",
    mark: "C",
    accent: "from-[#E83E9B] via-[#F15BAF] to-[#F58BC5]",
    image: getOfferAdultImage("cheekycrush"),
    href: getUsaGoHref("cheekycrush"),
    tags: ["Casual", "USA"],
    rating: 4.9,
    country: "USA",
  },
  {
    name: "GayBloom",
    slug: "gaybloom",
    category: "Gay Dating",
    featured: true,
    description:
      "Inclusive adult dating for gay singles and communities in the USA.",
    keyFocus: "Inclusive gay dating in the USA",
    badge: "USA available",
    mark: "G",
    accent: "from-[#9B3CE8] via-[#D45CF1] to-[#F58BC5]",
    image: getOfferAdultImage("gaybloom"),
    href: getUsaGoHref("gaybloom"),
    tags: ["Gay Dating", "Adults 18+", "USA"],
    rating: 4.8,
    country: "USA",
  },
  {
    name: "PridePair",
    slug: "pridepair",
    category: "Gay Dating",
    featured: false,
    description:
      "Inclusive gay dating where users can match, chat, and connect with like-minded people.",
    keyFocus: "Match, chat, and gay community connections",
    badge: "USA available",
    mark: "P",
    accent: "from-[#E83E9B] via-[#C026D3] to-[#6366F1]",
    image: getOfferAdultImage("pridepair"),
    href: getUsaGoHref("pridepair"),
    tags: ["Gay Dating", "USA"],
    rating: 4.8,
    country: "USA",
  },
];

export const featuredUsaOffers = usaOffers.filter((offer) => offer.featured);

export const usaCategories = [
  {
    title: "Casual Dating",
    slug: "casual",
    hash: "offers-casual",
    description:
      "Low-pressure dating offers for USA users looking for fun, relaxed connections.",
    image: getOfferAdultImage("cheekycrush"),
    href: getUsaGoHref("cheekycrush"),
    offerName: "CheekyCrush",
    color: "from-pink-500 to-rose-400",
  },
  {
    title: "Gay Dating",
    slug: "gay-dating",
    hash: "offers-gay",
    description:
      "Gay dating offers for USA users seeking inclusive communities and real connections.",
    image: getOfferAdultImage("manfinder"),
    href: getUsaGoHref("gaybloom"),
    offerName: "GayBloom",
    color: "from-violet-500 to-pink-500",
  },
  {
    title: "Mature Dating",
    slug: "mature",
    hash: "offers-mature",
    description:
      "Mature dating offers for experienced USA adults who want meaningful conversations.",
    image: getOfferAdultImage("grannyhunter"),
    href: getUsaGoHref("grannyhunter"),
    offerName: "Grannyhunter",
    color: "from-amber-400 to-orange-400",
  },
  {
    title: "Adult Dating",
    slug: "adult",
    hash: "offers-adult",
    description:
      "Adult dating offers for USA users who want direct, open-minded connections.",
    image: getOfferAdultImage("litlatinz"),
    href: getUsaGoHref("litlatinz"),
    offerName: "LitLatinz",
    color: "from-rose-600 to-pink-500",
  },
  {
    title: "Trans Dating",
    slug: "trans",
    hash: "offers-trans",
    description:
      "Trans dating offers for USA users seeking inclusive communities and connections.",
    image: getOfferAdultImage("transdate"),
    href: getUsaGoHref("transdate"),
    offerName: "TransDate",
    color: "from-teal-500 to-cyan-400",
  },
] as const;
