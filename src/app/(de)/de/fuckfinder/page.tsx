import FuckFinderCountryLanding from "@/components/landing/FuckFinderCountryLanding";
import {
  fuckFinderCountryMetadata,
  getFuckFinderCountryPage,
} from "@/data/fuckFinderCountryPages";

const page = getFuckFinderCountryPage("germany");

export const metadata = fuckFinderCountryMetadata(page);

export default function GermanyFuckFinderPage() {
  return <FuckFinderCountryLanding page={page} />;
}
