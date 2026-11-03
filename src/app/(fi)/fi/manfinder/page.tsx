import ManfinderCountryLanding from "@/components/landing/ManfinderCountryLanding";
import {
  manfinderCountryMetadata,
  getManfinderCountryPage,
} from "@/data/manfinderCountryPages";

const page = getManfinderCountryPage("finland");

export const metadata = manfinderCountryMetadata(page);

export default function FinlandManfinderPage() {
  return <ManfinderCountryLanding page={page} />;
}
