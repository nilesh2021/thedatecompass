/**
 * GrannyHunter single-offer page — /offers/grannyhunter
 */

export const GRANNY_HUNTER_AFFILIATE_URL =
  "https://t.datsk9.com/358917/7570?aff_sub5=SF_006OG000004lmDN";

const GH_HERO =
  "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5";

export const grannyHunterOffer = {
  name: "GrannyHunter",
  badge: "Mature connections",
  bestFor: "Experienced singles & refined dating",
  category: "Mature dating",
  availability: "Worldwide · All countries",
  url: GRANNY_HUNTER_AFFILIATE_URL,
  ctaLabel: "Join GrannyHunter Free",
  description:
    "GrannyHunter connects adults with experienced, mature singles who appreciate conversation, confidence, and genuine chemistry — browse profiles, message privately, and connect on your terms.",
  highlights: [
    "Experienced singles",
    "Worldwide access",
    "Private messaging",
    "Discreet browsing",
  ],
  promo: "Free to join",
} as const;

export const grannyHunterVisuals = {
  hero: `${GH_HERO}?auto=format&fit=crop&w=1800&q=80`,
  portrait: `${GH_HERO}?auto=format&fit=crop&w=900&h=1200&q=80`,
  wide: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&h=900&q=80",
  side: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&h=1200&q=80",
} as const;

export const grannyHunterSteps = [
  {
    step: "01",
    title: "Create your profile",
    text: "Sign up in minutes on desktop or mobile. Add a photo and share what kind of mature connection you are looking for.",
  },
  {
    step: "02",
    title: "Browse mature members",
    text: "Explore profiles from experienced singles worldwide. Filter by interests and discover adults who match your preferences.",
  },
  {
    step: "03",
    title: "Start messaging",
    text: "Reach out privately through secure messaging tools on the destination site and take conversations at your own pace.",
  },
] as const;

export const grannyHunterFeatures = [
  {
    title: "Mature dating focus",
    text: "Built for adults seeking connections with confident, experienced singles who value quality over quantity.",
  },
  {
    title: "Profile discovery",
    text: "Browse member profiles and find people who align with your interests and dating preferences.",
  },
  {
    title: "Secure messaging",
    text: "Contact other members through private messaging on the destination site.",
  },
  {
    title: "Discreet experience",
    text: "Browse and connect with privacy tools designed for adults who prefer a low-profile approach.",
  },
  {
    title: "Mobile & desktop",
    text: "Use GrannyHunter on your phone or computer for flexible access wherever you are.",
  },
] as const;

export const grannyHunterTrustPoints = [
  {
    stat: "Worldwide",
    label: "Available in all countries",
    text: "GrannyHunter is listed here as a globally accessible mature dating platform.",
  },
  {
    stat: "Adults 18+",
    label: "Experienced community",
    text: "Intended for adult users seeking mature dating and meaningful conversation.",
  },
  {
    stat: "Private",
    label: "Discreet connections",
    text: "Browse and message on your terms with privacy controls on the destination site.",
  },
] as const;

export const grannyHunterFaqs = [
  {
    question: "What is GrannyHunter?",
    answer:
      "GrannyHunter is a mature dating platform for adults looking to meet experienced singles through profiles, messaging, and browsing tools. It is a third-party service, not operated by TheDateCompass.",
  },
  {
    question: "Is GrannyHunter available worldwide?",
    answer:
      "Yes — GrannyHunter is listed on this page as available worldwide across all countries. Availability of specific features may still vary; check the destination site for current details.",
  },
  {
    question: "Is GrannyHunter free to join?",
    answer:
      "You can create an account and start browsing for free. Premium features may be offered on the destination site. Review current terms and pricing before signing up.",
  },
  {
    question: "Who is GrannyHunter for?",
    answer:
      "GrannyHunter is intended for adults aged 18 and older interested in mature dating, experienced singles, and conversation-focused connections online.",
  },
  {
    question: "Does TheDateCompass run GrannyHunter?",
    answer:
      "No. TheDateCompass is an independent comparison site. Links on this page are affiliate links to a third-party provider. We may earn a commission if you use those links, at no extra cost to you.",
  },
];
