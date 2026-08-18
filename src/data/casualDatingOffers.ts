/**
 * FuckFinder single-offer page — /offers/casual-dating
 */

export const CASUAL_DATING_AFFILIATE_URL =
  "https://t.datsk9.com/358917/7346?aff_sub5=SF_006OG000004lmDN";

export const CASUAL_DATING_BANNER_URL =
  "https://www.imglnkx.com/9956/DAT-460_DESIGN-23859_4_300250.gif";

const FF_PHOTO =
  "https://images.unsplash.com/photo-1470225620780-d1e8cb453f3f";

export const casualDatingOffer = {
  name: "FuckFinder",
  badge: "Casual connections",
  bestFor: "Casual adult encounters",
  category: "Casual dating",
  availability: "Worldwide",
  url: CASUAL_DATING_AFFILIATE_URL,
  ctaLabel: "Join FuckFinder Free",
  description:
    "FuckFinder connects adults who want low-pressure, no-strings connections — browse local profiles, message privately, and meet on your terms.",
  highlights: [
    "Local profiles",
    "Private messaging",
    "Fast signup",
    "Worldwide access",
  ],
  promo: "Free to join",
} as const;

export const casualDatingVisuals = {
  hero: `${FF_PHOTO}?auto=format&fit=crop&w=1800&q=80`,
  portrait: `${FF_PHOTO}?auto=format&fit=crop&w=900&h=1200&q=80`,
  wide: "https://images.unsplash.com/photo-1517456793572-08b25ac8d0e0?auto=format&fit=crop&w=1800&h=900&q=80",
  side: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&h=1200&q=80",
} as const;

export const casualDatingSteps = [
  {
    step: "01",
    title: "Create your profile",
    text: "Sign up in minutes on desktop or mobile — free to get started.",
  },
  {
    step: "02",
    title: "Browse & match",
    text: "Explore member profiles and find adults looking for casual connections near you.",
  },
  {
    step: "03",
    title: "Message privately",
    text: "Start conversations on your terms and take things at your own pace.",
  },
] as const;

export const casualDatingFeatures = [
  {
    title: "Casual dating focus",
    text: "Built for adults who prefer relaxed, no-pressure connections over long-term commitments.",
  },
  {
    title: "Local discovery",
    text: "Browse profiles and find people in your area looking for the same kind of connection.",
  },
  {
    title: "Private messaging",
    text: "Contact members through secure messaging tools on the destination site.",
  },
  {
    title: "Quick registration",
    text: "A streamlined signup flow so you can start exploring profiles within minutes.",
  },
  {
    title: "Mobile & desktop",
    text: "Use FuckFinder on your phone or computer for flexible access wherever you are.",
  },
] as const;

export const casualDatingTrustPoints = [
  {
    stat: "Worldwide",
    label: "Global availability",
    text: "FuckFinder is listed here as a globally accessible casual dating platform.",
  },
  {
    stat: "Adults 18+",
    label: "Mature audience",
    text: "Intended for adult users seeking casual connections and private conversations.",
  },
  {
    stat: "Discreet",
    label: "Browse on your terms",
    text: "Explore profiles and message privately with tools on the destination site.",
  },
] as const;

export const casualDatingFaqs = [
  {
    question: "What is FuckFinder?",
    answer:
      "FuckFinder is a casual dating platform for adults looking to meet people for relaxed, no-strings connections through profiles, messaging, and browsing tools. It is a third-party service, not operated by TheDateCompass.",
  },
  {
    question: "Is FuckFinder available worldwide?",
    answer:
      "Yes — FuckFinder is listed on this page as available worldwide. Availability of specific features may still vary; check the destination site for current details in your region.",
  },
  {
    question: "Is FuckFinder free to join?",
    answer:
      "You can create an account and start browsing for free. Premium features may be offered on the destination site. Review current terms and pricing before signing up.",
  },
  {
    question: "Who is FuckFinder for?",
    answer:
      "FuckFinder is intended for adults aged 18 and older interested in casual dating, local connections, and meeting like-minded people online.",
  },
  {
    question: "Does TheDateCompass run FuckFinder?",
    answer:
      "No. TheDateCompass is an independent comparison site. Links on this page are affiliate links to a third-party provider. We may earn a commission if you use those links, at no extra cost to you.",
  },
];
