import platforms from "@/data/platforms";
import PlatformCard from "./PlatformCard";

const FeaturedPlatforms = () => {
  const featuredPlatforms = platforms.filter(
    (item) => item.featured
  );

  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-300">

            Featured Platforms

          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">

            Discover Our Top Picks

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
  Browse our editor&apos;s recommended dating platforms for casual dating,
  LGBTQ+ connections, Latino dating, and more.

          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {featuredPlatforms.map((platform)=>(
            <PlatformCard
              key={platform.id}
              platform={platform}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedPlatforms;