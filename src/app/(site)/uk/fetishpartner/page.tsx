import FetishPartnerCountryLanding from "@/components/landing/FetishPartnerCountryLanding";
import {
  fetishPartnerCountryMetadata,
  getFetishPartnerCountryPage,
} from "@/data/fetishPartnerCountryPages";

const page = getFetishPartnerCountryPage("uk");

export const metadata = fetishPartnerCountryMetadata(page);

export default function UkFetishPartnerPage() {
  return <FetishPartnerCountryLanding page={page} />;
}
