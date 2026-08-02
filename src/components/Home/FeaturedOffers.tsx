import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  ShieldCheck,
  Globe,
 
} from "lucide-react";

import { featuredOffers } from "@/data/offers";

export default function FeaturedOffers() {
  return (
    <section className="bg-[#fafafa] py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-[#E83E9B]">
            Featured Platforms
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#111]">
            Popular Dating Sites
          </h2>

          <p className="mx-auto mt-6 text-lg leading-8 text-gray-600">
          Discover our editor&apos;s top-rated dating platforms, carefully selected based on user experience, popularity, features, and overall value. Explore trusted services designed for casual dating, serious relationships, AI companionship, and more.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {featuredOffers.map((offer) => (

            <article
              key={offer.id}
              className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-pink-300 hover:shadow-[0_30px_70px_rgba(232,62,155,.15)]"
            >

              {/* Image */}

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={offer.image}
                  alt={offer.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute left-4 top-4 rounded-full bg-[#E83E9B] px-3 py-1 text-xs font-bold text-white shadow-lg">
                  Best Choice
                </div>

                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xl">
                  <Globe size={14} />
                  {offer.country}
                </div>

              </div>

              {/* Content */}

              <div className="flex flex-1 flex-col p-6">

                <div className="flex items-center justify-between">

                  <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-bold text-[#E83E9B]">
                    {offer.category}
                  </span>

                  <div className="flex items-center gap-1">

                    <Star
                      size={15}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="text-sm font-bold">
                      {offer.rating}
                    </span>

                  </div>

                </div>

                <h3 className="mt-5 text-3xl font-black text-gray-900">
                  {offer.name}
                </h3>

                <p className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                  <ShieldCheck
                    size={16}
                    className="text-green-600"
                  />
                  Adults 18+ only
                </p>

                <p className="mt-3 flex-1 text-gray-600">
                  Compare this platform and explore whether it fits your dating
                  preferences before visiting.
                </p>

                {/* CTA */}

                <Link
                  href={offer.href}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="group/button mt-8 flex items-center justify-center gap-2 rounded-full bg-[#E83E9B] py-4 font-semibold text-white transition-all duration-300 hover:bg-pink-500"
                >
                  Visit Site

                

                </Link>

              </div>

            </article>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 text-center">

          <Link
            href="/usa"
            className="inline-flex items-center gap-3 rounded-full border border-[#E83E9B] px-8 py-4 font-semibold text-[#E83E9B] transition-all duration-300 hover:bg-[#E83E9B] hover:text-white"
          >
            View All Dating Platforms

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>
    </section>
  );
}