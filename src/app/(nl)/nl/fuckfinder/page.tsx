import FuckFinderCountryLanding from "@/components/landing/FuckFinderCountryLanding";
import {
  fuckFinderCountryMetadata,
  getFuckFinderCountryPage,
} from "@/data/fuckFinderCountryPages";

const page = getFuckFinderCountryPage("netherlands");

export const metadata = fuckFinderCountryMetadata(page);

export default function NetherlandsFuckFinderPage() {
  return <FuckFinderCountryLanding page={page} />;
}
