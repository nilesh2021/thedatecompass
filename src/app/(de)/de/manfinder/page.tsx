import ManfinderCountryLanding from "@/components/landing/ManfinderCountryLanding";
import {
  manfinderCountryMetadata,
  getManfinderCountryPage,
} from "@/data/manfinderCountryPages";

const page = getManfinderCountryPage("germany");

export const metadata = manfinderCountryMetadata(page);

export default function GermanyManfinderPage() {
  return <ManfinderCountryLanding page={page} />;
}
