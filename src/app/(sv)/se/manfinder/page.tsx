import ManfinderCountryLanding from "@/components/landing/ManfinderCountryLanding";
import {
  manfinderCountryMetadata,
  getManfinderCountryPage,
} from "@/data/manfinderCountryPages";

const page = getManfinderCountryPage("sweden");

export const metadata = manfinderCountryMetadata(page);

export default function SwedenManfinderPage() {
  return <ManfinderCountryLanding page={page} />;
}
