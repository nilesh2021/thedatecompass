import FuckFinderCountryLanding from "@/components/landing/FuckFinderCountryLanding";
import {
  fuckFinderCountryMetadata,
  getFuckFinderCountryPage,
} from "@/data/fuckFinderCountryPages";

const page = getFuckFinderCountryPage("new-zealand");

export const metadata = fuckFinderCountryMetadata(page);

export default function NewZealandFuckFinderPage() {
  return <FuckFinderCountryLanding page={page} />;
}
