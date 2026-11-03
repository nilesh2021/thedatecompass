import FuckFinderCountryLanding from "@/components/landing/FuckFinderCountryLanding";
import {
  fuckFinderCountryMetadata,
  getFuckFinderCountryPage,
} from "@/data/fuckFinderCountryPages";

const page = getFuckFinderCountryPage("austria");

export const metadata = fuckFinderCountryMetadata(page);

export default function AustriaFuckFinderPage() {
  return <FuckFinderCountryLanding page={page} />;
}
