import FuckFinderCountryLanding from "@/components/landing/FuckFinderCountryLanding";
import {
  fuckFinderCountryMetadata,
  getFuckFinderCountryPage,
} from "@/data/fuckFinderCountryPages";

const page = getFuckFinderCountryPage("norway");

export const metadata = fuckFinderCountryMetadata(page);

export default function NorwayFuckFinderPage() {
  return <FuckFinderCountryLanding page={page} />;
}
