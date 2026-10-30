import type { ProviderReviewCountry } from "@/components/country/usa/UsaProviderReviewPage";
import { createCountryReviewKit } from "@/components/country/common/countryReviewFactory";
import { CANADA_PAGE_LAST_UPDATED, canadaOffers } from "@/data/countries/canada";

const country: ProviderReviewCountry = {
  slug: "canada",
  label: "Canada",
  lastUpdated: CANADA_PAGE_LAST_UPDATED,
  inventoryLabel: "Canada inventory",
  audiencePhrase: "adults in Canada",
  backHref: "/canada",
  backLabel: "Back to Canada comparison",
  compareOtherLabel: "Compare other adult dating sites in Canada",
  safetyHref: "/canada#canada-dating-guide",
  safetyLabel: "Canada dating guide",
  heroPlacement: "lp_hero",
  footerPlacement: "lp_end",
};

export const {
  getOffer: getCanadaReviewOffer,
  buildFaqs: buildCanadaReviewFaqs,
  metadata: canadaReviewMetadata,
  Document: CanadaReviewDocument,
} = createCountryReviewKit({
  country,
  locale: "en_CA",
  inLanguage: "en-CA",
  offers: canadaOffers,
  hubPath: "/canada",
});
