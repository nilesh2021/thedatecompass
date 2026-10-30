import type { ProviderReviewCountry } from "@/components/country/usa/UsaProviderReviewPage";
import { createCountryReviewKit } from "@/components/country/common/countryReviewFactory";
import { UK_PAGE_LAST_UPDATED, ukOffers } from "@/data/countries/uk";

const country: ProviderReviewCountry = {
  slug: "uk",
  label: "UK",
  lastUpdated: UK_PAGE_LAST_UPDATED,
  inventoryLabel: "UK inventory",
  audiencePhrase: "adults in the UK",
  backHref: "/uk",
  backLabel: "Back to UK comparison",
  compareOtherLabel: "Compare other adult dating sites in the UK",
  safetyHref: "/uk#uk-dating-guide",
  safetyLabel: "UK dating guide",
  heroPlacement: "lp_hero",
  footerPlacement: "lp_end",
};

export const {
  getOffer: getUkReviewOffer,
  buildFaqs: buildUkReviewFaqs,
  metadata: ukReviewMetadata,
  Document: UkReviewDocument,
} = createCountryReviewKit({
  country,
  locale: "en_GB",
  inLanguage: "en-GB",
  offers: ukOffers,
  hubPath: "/uk",
});
