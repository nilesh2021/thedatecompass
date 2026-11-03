import ManfinderCountryLanding from "@/components/landing/ManfinderCountryLanding";
import {
  manfinderCountryMetadata,
  getManfinderCountryPage,
} from "@/data/manfinderCountryPages";

const page = getManfinderCountryPage("netherlands");

export const metadata = manfinderCountryMetadata(page);

export default function NetherlandsManfinderPage() {
  return <ManfinderCountryLanding page={page} />;
}
