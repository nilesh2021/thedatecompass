import Image from "next/image";
import CountryOfferCta from "@/components/country/common/CountryOfferCta";
import type { AustraliaOffer } from "@/data/countries/australia";

type AustraliaOfferCardProps = {
  offer: AustraliaOffer;
};

export default function AustraliaOfferCard({ offer }: AustraliaOfferCardProps) {
  return (
    <article className="group relative border border-cream/10 bg-ink-soft p-4 transition duration-300 hover:border-brand-rose/25 sm:p-6">
      <div className="grid gap-5 sm:grid-cols-[88px_minmax(0,1fr)_auto] sm:items-center">
        <div className="relative shrink-0 overflow-hidden border border-cream/10 sm:row-span-2">
          <Image
            src={offer.image}
            alt={`${offer.name} offer`}
            width={176}
            height={220}
            className="h-[110px] w-[88px] object-cover object-top sm:h-[132px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        </div>

        <div className="min-w-0">
          <h3 className="text-xl font-extrabold tracking-tight text-cream sm:text-2xl">
            {offer.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-brand-rose">
            {offer.category}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-fog">
            {offer.description}
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:items-end">
          <CountryOfferCta
            href={offer.href}
            label={`Visit ${offer.name}`}
            variant="germanyDefault"
            offerName={offer.name}
            country="australia"
          />
          <span className="text-center text-[0.68rem] uppercase tracking-[0.14em] text-fog sm:text-right">
            18+ · External site
          </span>
        </div>
      </div>
    </article>
  );
}
