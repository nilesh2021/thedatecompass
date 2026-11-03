import FetishPartnerCountryLanding from "@/components/landing/FetishPartnerCountryLanding";
import {
  fetishPartnerCountryMetadata,
  getFetishPartnerCountryPage,
} from "@/data/fetishPartnerCountryPages";

const page = getFetishPartnerCountryPage("austria");

export const metadata = fetishPartnerCountryMetadata(page);

export default function AustriaFetishPartnerPage() {
  return <FetishPartnerCountryLanding page={page} />;
}
