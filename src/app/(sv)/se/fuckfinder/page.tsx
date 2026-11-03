import FuckFinderCountryLanding from "@/components/landing/FuckFinderCountryLanding";
import {
  fuckFinderCountryMetadata,
  getFuckFinderCountryPage,
} from "@/data/fuckFinderCountryPages";

const page = getFuckFinderCountryPage("sweden");

export const metadata = fuckFinderCountryMetadata(page);

export default function SwedenFuckFinderPage() {
  return <FuckFinderCountryLanding page={page} />;
}
