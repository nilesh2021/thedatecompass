import FetishPartnerCountryLanding from "@/components/landing/FetishPartnerCountryLanding";
import {
  fetishPartnerCountryMetadata,
  getFetishPartnerCountryPage,
} from "@/data/fetishPartnerCountryPages";

const page = getFetishPartnerCountryPage("ireland");

export const metadata = fetishPartnerCountryMetadata(page);

export default function IrelandFetishPartnerPage() {
  return <FetishPartnerCountryLanding page={page} />;
}
