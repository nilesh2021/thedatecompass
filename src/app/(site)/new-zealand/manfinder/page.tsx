import ManfinderCountryLanding from "@/components/landing/ManfinderCountryLanding";
import {
  manfinderCountryMetadata,
  getManfinderCountryPage,
} from "@/data/manfinderCountryPages";

const page = getManfinderCountryPage("new-zealand");

export const metadata = manfinderCountryMetadata(page);

export default function NewZealandManfinderPage() {
  return <ManfinderCountryLanding page={page} />;
}
