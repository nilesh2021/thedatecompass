"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface OfferItem {
  title: string;
  description: string;
  url: string;
  featured?: boolean;
  image?: string;
}

const DATA: Record<string, OfferItem[]> = {
  Dating: [
    {
      title: "Premium Dating",
      description: "Find meaningful connections with advanced matching.",
      url: "#",
      featured: true,
    },
    {
      title: "Elite Singles",
      description: "Dating experience for professionals.",
      url: "#",
    },
    {
      title: "1",
      description: "AI powered dating recommendations.",
      url: "#",
    }, {
      title: "2",
      description: "AI powered dating recommendations.",
      url: "#",
    }, {
      title: "3",
      description: "AI powered dating recommendations.",
      url: "#",
    },
  ],

  "AI Platform": [
    {
      title: "Dreamz.ai",
      description:
        "Create your own personalized AI companion and enjoy immersive conversations with customizable personalities.",
      url: "https://t.vlmai-1.com/358917/10461/0?aff_sub5=SF_006OG000004lmDN",
      featured: true,
      image: "/images/ai-model.webp",
    },
    {
      title: "ChatCraft AI",
      description: "AI tools for realistic chat experiences and content creation.",
      url: "#",
      image: "/images/chat-ai.webp",
    },
    {
      title: "Visionary AI",
      description: "Advanced image generation for new creative campaigns.",
      url: "#",
      image: "/images/ai-model-3.webp",
    },
  ],

  VPN: [
    {
      title: "Secure VPN",
      description: "Browse safely and securely.",
      url: "#",
      featured: true,
    },
    {
      title: "Streaming VPN",
      description: "Fast VPN for streaming content.",
      url: "#",
    },
  ],

  Finance: [
    {
      title: "Trading Platform",
      description: "Invest and trade with ease.",
      url: "#",
      featured: true,
    },
    {
      title: "Credit Service",
      description: "Access financial products quickly.",
      url: "#",
    },
  ],
};

