import FuckFinderCountryLanding from "@/components/landing/FuckFinderCountryLanding";
import {
  fuckFinderCountryMetadata,
  getFuckFinderCountryPage,
} from "@/data/fuckFinderCountryPages";

const page = getFuckFinderCountryPage("canada");

export const metadata = fuckFinderCountryMetadata(page);

export default function CanadaFuckFinderPage() {
  return <FuckFinderCountryLanding page={page} />;
}
