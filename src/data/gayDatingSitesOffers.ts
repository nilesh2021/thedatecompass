/**
 * Gay dating sites comparison page — two curated offers.
 */

export const GAYBLOOM_AFFILIATE_URL =
  "https://t.datsk9.com/358917/10378/0?po=6456&aff_sub5=SF_006OG000004lmDN";

export const MANFINDER_SITES_AFFILIATE_URL =
  "https://t.datsk9.com/358917/4999?aff_sub5=SF_006OG000004lmDN";

const GB_PHOTO =
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80";

const MF_PHOTO =
  "https://images.unsplash.com/photo-1579650382425-256093056bca?auto=format&fit=crop&w=900&q=80";

export type GayDatingSiteOffer = {
  id: string;
  name: string;
  rank: number;
  badge: string;
  countries: string;
  countryNote: string;
  bestFor: string;
  description: string;
  highlights: string[];
  url: string;
  ctaLabel: string;
  promo: string;
  image: string;
  accent: "mint" | "rose";
  featured?: boolean;
};

export const gayDatingSitesOffers: GayDatingSiteOffer[] = [
  {
    id: "gaybloom",
    name: "GayBloom",
    rank: 1,
    badge: "US pick",
    countries: "United States",
    countryNote: "Available in the United States",
    bestFor: "Gay men seeking connections",
    description:
      "GayBloom is designed for men in the LGBTQ+ community who want to meet, chat, and explore new connections in a focused US environment.",
    highlights: [
      "LGBTQ+ community",
      "Verified profiles",
      "Private messaging",
      "Mobile friendly",
    ],
    url: GAYBLOOM_AFFILIATE_URL,
    ctaLabel: "Visit GayBloom",
    promo: "Free to join",
    image: GB_PHOTO,
    accent: "mint",
    featured: true,
  },
  {
    id: "manfinder",
    name: "ManFinder",
    rank: 2,
    badge: "Global reach",
    countries: "United States + international",
    countryNote: "United States and other accepted countries",
    bestFor: "Gay dating for men",
    description:
      "ManFinder is a dating and social platform for men looking to meet and connect with other men — browse profiles, chat, and start conversations.",
    highlights: [
      "Men seeking men",
      "Dating + social",
      "Quick signup",
      "Private messaging",
    ],
    url: MANFINDER_SITES_AFFILIATE_URL,
    ctaLabel: "Visit ManFinder",
    promo: "Free to join",
    image: MF_PHOTO,
    accent: "rose",
  },
];

export const gayDatingSitesFeatured =
  gayDatingSitesOffers.find((o) => o.featured) ?? gayDatingSitesOffers[0];

export const gayDatingSitesFaqs = [
  {
    question: "What are the best gay dating sites?",
    answer:
      "GayBloom and ManFinder are two popular options listed on this page. GayBloom focuses on US-based gay dating, while ManFinder is available in the United States and other accepted countries. Compare features and visit the destination site that fits your location and goals.",
  },
  {
    question: "Is GayBloom only for US users?",
    answer:
      "GayBloom is listed here as a United States offer. Availability and signup rules are set by the destination platform — confirm current access on GayBloom before registering.",
  },
  {
    question: "Where is ManFinder available?",
    answer:
      "ManFinder is listed for the United States and other accepted countries. Country availability can change over time, so check the destination site for the latest coverage.",
  },
  {
    question: "Are these gay dating sites free to join?",
    answer:
      "Both GayBloom and ManFinder are presented as free to join. Premium features, pricing, and terms are set by each third-party platform and may change. Review current details on the destination site before signing up.",
  },
  {
    question: "Does TheDateCompass operate these dating sites?",
    answer:
      "No. TheDateCompass is an independent comparison site. Links on this page are affiliate links to third-party providers. We may earn a commission if you use those links, at no extra cost to you.",
  },
];
