import ManfinderCountryLanding from "@/components/landing/ManfinderCountryLanding";
import {
  manfinderCountryMetadata,
  getManfinderCountryPage,
} from "@/data/manfinderCountryPages";

const page = getManfinderCountryPage("usa");

export const metadata = manfinderCountryMetadata(page);

export default function UsaManfinderPage() {
  return <ManfinderCountryLanding page={page} />;
}
