import OffersCategoryLanding from "@/components/landing/OffersCategoryLanding";
import { getOfferTabByRoute } from "@/data/datingOffersTabs";
import { notFound } from "next/navigation";

export function generateMetadata() {
  const tab = getOfferTabByRoute("mature");
  if (!tab) return {};

  return {
    title: tab.seoTitle,
    description: tab.seoDescription,
  };
}

export default function MatureOffersPage() {
  const tab = getOfferTabByRoute("mature");
  if (!tab) notFound();

  return <OffersCategoryLanding tab={tab} />;
}
