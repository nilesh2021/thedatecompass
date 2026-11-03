import FetishPartnerCountryLanding from "@/components/landing/FetishPartnerCountryLanding";
import {
  fetishPartnerCountryMetadata,
  getFetishPartnerCountryPage,
} from "@/data/fetishPartnerCountryPages";

const page = getFetishPartnerCountryPage("czech-republic");

export const metadata = fetishPartnerCountryMetadata(page);

export default function CzechFetishPartnerPage() {
  return <FetishPartnerCountryLanding page={page} />;
}