export default function OfferHubPage() {
  const categories = Object.keys(DATA);

  const [activeTab, setActiveTab] = useState(categories[0]);
 const [search] = useState("");
  const [selectedOffer, setSelectedOffer] = useState<OfferItem | null>(null);

  const offers = DATA[activeTab as keyof typeof DATA];

  const filteredOffers = useMemo(() => {
    return offers.filter(
      (offer) =>
        offer.title.toLowerCase().includes(search.toLowerCase()) ||
        offer.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [offers, search]);

   

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[180px]" />
      </div>

      {/* Hero */}
      <section className="container mx-auto px-6 pt-24 pb-16">
        <div className="mx-auto max-w-5xl text-center">
          <span className="rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm text-pink-400">
            Premium Offers Directory
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
            Discover The Best
            <span className="block bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Offers In One Place
            </span>
          </h1>

          <p className="mx-auto mt-2 max-w-3xl text-lg text-gray-400">
            Explore top platforms, software, services and affiliate
            offers organized by category.
          </p>
        </div>
      </section>

      

      {/* Tabs */}
      <section className="container mx-auto px-6 py-10 pt-3">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                activeTab === category
                  ? "bg-pink-500 text-white shadow-lg shadow-pink-500/30"
                  : "border border-white/10 bg-white/5 text-gray-300 hover:border-pink-500/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Offer */}
    {/*   <section className="container mx-auto px-6 pb-10">
        <div className="overflow-hidden rounded-[32px] border border-pink-500/20 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10 p-10 backdrop-blur-xl">
          <span className="text-sm font-medium text-pink-400">
            ⭐ Featured {activeTab} Offer
          </span>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            {featuredOffer.title}
          </h2>

          <p className="mt-4 max-w-3xl text-gray-400">
            {featuredOffer.description}
          </p>

         <Link
  href={featuredOffer.url}
  target="_blank"
  rel="sponsored nofollow noopener noreferrer"
  className="mt-8 inline-flex items-center rounded-full bg-pink-500 px-6 py-3 font-semibold text-white transition hover:bg-pink-600"
>
  Visit Offer →
</Link>
        </div>
      </section> */}

      {/* Offer Cards */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredOffers.map((offer) => (
            <div
              key={offer.title}
              className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/40"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 text-xl">
                🚀  
              </div>

              <h3 className="text-2xl font-bold">
                {offer.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {offer.description}
              </p>
              <button
                onClick={() => setSelectedOffer(offer)}
                className="mt-6 inline-flex items-center font-semibold text-pink-400 transition hover:text-pink-300"
              >
                View Offer →
              </button>
            </div>
          ))}
        </div>

        {filteredOffers.length === 0 && (
          <div className="py-20 text-center text-gray-500">
            No offers found.
          </div>
        )}
      </section>

      

      {/* CTA */}
      {/* <section className="container mx-auto px-6 pb-24">
        <div className="rounded-[40px] border border-pink-500/20 bg-gradient-to-br from-[#111] to-[#070707] p-12 text-center">
          <h2 className="text-4xl font-black md:text-6xl">
            Find Your Next
            <span className="block text-pink-500">
              Best Offer
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Explore categories, compare platforms and discover the
            best opportunities.
          </p>

          <button className="mt-10 rounded-full bg-pink-500 px-8 py-4 font-semibold transition hover:bg-pink-600">
            Explore Offers
          </button>
        </div>
      </section> */}

      {/* Offer Modal */}
      {selectedOffer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6">
          <div
            className="absolute inset-0"
            onClick={() => setSelectedOffer(null)}
          />
          <div className="relative w-full max-w-2xl rounded-[32px] border border-white/10 bg-[#111] p-8 shadow-2xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-3xl font-black text-white">{selectedOffer.title}</h2>
                <p className="mt-4 text-gray-400">{selectedOffer.description}</p>
              </div>
              <button
                onClick={() => setSelectedOffer(null)}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-pink-500"
              >
                Close
              </button>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-white">
  Dreamz.ai Highlights
</h3>
                <ul className="mt-4 space-y-3 text-gray-300">
                 <li>• Personalized AI companions</li>
<li>• Immersive AI roleplay</li>
<li>• Customizable personalities</li>
<li>• Private conversations</li>
<li>• Available 24/7</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-semibold text-white">Ready To Start?</h3> 

                <div>  
                    
                    
                    <Image src="https://storage.googleapis.com/dreamz-assets/i/a46f1bb4-1c31-4dae-adbf-0023b46d2696.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=dreamz-ai-run%40delta-carving-424713-r0.iam.gserviceaccount.com%2F20260802%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260802T104122Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=b48aa77b5b084a4aa73924763eeaa68076329bab9114ff8df83c39b0e753a552a371509cb8df6829da854ebce55190b9e5fcf590bd8886688b1c4eb5c126b1aa91a7e6c018a9bc7659256bdc9f18766e8e940221636c4cfca702e3db3279ce73349e68fc759bb7c0a81b1014cbc4543d2fe79713398156e4fb2fc03477bb0cbd4b592578da00449ef667adf9db8133463f9dad4c8b73cbd85cc315f2712fa4bdc69e385de3018eb8f3d6ac20bea114ded2d8d7def3643236bb37d5f86abec9b5101d86ae9b6cee8571ff81e7c067dd4dbc706aa1f9a4f216f16839fbfd86809ef3349155fce1a0d0895240e4a83a78855fe6216d1c7d5b352aa5d4b0903d4968" alt={selectedOffer.title} width={200} height={200} /></div>
                <p className="mt-4 text-gray-400">
               Visit Dreamz.ai to create your personalized AI companion and start chatting in minutes.
                </p>
                <Link
                  href={selectedOffer.url}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="mt-5 inline-flex rounded-full bg-pink-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-pink-600"
                >
                  Open Offer
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="rounded-full bg-pink-500 px-6 py-4 font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600">
          🔥 Featured Offer
        </button>
      </div>
    </main>
  );
}