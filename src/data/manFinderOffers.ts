/**
 * ManFinder single-offer page copy.
 * Affiliate URL and product facts are taken from existing project listings only.
 */

import { getOfferAdultImage, getOfferVisuals } from "@/data/adultOfferImages";

export const MANFINDER_AFFILIATE_URL = "/go/manfinder";

const manFinderVisualSet = getOfferVisuals("manfinder");

export const manFinderOffer = {
  name: "ManFinder",
  badge: "Men seeking men",
  bestFor: "Gay dating for men",
  category: "Gay dating",
  url: MANFINDER_AFFILIATE_URL,
  ctaLabel: "Visit ManFinder",
  description:
    "ManFinder is a dating and social platform for men looking to meet and connect with other men — chat, browse, and start conversations fast.",
  highlights: [
    "Men seeking men",
    "Dating + social",
    "Quick signup",
    "Private messaging",
  ],
  promo: "Prices on the provider site",
} as const;

export const manFinderVisuals = manFinderVisualSet;

export const manFinderExploreCards = [
  {
    title: "Men seeking men",
    text: "Browse and connect with guys looking for dates, chat, and real connections.",
    image: getOfferAdultImage("gaybloom"),
    objectPosition: "center 20%",
  },
  {
    title: "Private messaging",
    text: "Message matches directly and start conversations on your terms.",
    image: manFinderVisualSet.portrait,
    objectPosition: "center top",
  },
  {
    title: "Quick signup",
    text: "Create a profile and start browsing in minutes on desktop or mobile.",
    image: manFinderVisualSet.wide,
    objectPosition: "center 30%",
  },
  {
    title: "Dating + social",
    text: "A platform built for gay dating and social connections between men.",
    image: manFinderVisualSet.side,
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
      "TheDateCompass does not publish a price for ManFinder. Current fees and any paid features are shown only on the provider site and can change. Review those terms before you sign up.",
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
