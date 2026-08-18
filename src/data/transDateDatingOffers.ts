/**
 * TransDate Dating single-offer page copy.
 */

export const TRANSDATE_AFFILIATE_URL =
  "https://t.datsk9.com/358917/6497?aff_sub5=SF_006OG000004lmDN";

const TD_PHOTO =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac";

export const transDateOffer = {
  name: "TransDate",
  badge: "Inclusive",
  bestFor: "Transgender dating",
  category: "Trans dating",
  url: TRANSDATE_AFFILIATE_URL,
  ctaLabel: "Join TransDate Free",
  description:
    "TransDate is an inclusive online dating platform built for transgender dating and meaningful connections — browse profiles, chat privately, and connect worldwide.",
  highlights: [
    "Trans-inclusive",
    "Worldwide access",
    "Secure messaging",
    "Supportive community",
  ],
  promo: "Free to join",
} as const;

export const transDateVisuals = {
  hero: `${TD_PHOTO}?auto=format&fit=crop&w=1800&q=80`,
  community: `${TD_PHOTO}?auto=format&fit=crop&w=1400&h=800&q=80`,
  connect: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&h=700&q=80",
  profile: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&h=700&q=80",
} as const;

export const transDateSteps = [
  {
    step: "01",
    title: "Create your profile",
    text: "Sign up in minutes and set up a profile that reflects who you are.",
  },
  {
    step: "02",
    title: "Discover members",
    text: "Browse profiles and find people looking for respectful, real connections.",
  },
  {
    step: "03",
    title: "Start chatting",
    text: "Use secure messaging to break the ice and build conversations on your terms.",
  },
] as const;

export const transDateFeatures = [
  {
    title: "Trans-inclusive dating",
    text: "A platform built for transgender dating with respectful community standards.",
    span: "wide" as const,
  },
  {
    title: "Profile browsing",
    text: "Explore member profiles and discover connections that match your interests.",
    span: "normal" as const,
  },
  {
    title: "Secure messaging",
    text: "Private messaging tools so you can chat comfortably and safely.",
    span: "normal" as const,
  },
  {
    title: "Worldwide availability",
    text: "Available across countries worldwide — connect wherever you are.",
    span: "normal" as const,
  },
  {
    title: "Mobile-friendly",
    text: "Use TransDate on your phone or desktop for on-the-go connections.",
    span: "normal" as const,
  },
] as const;

export const transDateFaqs = [
  {
    question: "What is TransDate?",
    answer:
      "TransDate is an inclusive online dating platform for transgender dating and meaningful connections. It offers profile browsing, messaging, and community features on a third-party site — not operated by TheDateCompass.",
  },
  {
    question: "Is TransDate available worldwide?",
    answer:
      "Yes — TransDate is presented as available worldwide across all countries. Specific features and availability may vary by region; check the destination site for current details.",
  },
  {
    question: "Is TransDate free to join?",
    answer:
      "You can create an account and start browsing for free. Premium features may be available on the destination site. Review current terms and pricing before signing up.",
  },
  {
    question: "Who is TransDate for?",
    answer:
      "TransDate is intended for adults aged 18 and older seeking transgender dating, inclusive connections, and respectful community interactions.",
  },
  {
    question: "Does TheDateCompass run TransDate?",
    answer:
      "No. TheDateCompass is an independent comparison site. Links on this page are affiliate links to a third-party provider. We may earn a commission if you use those links, at no extra cost to you.",
  },
];
