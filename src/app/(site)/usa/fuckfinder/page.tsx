import FuckFinderCountryLanding from "@/components/landing/FuckFinderCountryLanding";
import {
  fuckFinderCountryMetadata,
  getFuckFinderCountryPage,
} from "@/data/fuckFinderCountryPages";

const page = getFuckFinderCountryPage("usa");

export const metadata = fuckFinderCountryMetadata(page);

export default function UsaFuckFinderPage() {
  return <FuckFinderCountryLanding page={page} />;
}
