import ManfinderCountryLanding from "@/components/landing/ManfinderCountryLanding";
import {
  manfinderCountryMetadata,
  getManfinderCountryPage,
} from "@/data/manfinderCountryPages";

const page = getManfinderCountryPage("denmark");

export const metadata = manfinderCountryMetadata(page);

export default function DenmarkManfinderPage() {
  return <ManfinderCountryLanding page={page} />;
}
