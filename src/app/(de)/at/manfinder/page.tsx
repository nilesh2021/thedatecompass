import ManfinderCountryLanding from "@/components/landing/ManfinderCountryLanding";
import {
  manfinderCountryMetadata,
  getManfinderCountryPage,
} from "@/data/manfinderCountryPages";

const page = getManfinderCountryPage("austria");

export const metadata = manfinderCountryMetadata(page);

export default function AustriaManfinderPage() {
  return <ManfinderCountryLanding page={page} />;
}
