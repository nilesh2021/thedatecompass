import ManfinderCountryLanding from "@/components/landing/ManfinderCountryLanding";
import {
  manfinderCountryMetadata,
  getManfinderCountryPage,
} from "@/data/manfinderCountryPages";

const page = getManfinderCountryPage("norway");

export const metadata = manfinderCountryMetadata(page);

export default function NorwayManfinderPage() {
  return <ManfinderCountryLanding page={page} />;
}
