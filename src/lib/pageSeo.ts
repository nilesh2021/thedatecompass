import { dreamzOffer } from "@/data/aiGirlfriendOffers";
import { australiaOffers } from "@/data/countries/australia";
import { canadaOffers } from "@/data/countries/canada";
import { countries } from "@/data/countries";
import { denmarkOffers } from "@/data/countries/denmark";
import { franceOffers } from "@/data/countries/france";
import { ukOffers } from "@/data/countries/uk";
import { casualDatingOffer } from "@/data/casualDatingOffers";
import { germanyOffers } from "@/data/germanyOffers";
import { grannyHunterOffer } from "@/data/grannyHunterOffers";
import { manFinderOffer } from "@/data/manFinderOffers";
import { milfDatingOffer } from "@/data/milfDatingOffers";
import { realSexClubOffer } from "@/data/realSexClubOffer";
import { transDateOffer } from "@/data/transDateDatingOffers";
import { usaOffers } from "@/data/usaOffers";

export const SITE_NAME = "TheDateCompass";
export const SITE_URL = "https://www.thedatecompass.com";

export type OgLocale = "en_US" | "en_GB" | "en_AU" | "en_CA" | "de_DE";

const DESC_MIN = 120;
const DESC_MAX = 155;

export type BrandSeo = {
  title: string;
  headline: string;
  description: string;
  locale: OgLocale;
};

type BrandPage = {
  path: string;
  brand: string;
  country?: string;
  category?: string;
  german?: boolean;
  localeHint?: string;
};

type OfferLike = {
  name: string;
  slug?: string;
  category: string;
  country?: string;
};

export function ogLocaleForCountry(country?: string): OgLocale {
  const key = (country ?? "").trim().toLowerCase();
  if (key === "uk" || key === "united kingdom" || key === "gb") return "en_GB";
  if (key === "australia" || key === "au") return "en_AU";
  if (key === "canada" || key === "ca") return "en_CA";
  if (key === "de" || key === "deutsch" || key === "deutschland") return "de_DE";
  return "en_US";
}

function clipToMax(sentence: string): string {
  if (sentence.length <= DESC_MAX) return sentence;
  const slice = sentence.slice(0, DESC_MAX);
  const cut = slice.lastIndexOf(" ");
  let clipped = (cut >= DESC_MIN ? slice.slice(0, cut) : slice).replace(/[\s,;:-]+$/, "").trim();
  if (!/[.!?]$/.test(clipped)) clipped = `${clipped}.`;
  return clipped.length <= DESC_MAX ? clipped : clipped.slice(0, DESC_MAX).trim();
}

/** Join complete sentences so the result stays inside 120–155 characters. */
export function fitDescription(sentences: string[]): string {
  const parts = sentences.map((sentence) => sentence.replace(/\s+/g, " ").trim()).filter(Boolean);
  let text = "";

  for (const part of parts) {
    const next = text ? `${text} ${part}` : part;
    if (next.length <= DESC_MAX) text = next;
    else if (!text) text = clipToMax(part);
  }

  if (text.length >= DESC_MIN) return text;

  const pads = [
    "Offers are third-party listings.",
    "Confirm details on the provider site.",
  ];
  for (const pad of pads) {
    if (text.length >= DESC_MIN) break;
    const next = `${text} ${pad}`.trim();
    if (next.length <= DESC_MAX) text = next;
  }

  return text;
}

function plainTitle(page: BrandPage): string {
  if (page.german) {
    return `${page.brand} Erfahrungen (Deutschland) | ${SITE_NAME}`;
  }
  const countryPart = page.country ? ` – ${page.country}` : "";
  return `${page.brand} Review${countryPart} | ${SITE_NAME}`;
}

function categoryTitle(page: BrandPage): string {
  if (!page.category) return plainTitle(page);
  if (page.german) {
    return `${page.brand} Erfahrungen (Deutschland) (${page.category}) | ${SITE_NAME}`;
  }
  const countryPart = page.country ? ` – ${page.country}` : "";
  return `${page.brand} Review${countryPart} (${page.category}) | ${SITE_NAME}`;
}

function brandDescription(page: BrandPage): string {
  if (page.german) {
    return fitDescription([
      `Erfahrungen zu ${page.brand} in Deutschland.`,
      page.category ? `Kategorie: ${page.category}.` : "",
      "Die Seite beschreibt die Einordnung, bevor du den Anbieter besuchst.",
    ]);
  }

  const place = page.country ? ` for visitors in ${page.country}` : "";
  return fitDescription([
    `Read the ${page.brand} review${place}.`,
    page.category ? `Category: ${page.category}.` : "",
    "See what this listing covers before you visit the provider site.",
  ]);
}

function reviewPages(offers: OfferLike[], hub: string, fallbackCountry: string): BrandPage[] {
  return offers.flatMap((offer) => {
    if (!offer.slug) return [];
    return [
      {
        path: `/${hub}/${offer.slug}-review`,
        brand: offer.name,
        country: offer.country || fallbackCountry,
        category: offer.category,
        localeHint: hub,
      },
    ];
  });
}

function offerBySlug<T extends { slug?: string }>(offers: T[], slug: string): T | undefined {
  return offers.find((offer) => offer.slug === slug);
}

