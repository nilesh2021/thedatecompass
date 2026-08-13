import Image from "next/image";
import CountryOfferCta from "@/components/country/common/CountryOfferCta";
import type { FranceOffer } from "@/data/countries/france";

type FranceOfferCardProps = {
  offer: FranceOffer;
  variant?: "featured" | "default";
};

export default function FranceOfferCard({
  offer,
  variant = "default",
}: FranceOfferCardProps) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={
        isFeatured
          ? "relative overflow-hidden border border-brand-rose/40 bg-[linear-gradient(145deg,rgba(255,61,110,0.14),rgba(22,24,28,0.95))] p-4 sm:p-8"
          : "group relative border border-cream/10 bg-ink-soft p-4 transition duration-300 hover:border-brand-rose/25 sm:p-6"
      }
    >
      <div
        className={
          isFeatured
            ? "grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)_220px] lg:items-stretch"
            : "grid gap-5 sm:grid-cols-[88px_minmax(0,1fr)_auto] sm:items-center"
        }
      >
        <div
          className={
            isFeatured
              ? "relative overflow-hidden border border-cream/10"
              : "relative shrink-0 overflow-hidden border border-cream/10 sm:row-span-2"
          }
        >
          <Image
            src={offer.image}
            alt={`${offer.name} offer`}
            width={isFeatured ? 360 : 176}
            height={isFeatured ? 480 : 220}
            className={
              isFeatured
                ? "h-56 w-full object-cover object-top sm:h-64 lg:h-full lg:min-h-[240px]"
                : "h-[110px] w-[88px] object-cover object-top sm:h-[132px]"
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        </div>

        <div className={isFeatured ? "max-w-3xl" : "min-w-0"}>
          <h3
            className={
              isFeatured
                ? "text-3xl font-extrabold tracking-tight text-cream sm:text-4xl"
                : "text-xl font-extrabold tracking-tight text-cream sm:text-2xl"
            }
          >
            {offer.name}
          </h3>
          <p
            className={
              isFeatured
                ? "mt-3 text-base font-medium text-brand-rose sm:text-lg"
                : "mt-1 text-sm font-medium text-brand-rose"
            }
          >
            {offer.category}
          </p>
          <p
            className={
              isFeatured
                ? "mt-5 max-w-2xl text-base leading-relaxed text-cream/80"
                : "mt-3 text-sm leading-relaxed text-fog"
            }
          >
            {offer.description}
          </p>
        </div>

        <div
          className={
            isFeatured
              ? "flex flex-col justify-end gap-3 lg:items-stretch"
              : "flex shrink-0 flex-col gap-2 sm:items-end"
          }
        >
          <CountryOfferCta
            href={offer.href}
            label={`Visit ${offer.name}`}
            variant={isFeatured ? "germanyFeatured" : "germanyDefault"}
            offerName={offer.name}
            country="france"
          />
          <span
            className={
              isFeatured
                ? "text-center text-[0.68rem] uppercase tracking-[0.14em] text-fog"
                : "text-center text-[0.68rem] uppercase tracking-[0.14em] text-fog sm:text-right"
            }
          >
            18+ · External site
          </span>
        </div>
      </div>
    </article>
  );
}
