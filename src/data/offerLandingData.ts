const PLACEHOLDER = "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1400&q=80";

export type OfferData = {
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  heroImage: string;
  galleryImages: string[];
  features: { title: string; text: string }[];
  suitableFor: { title: string; text: string }[];
  considerations: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
  affiliateUrl: string; // keep empty until provided
  availableCountries: string[];
};

/** Existing CrakRevenue basic links (with aff_sub5) from project offer data. */
const AFFILIATE_URLS: Partial<Record<string, string>> = {
  realsexclub:
    "https://t.datsk9.com/358917/7964?aff_sub5=SF_006OG000004lmDN",
  milffinder:
    "https://t.datsk9.com/358917/4999?aff_sub5=SF_006OG000004lmDN",
  litlatinz:
    "https://t.datsk9.com/358917/7410?aff_sub5=SF_006OG000004lmDN",
  fetishpartner:
    "https://t.datsk9.com/358917/5055?aff_sub5=SF_006OG000004lmDN",
  transdate:
    "https://t.datsk9.com/358917/6497?aff_sub5=SF_006OG000004lmDN",
};

const makeOffer = (slug: string): OfferData => {
  const name = slug.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    name,
    slug,
    category: "Adult dating",
    shortDescription: `Placeholder short description for ${name}. Replace with real copy.`,
    heroImage: PLACEHOLDER,
    galleryImages: [PLACEHOLDER, PLACEHOLDER, PLACEHOLDER],
    features: [
      { title: "Direct connections", text: "Messaging and profile tools for direct contact." },
      { title: "Profile tools", text: "Create and browse profiles on the destination site." },
      { title: "Mobile access", text: "Use the service on phones and desktop." },
    ],
    suitableFor: [
      { title: "Adults 18+", text: "Intended for adult audiences." },
      { title: "Direct contact seekers", text: "People looking for direct messaging features." },
    ],
    considerations: [
      { title: "Privacy", text: "Review privacy and profile settings on the destination site." },
      { title: "Terms", text: "Check current terms and fees on the destination site." },
    ],
    faq: [
      { question: "What is this service?", answer: "A placeholder FAQ entry — replace with accurate content." },
      { question: "Is this for adults?", answer: "Yes — intended for users aged 18 and over." },
    ],
    affiliateUrl: AFFILIATE_URLS[slug] ?? "",
    availableCountries: ["USA", "UK", "Germany"],
  };
};

export const offers: OfferData[] = [
  makeOffer("realsexclub"),
  makeOffer("grannyhunter"),
  makeOffer("manfinder"),
  makeOffer("milffinder"),
  makeOffer("transdate"),
  makeOffer("litlatinz"),
  makeOffer("fetishpartner"),
];

export function getOffer(slug: string): OfferData | null {
  return offers.find((o) => o.slug === slug) || null;
}

export default offers;

export function getOfferPageData(slug: string) {
  const raw = getOffer(slug);
  if (!raw) return null;

  return {
    slug: raw.slug,
    offer: {
      name: raw.name,
      category: raw.category,
      url: raw.affiliateUrl,
      ctaLabel: `Visit ${raw.name}`,
      description: raw.shortDescription,
    },
    visuals: { hero: raw.heroImage, portrait: raw.galleryImages[0], wide: raw.galleryImages[1] },
    description: raw.shortDescription,
    features: raw.features,
    faqs: raw.faq,
    audience: raw.suitableFor,
    considerations: raw.considerations,
  };
}
