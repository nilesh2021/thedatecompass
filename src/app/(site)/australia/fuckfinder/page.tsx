import FuckFinderCountryLanding from "@/components/landing/FuckFinderCountryLanding";
import {
  fuckFinderCountryMetadata,
  getFuckFinderCountryPage,
} from "@/data/fuckFinderCountryPages";

const page = getFuckFinderCountryPage("australia");

export const metadata = fuckFinderCountryMetadata(page);

export default function AustraliaFuckFinderPage() {
  return <FuckFinderCountryLanding page={page} />;
}
