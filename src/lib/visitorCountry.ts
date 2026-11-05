const ISO_COUNTRY = /^[a-z]{2}$/;

/**
 * Visitor ISO code → the country= token country pages use,
 * and the suffix on a country-specific /go/ slug (fuckfinder-dk).
 * gb is uk in both places.
 */
const PAGE_COUNTRY_BY_ISO = {
  us: { country: "usa", goSlugSuffix: "us" },
  gb: { country: "uk", goSlugSuffix: "uk" },
  ca: { country: "canada", goSlugSuffix: "ca" },
  au: { country: "australia", goSlugSuffix: "au" },
  de: { country: "germany", goSlugSuffix: "de" },
  fr: { country: "france", goSlugSuffix: "fr" },
  dk: { country: "denmark", goSlugSuffix: "dk" },
} as const;

export type VisitorPageCountry = {
  country: string;
  goSlugSuffix: string | null;
};

/** Country-page token for /go/?country=. Any other visitor code is global. */
export function visitorPageCountry(country: string): VisitorPageCountry {
  const code = country.trim().toLowerCase();
  const match = PAGE_COUNTRY_BY_ISO[code as keyof typeof PAGE_COUNTRY_BY_ISO];
  if (!match) return { country: "global", goSlugSuffix: null };
  return match;
}

/** Two-letter `x-vercel-ip-country`, or `global` when the header is missing or invalid. */
export function readVisitorCountry(headerValue: string | null): string {
  const code = headerValue?.trim().toLowerCase() ?? "";
  return ISO_COUNTRY.test(code) ? code : "global";
}
