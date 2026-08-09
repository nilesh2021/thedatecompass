import OffersCategoryLanding from "@/components/landing/OffersCategoryLanding";
import { getOfferTabByRoute } from "@/data/datingOffersTabs";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Best Casual Dating Sites for Adults in 2026",
  description:
    "Compare the best casual dating platforms for adults. Fast signup, verified members, and private messaging.",
  keywords: [
    "casual dating",
    "casual dating sites",
    "adult casual dating",
    "hookup sites",
    "flirt apps",
  ],
};

export default function TopOffersPage() {
  const tab = getOfferTabByRoute("casual");
  if (!tab) notFound();

  return <OffersCategoryLanding tab={tab} />;
}
