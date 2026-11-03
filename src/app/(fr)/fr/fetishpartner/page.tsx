import FetishPartnerCountryLanding from "@/components/landing/FetishPartnerCountryLanding";
import {
  fetishPartnerCountryMetadata,
  getFetishPartnerCountryPage,
} from "@/data/fetishPartnerCountryPages";

const page = getFetishPartnerCountryPage("france");

export const metadata = fetishPartnerCountryMetadata(page);

export default function FranceFetishPartnerPage() {
  return <FetishPartnerCountryLanding page={page} />;
}
