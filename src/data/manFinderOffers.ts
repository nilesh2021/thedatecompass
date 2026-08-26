/**
 * ManFinder single-offer page copy.
 * Affiliate URL and product facts are taken from existing project listings only.
 */

export const MANFINDER_AFFILIATE_URL =
  "https://t.aslr1.com/358917/6488?aff_sub5=SF_006OG000004lmDN";

const MF_PHOTO =
  "https://images.unsplash.com/photo-1579650382425-256093056bca";

export const manFinderOffer = {
  name: "ManFinder",
  badge: "Men seeking men",
  bestFor: "Gay dating for men",
  category: "Gay dating",
  url: MANFINDER_AFFILIATE_URL,
  ctaLabel: "Join ManFinder Free",
  description:
    "ManFinder is a dating and social platform for men looking to meet and connect with other men — chat, browse, and start conversations fast.",
  highlights: [
    "Men seeking men",
    "Dating + social",
    "Quick signup",
    "Private messaging",
  ],
  promo: "Free to join",
} as const;

export const manFinderVisuals = {
  hero: `${MF_PHOTO}?auto=format&fit=crop&w=1800&q=80`,
  portrait: `${MF_PHOTO}?auto=format&fit=crop&w=900&h=1200&q=80`,
  wide: `${MF_PHOTO}?auto=format&fit=crop&w=1800&h=900&q=80`,
  side: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&h=1200&q=80",
} as const;

export const manFinderExploreCards = [
  {
    title: "Men seeking men",
    text: "Browse and connect with guys looking for dates, chat, and real connections.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&h=1000&q=80",
    objectPosition: "center 20%",
  },
  {
    title: "Private messaging",
    text: "Message matches directly and start conversations on your terms.",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&h=1000&q=80",
    objectPosition: "center top",
  },
  {
    title: "Quick signup",
    text: "Create a profile and start browsing in minutes on desktop or mobile.",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=800&h=1000&q=80",
    objectPosition: "center 30%",
  },
  {
    title: "Dating + social",
    text: "A platform built for gay dating and social connections between men.",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&h=1000&q=80",
    objectPosition: "center top",
  },
] as const;

export const manFinderFeatures = [
  {
    title: "Gay dating for men",
    text: "Listed in this project as a gay dating and social platform for men seeking men.",
  },
  {
    title: "Profile browsing",
    text: "Browse member profiles and discover guys looking to connect near you.",
  },
  {
    title: "Private messaging",
    text: "Contact other members using the messaging tools on the destination site.",
  },
  {
    title: "Quick signup",
    text: "Highlighted as having a fast signup flow so you can start browsing quickly.",
  },
  {
    title: "Mobile access",
    text: "Use ManFinder on a phone or desktop for on-the-go connections.",
  },
] as const;

export const manFinderFaqs = [
  {
    question: "What is ManFinder?",
    answer:
      "ManFinder is a gay dating and social platform for men looking to meet and connect with other men through profiles, messaging, and browsing tools. It is a third-party platform, not a service operated by TheDateCompass.",
  },
  {
    question: "Is ManFinder free to join?",
    answer:
      "Yes — you can create an account and start browsing for free. Premium features may be available on the destination site. Check current terms before signing up.",
  },
  {
    question: "Who is ManFinder for?",
    answer:
      "ManFinder is intended for adult men aged 18 and older seeking gay dating, casual encounters, or social connections with other men.",
  },
  {
    question: "Does TheDateCompass run ManFinder?",
    answer:
      "No. TheDateCompass is an independent comparison site. Visit links on this page are affiliate links to a third-party provider. We may earn a commission if you use those links, at no extra cost to you.",
  },
];
