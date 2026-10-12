/**
 * GayBloom USA single-offer landing copy.
 * Facts are taken from existing USA and gay-dating listings only.
 */

import { adultImages } from "@/data/adultOfferImages";

const GB_PHOTO =
  "https://images.unsplash.com/photo-1567476783296-fff06012e17a";

export const GAYBLOOM_USA_OFFER_PATH = "/go/gaybloom";

export const gayBloomUsaOffer = {
  name: "GayBloom",
  badge: "US pick",
  bestFor: "Gay men seeking connections",
  category: "Gay Dating",
  url: GAYBLOOM_USA_OFFER_PATH,
  ctaLabel: "Visit GayBloom",
  description:
    "GayBloom is designed for men in the LGBTQ+ community who want to meet, chat, and explore new connections in a focused US environment.",
  highlights: [
    "LGBTQ+ community",
    "Verified profiles",
    "Private messaging",
    "Mobile friendly",
  ],
  promo: "Free to join",
} as const;

export const gayBloomUsaVisuals = {
  portrait: `${GB_PHOTO}?auto=format&fit=crop&w=900&h=1200&q=80`,
  wide: `${GB_PHOTO}?auto=format&fit=crop&w=1800&h=900&q=80`,
  card: adultImages.gaybloom,
} as const;

export const gayBloomUsaPoints = [
  {
    number: "01",
    title: "LGBTQ+ community",
    text: "Inclusive adult dating for gay singles and communities in the USA.",
  },
  {
    number: "02",
    title: "Private messaging",
    text: "Listed highlights include verified profiles and private messaging so you can meet, chat, and explore new connections.",
  },
  {
    number: "03",
    title: "Mobile friendly",
    text: "GayBloom is listed as mobile friendly — browse and message from a phone or desktop on the destination site.",
  },
] as const;

export const gayBloomUsaFaqs = [
  {
    question: "What is GayBloom?",
    answer:
      "GayBloom is designed for men in the LGBTQ+ community who want to meet, chat, and explore new connections in a focused US environment. TheDateCompass lists it as inclusive adult dating for gay singles and communities in the USA. It is a third-party platform, not a service we operate.",
  },
  {
    question: "Is GayBloom listed for visitors in the United States?",
    answer:
      "Yes. GayBloom is listed here as a United States offer. Availability and signup rules are set by the destination platform — confirm current access on GayBloom before registering.",
  },
  {
    question: "Is GayBloom free to join?",
    answer:
      "GayBloom is presented as free to join. Premium features, pricing, and terms are set by the third-party platform and may change. Review current details on the destination site before signing up.",
  },
  {
    question: "Does TheDateCompass operate GayBloom?",
    answer:
      "No. TheDateCompass is an independent comparison site. Links on this page are affiliate links to a third-party provider. We may earn a commission if you use those links, at no extra cost to you.",
  },
];
