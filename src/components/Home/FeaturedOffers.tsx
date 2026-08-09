import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Globe } from "lucide-react";
import { featuredUsaOffers } from "@/data/usaOffers";

export default function FeaturedOffers() {
  return (
    <section id="featured" className="bg-[#fafafa] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-[#E83E9B]">
            Featured platforms
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#111] sm:text-5xl">
            Popular dating platforms to compare
          </h2>

          <p className="mx-auto mt-6 text-lg leading-8 text-gray-600">
            Explore featured third-party dating and AI companion platforms.
            Availability varies by country — choose your region below to see
            live offers.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredUsaOffers.map((offer) => (
            <article
              key={offer.name}
              className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-pink-300 hover:shadow-[0_30px_70px_rgba(232,62,155,.15)]"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={offer.image}
                  alt={`${offer.name} dating platform`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute left-4 top-4 rounded-full bg-[#E83E9B] px-3 py-1 text-xs font-bold text-white shadow-lg">
                  Featured
                </div>

                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xl">
                  <Globe size={14} />
                  {offer.country ?? "Multi-region"}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-bold text-[#E83E9B]">
                    {offer.category}
                  </span>

                  {offer.rating != null && (
                    <div className="flex items-center gap-1">
                      <Star
                        size={15}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      <span className="text-sm font-bold">{offer.rating}</span>
                    </div>
                  )}
                </div>

                <h3 className="mt-5 text-3xl font-black text-gray-900">
                  {offer.name}
                </h3>

                <p className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                  <ShieldCheck size={16} className="text-green-600" />
                  Adults 18+ only
                </p>

                <p className="mt-3 flex-1 text-gray-600">{offer.description}</p>

                <a
                  href={offer.href}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-2 rounded-full bg-[#E83E9B] py-4 font-semibold text-white transition-all duration-300 hover:bg-pink-500"
                >
                  Visit site
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="#countries"
            className="inline-flex items-center gap-3 rounded-full border border-[#E83E9B] px-8 py-4 font-semibold text-[#E83E9B] transition-all duration-300 hover:bg-[#E83E9B] hover:text-white"
          >
            Browse offers by country
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
