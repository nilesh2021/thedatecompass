import ManfinderCountryLanding from "@/components/landing/ManfinderCountryLanding";
import {
  manfinderCountryMetadata,
  getManfinderCountryPage,
} from "@/data/manfinderCountryPages";

const page = getManfinderCountryPage("canada");

export const metadata = manfinderCountryMetadata(page);

export default function CanadaManfinderPage() {
  return <ManfinderCountryLanding page={page} />;
}
