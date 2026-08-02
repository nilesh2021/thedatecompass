const items = [
  {
    icon: "🔞",
    title: "Adults Only",
    description:
      "All featured platforms are intended for adults aged 18 years or older.",
  },
  {
    icon: "🛡️",
    title: "Independent Comparison",
    description:
      "We compare third-party dating platforms to help visitors discover available options.",
  },
  {
    icon: "🔗",
    title: "Affiliate Supported",
    description:
      "Some links on this website are affiliate links. We may receive a commission when you visit a partner platform.",
  },
  {
    icon: "🌍",
    title: "Country-Based Listings",
    description:
      "Available platforms differ by country. We organize offers based on regional availability.",
  },
  {
    icon: "🔒",
    title: "Privacy Focused",
    description:
      "TheDateCompass doesn't ask you to create a dating profile or collect dating preferences.",
  },
  {
    icon: "⚡",
    title: "Fast & Easy",
    description:
      "Compare platforms in one place and continue directly to the provider you choose.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-[#111111] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-[#E83E9B]/10 px-5 py-2 text-sm font-semibold text-[#E83E9B]">
            Transparency
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Why Visitors Trust
            <br />
            TheDateCompass
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
            We believe visitors should always understand what our website
            does before choosing a dating platform.
          </p>

        </div>

        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {items.map((item) => (

            <article
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-[#E83E9B]/40"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E83E9B]/10 text-4xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-white/60">
                {item.description}
              </p>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}