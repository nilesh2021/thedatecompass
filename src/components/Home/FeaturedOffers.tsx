import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Globe } from "lucide-react";
import { featuredUsaOffers } from "@/data/usaOffers";

export default function FeaturedOffers() {
  return (
    <section id="featured" className="tdc-section-stone py-24 font-display">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="tdc-eyebrow">Featured platforms</p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl">
            Popular dating platforms to compare
          </h2>

          <p className="mx-auto mt-6 font-serif-accent text-xl italic text-ink/60">
            Explore featured third-party dating and AI companion platforms.
            Availability varies by country.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredUsaOffers.map((offer) => (
            <article
              key={offer.name}
              className="group flex h-full flex-col overflow-hidden border border-ink/10 bg-cream transition duration-300 hover:-translate-y-1 hover:border-brand-rose/40"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={offer.image}
                  alt={`${offer.name} dating platform`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute left-4 top-4 bg-brand-rose px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cream">
                  Featured
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-semibold text-cream">
                  <Globe size={14} className="text-brand-mint" />
                  {offer.country ?? "Multi-region"}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-rose">
                    {offer.category}
                  </span>
                  {offer.rating != null && (
                    <div className="flex items-center gap-1">
                      <Star size={15} className="fill-brand-rose text-brand-rose" />
                      <span className="text-sm font-bold">{offer.rating}</span>
                    </div>
                  )}
                </div>

                <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-ink">
                  {offer.name}
                </h3>

                <p className="mt-3 flex items-center gap-2 text-sm text-ink/55">
                  <ShieldCheck size={16} className="text-brand-mint" />
                  Adults 18+ only
                </p>

                <p className="mt-3 flex-1 text-ink/65">{offer.description}</p>

                <a
                  href={offer.href}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="tdc-btn-primary mt-8 w-full"
                >
                  Visit site
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="#countries" className="tdc-btn-line border-ink/25 text-ink hover:border-brand-rose hover:text-brand-rose">
            Browse offers by country
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
