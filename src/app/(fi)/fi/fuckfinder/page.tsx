import FuckFinderCountryLanding from "@/components/landing/FuckFinderCountryLanding";
import {
  fuckFinderCountryMetadata,
  getFuckFinderCountryPage,
} from "@/data/fuckFinderCountryPages";

const page = getFuckFinderCountryPage("finland");

export const metadata = fuckFinderCountryMetadata(page);

export default function FinlandFuckFinderPage() {
  return <FuckFinderCountryLanding page={page} />;
}
