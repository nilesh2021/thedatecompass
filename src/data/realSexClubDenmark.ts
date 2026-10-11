import { adultImages, getOfferAdultImage } from "@/data/adultOfferImages";
import { REALSEXCLUB_AFFILIATE_URL } from "@/data/realSexClubOffer";

export const realSexClubDenmarkOffer = {
  name: "RealSexClub",
  category: "Adult dating",
  url: REALSEXCLUB_AFFILIATE_URL,
  ctaLabel: "Visit RealSexClub",
  image: getOfferAdultImage("realsexclub"),
} as const;

export const realSexClubDenmarkVisuals = {
  hero: adultImages.portraitD,
  portrait: getOfferAdultImage("realsexclub"),
  mid: adultImages.portraitE,
  wide: adultImages.portraitH,
  final: adultImages.neon,
} as const;

export const realSexClubDenmarkMarquee = [
  "Adult dating Denmark",
  "RealSexClub",
  "Copenhagen",
  "Dating sites Denmark",
  "Adults 18+",
  "Aarhus",
  "Online dating Denmark",
] as const;

export const realSexClubDenmarkFeatures = [
  {
    title: "Adult dating & social",
    text: "Listed as an adult dating and social option for people who want direct connections rather than a general matchmaking directory.",
    image: adultImages.portraitA,
  },
  {
    title: "Messaging tools",
    text: "Project listings mention messaging tools so adults can contact other members on the destination site.",
    image: adultImages.portraitE,
  },
  {
    title: "Profile tools",
    text: "Browse and present adult profiles with the profile tools described in existing TheDateCompass listings.",
    image: adultImages.portraitH,
  },
] as const;

export const realSexClubDenmarkSteps = [
  {
    number: "01",
    title: "Join",
    text: "Open RealSexClub and create a profile. Confirm you are 18+ and review the destination site’s current terms.",
  },
  {
    number: "02",
    title: "Browse",
    text: "Look through adult profiles. Availability can vary by location — including Copenhagen and other Danish cities.",
  },
  {
    number: "03",
    title: "Connect",
    text: "Use messaging tools when you find someone relevant. Keep personal details private until you trust the conversation.",
  },
] as const;

export const realSexClubDenmarkCities = [
  {
    name: "Copenhagen",
    text: "Denmark’s capital is the usual starting point for online dating Denmark searches. Confirm local availability on the destination site.",
  },
  {
    name: "Aarhus",
    text: "A second hub for dating sites Denmark visitors compare when they want adult dating outside the capital.",
  },
  {
    name: "Odense",
    text: "A smaller-city option for adults comparing discreet adult dating Denmark listings.",
  },
  {
    name: "Aalborg",
    text: "Included so northern Denmark visitors can evaluate the same RealSexClub listing with local context.",
  },
] as const;

export const realSexClubDenmarkAudience = [
  {
    title: "Adult dating",
    text: "Adults 18+ looking for an adult dating or adult social listing rather than a general directory.",
  },
  {
    title: "Direct connections",
    text: "People who want messaging and profile tools aimed at direct, low-friction connections.",
  },
  {
    title: "Denmark visitors",
    text: "Visitors comparing adult dating Denmark options from Copenhagen, Aarhus, Odense, or Aalborg.",
  },
] as const;

export const realSexClubDenmarkFaqs = [
  {
    question: "What is RealSexClub for Denmark visitors?",
    answer:
      "RealSexClub is listed on TheDateCompass as an adult social and dating option for people looking for direct connections. This page frames that listing for Denmark visitors. It is a third-party platform, not a service operated by TheDateCompass.",
  },
  {
    question: "Is RealSexClub for adults only?",
    answer:
      "Yes. RealSexClub is presented here as an adult dating listing for people 18 and over. You should confirm age requirements on the destination site before creating a profile.",
  },
  {
    question: "Does TheDateCompass run RealSexClub?",
    answer:
      "No. TheDateCompass is an independent comparison site. Visit links on this page are affiliate links to a third-party provider. We may earn a commission if you use those links, at no extra cost to you.",
  },
  {
    question: "Is RealSexClub available in Copenhagen and other Danish cities?",
    answer:
      "This page targets Denmark visitors, including people comparing adult dating in Copenhagen, Aarhus, Odense, and Aalborg. A listing here does not guarantee the destination service is available in every city. Check current availability on RealSexClub.",
  },
  {
    question: "How much does RealSexClub cost?",
    answer:
      "TheDateCompass does not publish RealSexClub pricing. Check current terms, fees, and features on the destination site before you sign up or pay for anything.",
  },
];
