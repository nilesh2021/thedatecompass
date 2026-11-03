import ManfinderCountryLanding from "@/components/landing/ManfinderCountryLanding";
import {
  manfinderCountryMetadata,
  getManfinderCountryPage,
} from "@/data/manfinderCountryPages";

const page = getManfinderCountryPage("australia");

export const metadata = manfinderCountryMetadata(page);

export default function AustraliaManfinderPage() {
  return <ManfinderCountryLanding page={page} />;
}
