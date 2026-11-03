/**
 * SinParty landing — /offers/sinparty
 * Public CTAs use /go/sinparty. The tracking URL stays in the go map.
 * Country names belong in the FAQ only. Payouts stay off the page.
 */

export const SINPARTY_AFFILIATE_URL = "/go/sinparty";

export const sinpartyGoDestinations: Record<string, string> = {
  sinparty:
    "https://t.camsk5.com/358917/10525/0?po=6533&aff_sub5=SF_006OG000004lmDN",
};

export const sinpartyOffer = {
  name: "SinParty",
  badge: "Live cam",
  bestFor: "Freemium live cam",
  category: "Live cam",
  availability: "Phone, tablet, and desktop",
  url: SINPARTY_AFFILIATE_URL,
  ctaLabel: "Visit SinParty",
  description:
    "SinParty is a new freemium live cam platform for adults. Start free, watch in private, and open a room on your phone or desktop.",
  highlights: ["Free to start", "Private", "Live cam", "Adults 18+"],
  promo: "Free to start",
} as const;

export const sinpartyVisuals = {
  hero: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1800&q=80",
  portrait:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&h=1200&q=80",
  wide: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&h=900&q=80",
} as const;

export const sinpartySteps = [
  {
    step: "01",
    title: "Confirm you are 18+",
    text: "SinParty is for adults only. Check the age rule on the destination site before you continue.",
  },
  {
    step: "02",
    title: "Open SinParty",
    text: "Continue from this page to the SinParty site. TheDateCompass does not host the live rooms.",
  },
  {
    step: "03",
    title: "Start free",
    text: "Create an account and look around. Paid features, if any, are shown on SinParty before you pay.",
  },
] as const;

export const sinpartySparks = [
  {
    title: "Free to start",
    text: "SinParty is freemium. You can begin without paying, then review any paid options on the site.",
  },
  {
    title: "Watch in private",
    text: "Open a live room and keep the session on your own screen. Review privacy settings on SinParty.",
  },
  {
    title: "Phone or desktop",
    text: "The same visit works on a phone, tablet, or desktop.",
  },
] as const;

export const sinpartyFeatures = [
  {
    title: "A new live cam platform",
    text: "SinParty is a freemium live cam site for adults who want to start without a long signup.",
  },
  {
    title: "Free to begin",
    text: "Browse and start an account first. Current fees stay on the provider site, not on this page.",
  },
  {
    title: "Private by default",
    text: "Use the privacy and account tools on SinParty. Do not share payment details until you are on that site.",
  },
  {
    title: "Adults 18+ only",
    text: "This listing is for adults. Confirm you meet the age requirement before you continue.",
  },
  {
    title: "Phone or desktop",
    text: "Open SinParty on the device you already use. Layout follows the screen you are on.",
  },
] as const;

export const sinpartyFaqs = [
  {
    question: "What is SinParty?",
    answer:
      "SinParty is a freemium live cam platform for adults. It is a third-party site, not a service run by TheDateCompass.",
  },
  {
    question: "Is SinParty for adults only?",
    answer:
      "Yes. SinParty is for adults 18 and over. Confirm the age rule on the destination site before you continue.",
  },
  {
    question:
      "Is SinParty available in the United States, the United Kingdom, Canada, and Australia?",
    answer:
      "Yes. This page lists SinParty for adults in the United States, the United Kingdom, Canada, and Australia. Features and access can still vary, so check the destination site for your location.",
  },
  {
    question:
      "Is SinParty available in Germany, the Netherlands, and Switzerland?",
    answer:
      "Yes. SinParty is also listed here for Germany, the Netherlands, and Switzerland.",
  },
  {
    question: "Is SinParty available in France and other European countries?",
    answer:
      "Yes. SinParty is listed for France, Belgium, Ireland, Austria, Denmark, Finland, Spain, Sweden, Italy, Norway, Monaco, and Cyprus, as well as New Zealand and Israel.",
  },
  {
    question: "Which countries can use this SinParty page?",
    answer:
      "This general page is for the United States, the United Kingdom, Germany, Canada, Australia, the Netherlands, Switzerland, Belgium, New Zealand, Monaco, Cyprus, Ireland, Austria, Israel, Denmark, France, Finland, Spain, Sweden, Italy, and Norway.",
  },
  {
    question: "How much does SinParty cost?",
    answer:
      "TheDateCompass does not publish SinParty pricing. It is described as freemium. Current fees are shown only on the provider site.",
  },
  {
    question: "Does TheDateCompass run SinParty?",
    answer:
      "No. Links on this page are affiliate links to a third-party provider. We may earn a commission if you use them, at no extra cost to you.",
  },
] as const;
