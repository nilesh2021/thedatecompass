import FetishPartnerCountryLanding from "@/components/landing/FetishPartnerCountryLanding";
import {
  fetishPartnerCountryMetadata,
  getFetishPartnerCountryPage,
} from "@/data/fetishPartnerCountryPages";

const page = getFetishPartnerCountryPage("netherlands");

export const metadata = fetishPartnerCountryMetadata(page);

export default function NetherlandsFetishPartnerPage() {
  return <FetishPartnerCountryLanding page={page} />;
}
