import type { ProviderReviewCountry } from "@/components/country/usa/UsaProviderReviewPage";
import { createCountryReviewKit } from "@/components/country/common/countryReviewFactory";
import { DENMARK_PAGE_LAST_UPDATED, denmarkOffers } from "@/data/countries/denmark";

const country: ProviderReviewCountry = {
  slug: "denmark",
  label: "Denmark",
  lastUpdated: DENMARK_PAGE_LAST_UPDATED,
  inventoryLabel: "Denmark inventory",
  audiencePhrase: "adults in Denmark",
  backHref: "/denmark",
  backLabel: "Back to Denmark comparison",
  compareOtherLabel: "Compare other adult dating sites in Denmark",
  safetyHref: "/denmark#denmark-dating-guide",
  safetyLabel: "Denmark dating guide",
  heroPlacement: "lp_hero",
  footerPlacement: "lp_end",
};

export const {
  getOffer: getDenmarkReviewOffer,
  buildFaqs: buildDenmarkReviewFaqs,
  metadata: denmarkReviewMetadata,
  Document: DenmarkReviewDocument,
} = createCountryReviewKit({
  country,
  locale: "en_DK",
  inLanguage: "en-DK",
  offers: denmarkOffers,
  hubPath: "/denmark",
});