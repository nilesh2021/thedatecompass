import FuckFinderCountryLanding from "@/components/landing/FuckFinderCountryLanding";
import {
  fuckFinderCountryMetadata,
  getFuckFinderCountryPage,
} from "@/data/fuckFinderCountryPages";

const page = getFuckFinderCountryPage("ireland");

export const metadata = fuckFinderCountryMetadata(page);

export default function IrelandFuckFinderPage() {
  return <FuckFinderCountryLanding page={page} />;
}
