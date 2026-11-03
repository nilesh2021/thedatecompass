import FetishPartnerCountryLanding from "@/components/landing/FetishPartnerCountryLanding";
import {
  fetishPartnerCountryMetadata,
  getFetishPartnerCountryPage,
} from "@/data/fetishPartnerCountryPages";

const page = getFetishPartnerCountryPage("hungary");

export const metadata = fetishPartnerCountryMetadata(page);

export default function HungaryFetishPartnerPage() {
  return <FetishPartnerCountryLanding page={page} />;
}
