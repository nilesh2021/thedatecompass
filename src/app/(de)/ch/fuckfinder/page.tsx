import FuckFinderCountryLanding from "@/components/landing/FuckFinderCountryLanding";
import {
  fuckFinderCountryMetadata,
  getFuckFinderCountryPage,
} from "@/data/fuckFinderCountryPages";

const page = getFuckFinderCountryPage("switzerland");

export const metadata = fuckFinderCountryMetadata(page);

export default function SwitzerlandFuckFinderPage() {
  return <FuckFinderCountryLanding page={page} />;
}
