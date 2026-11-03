import FetishPartnerCountryLanding from "@/components/landing/FetishPartnerCountryLanding";
import {
  fetishPartnerCountryMetadata,
  getFetishPartnerCountryPage,
} from "@/data/fetishPartnerCountryPages";

const page = getFetishPartnerCountryPage("italy");

export const metadata = fetishPartnerCountryMetadata(page);

export default function ItalyFetishPartnerPage() {
  return <FetishPartnerCountryLanding page={page} />;
}
