import OfferTabsNav from "@/components/landing/offers/OfferTabsNav";

export default function TopOffersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-stone-50">
      <OfferTabsNav />
      {children}
    </div>
  );
}
