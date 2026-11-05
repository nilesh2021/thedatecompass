import Image from "next/image";
import TrackedAffiliateLink from "@/components/affiliate/TrackedAffiliateLink";
import { selectGeoTopOffers } from "@/lib/geoTopOffers";
import { visitorPageCountry } from "@/lib/visitorCountry";

export default function GeoTopOffers({ country }: { country: string }) {
  const pageCountry = visitorPageCountry(country).country;
  const offers = selectGeoTopOffers(country);

  if (offers.length === 0) return null;

  return (
    <section
      aria-labelledby="geo-top-heading"
      className="relative px-4 py-12 font-display text-cream sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">
            For where you are
          </p>
          <h2
            id="geo-top-heading"
            className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-cream sm:text-5xl"
          >
            Top picks for you
          </h2>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 xl:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.slug}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#ff2d87]/35 bg-[#141a3d]"
            >
              <TrackedAffiliateLink
                href={offer.href}
                placement="geo_top"
                country={pageCountry}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="group flex flex-1 flex-col text-cream no-underline"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={offer.image}
                    alt={offer.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141a3d] via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#ff2d87]">
                    {offer.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight">
                    {offer.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/75">
                    {offer.description}
                  </p>
                  <span className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#ff2d87] px-6 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-white shadow-[0_8px_24px_rgba(255,45,135,0.28)] transition group-hover:brightness-110">
                    Open offer
                  </span>
                </div>
              </TrackedAffiliateLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
