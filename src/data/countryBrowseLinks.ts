/**
 * Active country routes used for category ↔ country internal linking.
 * Only includes live country pages (isAvailable === true inventory).
 */

export type CountryBrowseLink = {
  href: string;
  label: string;
};

const activeCountries = [
  { href: "/usa", name: "USA", inPhrase: "the USA" },
  { href: "/germany", name: "Germany", inPhrase: "Germany" },
  { href: "/france", name: "France", inPhrase: "France" },
  { href: "/canada", name: "Canada", inPhrase: "Canada" },
  { href: "/australia", name: "Australia", inPhrase: "Australia" },
  { href: "/uk", name: "UK", inPhrase: "the UK" },
] as const;

export type CountryBrowseTheme =
  | "gay"
  | "ai"
  | "dreamz"
  | "casual"
  | "adult"
  | "mature"
  | "niche";

const labelForTheme = (
  theme: CountryBrowseTheme,
  inPhrase: string,
  name: string
): string => {
  switch (theme) {
    case "gay":
      return `Gay dating in ${inPhrase}`;
    case "ai":
      return `AI companions in ${inPhrase}`;
    case "dreamz":
      return `AI dating offers in ${name}`;
    case "casual":
      return `Casual dating in ${inPhrase}`;
    case "adult":
      return `Adult dating in ${inPhrase}`;
    case "mature":
      return `Mature dating in ${inPhrase}`;
    case "niche":
      return `Niche dating in ${inPhrase}`;
    default:
      return `Dating sites in ${inPhrase}`;
  }
};

/** Build descriptive country links for a category/offer theme. */
export function getCountryBrowseLinks(
  theme: CountryBrowseTheme
): CountryBrowseLink[] {
  return activeCountries.map((country) => ({
    href: country.href,
    label: labelForTheme(theme, country.inPhrase, country.name),
  }));
}

/** Map top-offers tab route → browse theme when offers overlap country shortlists. */
export function getCountryBrowseThemeForOfferTab(
  route: string
): CountryBrowseTheme | null {
  switch (route) {
    case "casual":
      return "casual";
    case "adult":
      return "adult";
    case "mature":
      return "mature";
    case "gay-dating":
      return "gay";
    default:
      return null;
  }
}
