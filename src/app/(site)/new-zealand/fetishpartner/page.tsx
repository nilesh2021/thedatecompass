import FetishPartnerCountryLanding from "@/components/landing/FetishPartnerCountryLanding";
import {
  fetishPartnerCountryMetadata,
  getFetishPartnerCountryPage,
} from "@/data/fetishPartnerCountryPages";

const page = getFetishPartnerCountryPage("new-zealand");

export const metadata = fetishPartnerCountryMetadata(page);

export default function NewZealandFetishPartnerPage() {
  return <FetishPartnerCountryLanding page={page} />;
}
