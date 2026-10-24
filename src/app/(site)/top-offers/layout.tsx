import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import OfferTabsNav from "@/components/landing/offers/OfferTabsNav";

export default function TopOffersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <Header />
      <OfferTabsNav />
      {children}
      <Footer />
    </div>
  );
}
