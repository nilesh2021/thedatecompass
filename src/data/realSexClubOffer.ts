/**
 * RealSexClub single-offer page copy.
 * Affiliate URL and product facts are taken from existing project listings only.
 */

export const REALSEXCLUB_AFFILIATE_URL =
  "https://t.datsk9.com/358917/7964?aff_sub5=SF_006OG000004lmDN";

const RSC_PHOTO =
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2";

export const realSexClubOffer = {
  name: "RealSexClub",
  category: "Adult dating",
  url: REALSEXCLUB_AFFILIATE_URL,
  ctaLabel: "Visit RealSexClub",
  image: `${RSC_PHOTO}?auto=format&fit=crop&w=1800&q=80`,
  description:
    "An adult social and dating option for people looking for direct connections.",
} as const;

/** Same RealSexClub listing photo, cropped for editorial layouts. */
export const realSexClubVisuals = {
  hero: `${RSC_PHOTO}?auto=format&fit=crop&w=1800&q=80`,
  portrait: `${RSC_PHOTO}?auto=format&fit=crop&w=900&h=1200&q=80`,
  wide: `${RSC_PHOTO}?auto=format&fit=crop&w=1800&h=900&q=80`,
  faces: `${RSC_PHOTO}?auto=format&fit=crop&w=800&h=1000&q=80&crop=faces`,
  entropy: `${RSC_PHOTO}?auto=format&fit=crop&w=800&h=1000&q=80&crop=entropy`,
  edges: `${RSC_PHOTO}?auto=format&fit=crop&w=800&h=1000&q=80&crop=edges`,
  top: `${RSC_PHOTO}?auto=format&fit=crop&w=800&h=1000&q=80&crop=top`,
} as const;

export const realSexClubFeatures = [
  {
    title: "Adult dating & social",
    text: "Listed in this project as an adult dating and social option, not a general matchmaking directory.",
  },
  {
    title: "Direct connections",
    text: "Described as a place for adults looking for direct, exciting connections.",
  },
  {
    title: "Messaging tools",
    text: "Project listings mention messaging tools for contacting other adults on the platform.",
  },
  {
    title: "Profile tools",
    text: "Listings also note profile tools for presenting and browsing adult profiles.",
  },
  {
    title: "Mobile access",
    text: "Highlighted as having mobile access so the destination site can be used on phones as well as desktop.",
  },
] as const;

export const realSexClubExploreCards = [
  {
    title: "Direct connections",
    text: "Adult dating and social listings framed around direct connections.",
    image: realSexClubVisuals.faces,
    objectPosition: "center 20%",
  },
  {
    title: "Messaging tools",
    text: "Contact other adults using the messaging tools noted in project listings.",
    image: realSexClubVisuals.entropy,
    objectPosition: "left center",
  },
  {
    title: "Profile tools",
    text: "Browse and present adult profiles with the profile tools described here.",
    image: realSexClubVisuals.edges,
    objectPosition: "right center",
  },
  {
    title: "Mobile access",
    text: "Use the destination site on a phone or desktop, as listed for this offer.",
    image: realSexClubVisuals.top,
    objectPosition: "center top",
  },
] as const;

export const realSexClubFaqs = [
  {
    question: "What is RealSexClub?",
    answer:
      "RealSexClub is listed on TheDateCompass as an adult social and dating option for people looking for direct connections. It is a third-party platform, not a service operated by TheDateCompass.",
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
    question: "Where else is RealSexClub listed on this site?",
    answer:
      "RealSexClub currently appears on TheDateCompass country pages for the USA, Germany, France, Canada, Australia, and the UK, and on Top Offers. A listing on this site does not guarantee the destination service is available in every location.",
  },
  {
    question: "How much does RealSexClub cost?",
    answer:
      "TheDateCompass does not publish RealSexClub pricing. Check current terms, fees, and features on the destination site before you sign up or pay for anything.",
  },
];
