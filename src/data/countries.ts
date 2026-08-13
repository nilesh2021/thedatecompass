import { Country } from "@/types/country";

export const countries: Country[] = [
  {
    name: "United States",
    slug: "usa",
    code: "US",
    flag: "🇺🇸",
    title: "Adult Dating Sites in the USA",
    description:
      "Compare adult dating platforms available in the United States.",
    heroTitle: "Find Adult Dating Platforms Available in the USA",
    heroDescription:
      "Browse trusted third-party dating platforms available for adults in the United States.",
    isAvailable: true,
  },
  {
    name: "United Kingdom",
    slug: "uk",
    code: "GB",
    flag: "🇬🇧",
    title: "Adult Dating Sites in the UK",
    description:
      "Compare adult dating platforms available in the United Kingdom.",
    heroTitle: "Find Adult Dating Platforms Available in the UK",
    heroDescription:
      "Browse trusted third-party dating platforms available for adults in the United Kingdom.",
    isAvailable: true,
  },
  {
    name: "Canada",
    slug: "canada",
    code: "CA",
    flag: "🇨🇦",
    title: "Adult Dating Sites in Canada",
    description: "Compare adult dating platforms available in Canada.",
    heroTitle: "Find Adult Dating Platforms Available in Canada",
    heroDescription:
      "Browse trusted third-party dating platforms available for adults in Canada.",
    isAvailable: true,
  },
  {
    name: "Australia",
    slug: "australia",
    code: "AU",
    flag: "🇦🇺",
    title: "Adult Dating Sites in Australia",
    description: "Compare adult dating platforms available in Australia.",
    heroTitle: "Find Adult Dating Platforms Available in Australia",
    heroDescription:
      "Browse trusted third-party dating platforms available for adults in Australia.",
    isAvailable: true,
  },
  {
    name: "Germany",
    slug: "germany",
    code: "DE",
    flag: "🇩🇪",
    title: "Adult Dating Sites in Germany",
    description: "Compare adult dating platforms available in Germany.",
    heroTitle: "Find Adult Dating Platforms Available in Germany",
    heroDescription:
      "Browse trusted third-party dating platforms available for adults in Germany.",
    isAvailable: true,
  },
  {
    name: "France",
    slug: "france",
    code: "FR",
    flag: "🇫🇷",
    title: "Adult Dating Sites in France",
    description: "Compare adult dating platforms available in France.",
    heroTitle: "Find Adult Dating Platforms Available in France",
    heroDescription:
      "Browse trusted third-party dating platforms available for adults in France.",
    isAvailable: true,
  },
  {
    name: "Netherlands",
    slug: "netherlands",
    code: "NL",
    flag: "🇳🇱",
    title: "Adult Dating Sites in the Netherlands",
    description:
      "Compare adult dating platforms available in the Netherlands.",
    heroTitle: "Find Adult Dating Platforms Available in the Netherlands",
    heroDescription:
      "Browse trusted third-party dating platforms available for adults in the Netherlands.",
    isAvailable: false,
  },
  {
    name: "Ireland",
    slug: "ireland",
    code: "IE",
    flag: "🇮🇪",
    title: "Adult Dating Sites in Ireland",
    description: "Compare adult dating platforms available in Ireland.",
    heroTitle: "Find Adult Dating Platforms Available in Ireland",
    heroDescription:
      "Browse trusted third-party dating platforms available for adults in Ireland.",
    isAvailable: false,
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    code: "NZ",
    flag: "🇳🇿",
    title: "Adult Dating Sites in New Zealand",
    description: "Compare adult dating platforms available in New Zealand.",
    heroTitle: "Find Adult Dating Platforms Available in New Zealand",
    heroDescription:
      "Browse trusted third-party dating platforms available for adults in New Zealand.",
    isAvailable: false,
  },
];

export const availableCountries = countries.filter((c) => c.isAvailable);
