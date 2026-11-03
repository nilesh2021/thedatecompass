import FetishPartnerCountryLanding from "@/components/landing/FetishPartnerCountryLanding";
import {
  fetishPartnerCountryMetadata,
  getFetishPartnerCountryPage,
} from "@/data/fetishPartnerCountryPages";

const page = getFetishPartnerCountryPage("switzerland");

export const metadata = fetishPartnerCountryMetadata(page);

export default function SwitzerlandFetishPartnerPage() {
  return <FetishPartnerCountryLanding page={page} />;
}
