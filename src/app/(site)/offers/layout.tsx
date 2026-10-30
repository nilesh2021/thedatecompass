import RelatedOffers from "@/components/seo/RelatedOffers";

export default function OffersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <RelatedOffers />
    </>
  );
}
