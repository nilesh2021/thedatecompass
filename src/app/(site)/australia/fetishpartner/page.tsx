import FetishPartnerCountryLanding from "@/components/landing/FetishPartnerCountryLanding";
import {
  fetishPartnerCountryMetadata,
  getFetishPartnerCountryPage,
} from "@/data/fetishPartnerCountryPages";

const page = getFetishPartnerCountryPage("australia");

export const metadata = fetishPartnerCountryMetadata(page);

export default function AustraliaFetishPartnerPage() {
  return <FetishPartnerCountryLanding page={page} />;
}
