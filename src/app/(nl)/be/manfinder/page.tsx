import ManfinderCountryLanding from "@/components/landing/ManfinderCountryLanding";
import {
  manfinderCountryMetadata,
  getManfinderCountryPage,
} from "@/data/manfinderCountryPages";

const page = getManfinderCountryPage("belgium");

export const metadata = manfinderCountryMetadata(page);

export default function BelgiumManfinderPage() {
  return <ManfinderCountryLanding page={page} />;
}
