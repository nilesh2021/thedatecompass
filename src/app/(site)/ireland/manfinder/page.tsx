import ManfinderCountryLanding from "@/components/landing/ManfinderCountryLanding";
import {
  manfinderCountryMetadata,
  getManfinderCountryPage,
} from "@/data/manfinderCountryPages";

const page = getManfinderCountryPage("ireland");

export const metadata = manfinderCountryMetadata(page);

export default function IrelandManfinderPage() {
  return <ManfinderCountryLanding page={page} />;
}
