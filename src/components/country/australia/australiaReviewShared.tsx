import type { ProviderReviewCountry } from "@/components/country/usa/UsaProviderReviewPage";
import { createCountryReviewKit } from "@/components/country/common/countryReviewFactory";
import { AUSTRALIA_PAGE_LAST_UPDATED, australiaOffers } from "@/data/countries/australia";

const country: ProviderReviewCountry = {
  slug: "australia",
  label: "Australia",
  lastUpdated: AUSTRALIA_PAGE_LAST_UPDATED,
  inventoryLabel: "Australia inventory",
  audiencePhrase: "adults in Australia",
  backHref: "/australia",
  backLabel: "Back to Australia comparison",
  compareOtherLabel: "Compare other adult dating sites in Australia",
  safetyHref: "/australia#australia-dating-guide",
  safetyLabel: "Australia dating guide",
  heroPlacement: "lp_hero",
  footerPlacement: "lp_end",
};

export const {
  getOffer: getAustraliaReviewOffer,
  buildFaqs: buildAustraliaReviewFaqs,
  metadata: australiaReviewMetadata,
  Document: AustraliaReviewDocument,
} = createCountryReviewKit({
  country,
  locale: "en_AU",
  inLanguage: "en-AU",
  offers: australiaOffers,
  hubPath: "/australia",
});
