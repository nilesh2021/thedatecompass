import ManfinderCountryLanding from "@/components/landing/ManfinderCountryLanding";
import {
  manfinderCountryMetadata,
  getManfinderCountryPage,
} from "@/data/manfinderCountryPages";

const page = getManfinderCountryPage("switzerland");

export const metadata = manfinderCountryMetadata(page);

export default function SwitzerlandManfinderPage() {
  return <ManfinderCountryLanding page={page} />;
}