const gonaughty = offerBySlug(australiaOffers, "gonaughty");
const gayBloom = offerBySlug(usaOffers, "gaybloom");
const fremdgehen = offerBySlug(germanyOffers, "fremdgehen69");

const INDEXABLE_OFFERS = new Set([
  "/offers/dreamz-ai",
  "/offers/manfinder",
  "/offers/grannyhunter",
  "/offers/milf-dating",
  "/offers/casual-dating",
  "/offers/transdate-dating",
  "/offers/realsexclub",
  "/offers/realsexclub-denmark",
  "/offers/gonaughty-australia",
  "/offers/transdate-dating-sites",
  "/usa/gaybloom",
  "/de/fremdgehen69",
]);

const brandPages: BrandPage[] = [
  ...reviewPages(usaOffers, "usa", "USA"),
  ...reviewPages(germanyOffers, "germany", "Germany"),
  ...reviewPages(franceOffers, "france", "France"),
  ...reviewPages(canadaOffers, "canada", "Canada"),
  ...reviewPages(australiaOffers, "australia", "Australia"),
  ...reviewPages(ukOffers, "uk", "UK"),
  ...reviewPages(denmarkOffers, "denmark", "Denmark"),
  {
    path: "/offers/dreamz-ai",
    brand: dreamzOffer.name,
    category: dreamzOffer.badge,
  },
  {
    path: "/offers/manfinder",
    brand: manFinderOffer.name,
    category: manFinderOffer.category,
  },
  {
    path: "/offers/grannyhunter",
    brand: grannyHunterOffer.name,
    category: grannyHunterOffer.category,
  },
  {
    path: "/offers/milf-dating",
    brand: milfDatingOffer.name,
    category: milfDatingOffer.category,
  },
  {
    path: "/offers/casual-dating",
    brand: casualDatingOffer.name,
    category: casualDatingOffer.category,
  },
  {
    path: "/offers/transdate-dating",
    brand: transDateOffer.name,
    category: transDateOffer.category,
  },
  {
    path: "/offers/realsexclub",
    brand: realSexClubOffer.name,
    category: realSexClubOffer.category,
  },
  {
    path: "/offers/realsexclub-denmark",
    brand: realSexClubOffer.name,
    country: "Denmark",
    category: realSexClubOffer.category,
    localeHint: "denmark",
  },
  {
    path: "/offers/gonaughty-australia",
    brand: gonaughty?.name ?? "GoNaughty",
    country: gonaughty?.country ?? "Australia",
    category: gonaughty?.category,
    localeHint: "australia",
  },
  {
    path: "/offers/transdate-dating-sites",
    brand: transDateOffer.name,
    country: "Norway",
    category: transDateOffer.category,
  },
  {
    path: "/offers/free-dating-sites-for-gay",
    brand: manFinderOffer.name,
    category: manFinderOffer.category,
  },
  {
    path: "/offers/gay-dating-usa",
    brand: manFinderOffer.name,
    country: "USA",
    category: manFinderOffer.category,
    localeHint: "usa",
  },
  {
    path: "/usa/gaybloom",
    brand: gayBloom?.name ?? "GayBloom",
    country: gayBloom?.country ?? "USA",
    category: gayBloom?.category,
    localeHint: "usa",
  },
  {
    path: "/de/fremdgehen69",
    brand: fremdgehen?.name ?? "Fremdgehen69",
    category: fremdgehen?.category,
    german: true,
    localeHint: "de",
  },
];

function pageRank(page: BrandPage): number {
  if (page.path.includes("-review")) return 0;
  if (INDEXABLE_OFFERS.has(page.path)) return 1;
  return 2;
}

const titleByPath = new Map<string, string>();
const seenTitles = new Set<string>();

for (const page of [...brandPages].sort((a, b) => pageRank(a) - pageRank(b))) {
  let title = plainTitle(page);
  if (seenTitles.has(title)) title = categoryTitle(page);
  seenTitles.add(title);
  titleByPath.set(page.path, title);
}

const pageByPath = new Map(brandPages.map((page) => [page.path, page]));

export function getBrandSeo(path: string): BrandSeo | null {
  const page = pageByPath.get(path);
  const title = titleByPath.get(path);
  if (!page || !title) return null;

  const headline = title.replace(` | ${SITE_NAME}`, "");
  return {
    title,
    headline,
    description: brandDescription(page),
    locale: ogLocaleForCountry(page.german ? "de" : page.localeHint ?? page.country),
  };
}

export function getHubSeo(slug: string): BrandSeo | null {
  const country = countries.find((entry) => entry.slug === slug);
  if (!country) return null;

  const title = `${country.title} | ${SITE_NAME}`;
  return {
    title,
    headline: country.title,
    description: fitDescription([
      country.description,
      `Browse the ${country.name} listing and see how offers are categorized.`,
    ]),
    locale: ogLocaleForCountry(slug),
  };
}

export function topicSeo(title: string, description: string, locale: OgLocale = "en_US"): BrandSeo {
  const absolute = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absolute.replace(/\s+/g, " ").trim(),
    headline: absolute.replace(` | ${SITE_NAME}`, "").trim(),
    description: fitDescription([description]),
    locale,
  };
}
