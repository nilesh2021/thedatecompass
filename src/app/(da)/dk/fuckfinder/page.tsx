import FuckFinderCountryLanding from "@/components/landing/FuckFinderCountryLanding";
import {
  fuckFinderCountryMetadata,
  getFuckFinderCountryPage,
} from "@/data/fuckFinderCountryPages";

const page = getFuckFinderCountryPage("denmark");

export const metadata = fuckFinderCountryMetadata(page);

export default function DenmarkFuckFinderPage() {
  return <FuckFinderCountryLanding page={page} />;
}
