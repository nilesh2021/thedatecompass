import ManfinderCountryLanding from "@/components/landing/ManfinderCountryLanding";
import {
  manfinderCountryMetadata,
  getManfinderCountryPage,
} from "@/data/manfinderCountryPages";

const page = getManfinderCountryPage("uk");

export const metadata = manfinderCountryMetadata(page);

export default function UkManfinderPage() {
  return <ManfinderCountryLanding page={page} />;
}
