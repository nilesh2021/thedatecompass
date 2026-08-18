/**
 * MilfFinder single-offer page — /offers/milf-dating
 */

export const MILF_DATING_AFFILIATE_URL =
  "https://t.datsk9.com/358917/4999?aff_sub5=SF_006OG000004lmDN";

const MF_PHOTO =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2";

export const milfDatingOffer = {
  name: "MilfFinder",
  badge: "Mature singles",
  bestFor: "Mature dating & conversations",
  category: "Mature dating",
  availability: "Worldwide · All countries",
  url: MILF_DATING_AFFILIATE_URL,
  ctaLabel: "Join MilfFinder Free",
  description:
    "MilfFinder connects adults with mature singles who value real conversation, chemistry, and low-pressure dating — browse profiles, message privately, and connect on your terms.",
  highlights: [
    "Mature audience",
    "Worldwide access",
    "Private messaging",
    "Easy signup",
  ],
  promo: "Free to join",
} as const;

export const milfDatingVisuals = {
  hero: `${MF_PHOTO}?auto=format&fit=crop&w=1800&q=80`,
  portrait: `${MF_PHOTO}?auto=format&fit=crop&w=900&h=1200&q=80`,
  wide: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&h=900&q=80",
  side: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&h=1200&q=80",
} as const;

export const milfDatingExploreCards = [
  {
    title: "Mature singles",
    text: "Browse profiles from adults who prefer meaningful, low-pressure connections.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&h=1000&q=80",
    objectPosition: "center 20%",
  },
  {
    title: "Private messaging",
    text: "Start conversations privately and explore chemistry at your own pace.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&h=1000&q=80",
    objectPosition: "center top",
  },
  {
    title: "Worldwide access",
    text: "Available across countries so you can connect wherever you are.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&h=1000&q=80",
    objectPosition: "center 30%",
  },
  {
    title: "Quick signup",
    text: "Create a profile in minutes on desktop or mobile and start browsing.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=1000&q=80",
    objectPosition: "center top",
  },
] as const;

export const milfDatingFeatures = [
  {
    title: "Mature dating focus",
    text: "Built for adults seeking connections with experienced, mature singles.",
  },
  {
    title: "Profile discovery",
    text: "Browse member profiles and find people who match what you are looking for.",
  },
  {
    title: "Secure messaging",
    text: "Contact other members through private messaging on the destination site.",
  },
  {
    title: "Fast registration",
    text: "A streamlined signup flow so you can start exploring profiles quickly.",
  },
  {
    title: "Mobile & desktop",
    text: "Use MilfFinder on your phone or computer for flexible access.",
  },
] as const;

export const milfDatingTrustPoints = [
  {
    stat: "Worldwide",
    label: "Available in all countries",
    text: "MilfFinder is listed here as a globally accessible mature dating platform.",
  },
  {
    stat: "Adults 18+",
    label: "Mature audience",
    text: "Intended for adult users seeking mature dating and genuine conversation.",
  },
  {
    stat: "Private",
    label: "Discreet connections",
    text: "Browse and message on your terms with privacy tools on the destination site.",
  },
] as const;

export const milfDatingFaqs = [
  {
    question: "What is MilfFinder?",
    answer:
      "MilfFinder is a mature dating platform for adults looking to meet experienced singles through profiles, messaging, and browsing tools. It is a third-party service, not operated by TheDateCompass.",
  },
  {
    question: "Is MilfFinder available worldwide?",
    answer:
      "Yes — MilfFinder is listed on this page as available worldwide across all countries. Availability of specific features may still vary; check the destination site for current details.",
  },
  {
    question: "Is MilfFinder free to join?",
    answer:
      "You can create an account and start browsing for free. Premium features may be offered on the destination site. Review current terms and pricing before signing up.",
  },
  {
    question: "Who is MilfFinder for?",
    answer:
      "MilfFinder is intended for adults aged 18 and older interested in mature dating, conversation-focused connections, and meeting experienced singles online.",
  },
  {
    question: "Does TheDateCompass run MilfFinder?",
    answer:
      "No. TheDateCompass is an independent comparison site. Links on this page are affiliate links to a third-party provider. We may earn a commission if you use those links, at no extra cost to you.",
  },
];
