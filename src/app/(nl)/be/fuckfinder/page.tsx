import FuckFinderCountryLanding from "@/components/landing/FuckFinderCountryLanding";
import {
  fuckFinderCountryMetadata,
  getFuckFinderCountryPage,
} from "@/data/fuckFinderCountryPages";

const page = getFuckFinderCountryPage("belgium");

export const metadata = fuckFinderCountryMetadata(page);

export default function BelgiumFuckFinderPage() {
  return <FuckFinderCountryLanding page={page} />;
}
