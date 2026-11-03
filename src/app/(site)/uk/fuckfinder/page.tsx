import FuckFinderCountryLanding from "@/components/landing/FuckFinderCountryLanding";
import {
  fuckFinderCountryMetadata,
  getFuckFinderCountryPage,
} from "@/data/fuckFinderCountryPages";

const page = getFuckFinderCountryPage("uk");

export const metadata = fuckFinderCountryMetadata(page);

export default function UkFuckFinderPage() {
  return <FuckFinderCountryLanding page={page} />;
}
