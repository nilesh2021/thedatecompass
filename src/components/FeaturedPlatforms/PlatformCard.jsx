

const PlatformCard = ({ platform }) => {
    return (
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#171717] via-[#111111] to-[#080808] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-pink-500/20">

            {/* Glow */}
            <div className="absolute -top-16 right-0 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />

            {/* Badge */}

            <div className="absolute left-5 top-5 z-20">

                <span className="rounded-full bg-pink-600 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">

                    {platform.badge}

                </span>

            </div>

            {/* Logo */}

            <div className="pt-20 text-center">

                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-[#1f1f1f]">

                    <img
                        src={platform.logo}
                        alt={platform.name}
                        className="h-16 w-16 object-contain"
                    />

                </div>

            </div>

            {/* Content */}

            <div className="p-8">

                <h3 className="text-center text-2xl font-bold text-white">

                    {platform.name}

                </h3>

                <p className="mt-2 text-center text-pink-400">

                    {platform.bestFor}

                </p>

                {/* Rating */}

                <div className="mt-5 flex justify-center gap-1 text-yellow-400">

                    ⭐⭐⭐⭐⭐

                    <span className="ml-2 text-white">

                        {platform.rating}

                    </span>

                </div>

                <p className="mt-6 text-center text-sm leading-7 text-gray-400">

                    {platform.description}

                </p>

                {/* Features */}

                <div className="mt-6 space-y-3">

                    {platform.features.slice(0, 4).map((feature) => (
                        <div
                            key={feature}
                            className="flex items-center gap-3 text-sm text-gray-300"
                        >
                            <div className="h-2 w-2 rounded-full bg-pink-500" />
                            {feature}
                        </div>
                    ))}

                </div>

                {/* Buttons */}

                <a
                    href={platform.affiliateLink}
                    target="_blank"
                    rel="nofollow sponsored"
                    className="mt-8 flex h-12 items-center justify-center rounded-xl bg-pink-600 font-semibold text-white transition hover:bg-pink-500"
                >
                    Visit Site →
                </a>

                {/* <button className="mt-3 w-full rounded-xl border border-white/10 py-3 text-sm font-medium text-gray-300 transition hover:border-pink-500 hover:text-white">

                    Read Review

                </button> */}

            </div>

        </div>
    );
};

export default PlatformCard;