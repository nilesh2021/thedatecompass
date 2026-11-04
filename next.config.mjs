const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
      {
        protocol: "https",
        hostname: "assets.gonaughty.com",
      },
      
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "thedatecompass.com" }],
        destination: "https://www.thedatecompass.com",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "thedatecompass.com" }],
        destination: "https://www.thedatecompass.com/:path*",
        permanent: true,
      },
      {
        source: "/top-offers/gay-dating",
        destination: "/gay-dating",
        permanent: true,
      },
      {
        source: "/top-offers/gay-dating/",
        destination: "/gay-dating",
        permanent: true,
      },
      {
        source: "/offers/dreamz-ai",
        destination: "/",
        permanent: true,
      },
      {
        source: "/offers/dreamz-ai/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/offers/dreamz-ai-v2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/offers/dreamz-ai-v2/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/offers/dreamz-ai-companion",
        destination: "/",
        permanent: true,
      },
      {
        source: "/offers/dreamz-ai-companion/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/offers/ai-companion",
        destination: "/",
        permanent: true,
      },
      {
        source: "/offers/ai-companion/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/ai-girlfriend",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/ai-girlfriend/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/ai-girlfriend-v2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/ai-girlfriend-v2/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/ai-girlfriend-sites",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/ai-girlfriend-sites/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/ai-chat-platform",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/ai-chat-platform/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/offers/litlatinz",
        destination: "/top-offers/adult",
        permanent: true,
      },
      {
        source: "/offers/litlatinz/",
        destination: "/top-offers/adult",
        permanent: true,
      },
      {
        source: "/usa/litlatinz-review",
        destination: "/usa",
        permanent: true,
      },
      {
        source: "/usa/litlatinz-review/",
        destination: "/usa",
        permanent: true,
      },
      {
        source: "/australia/litlatinz-review",
        destination: "/australia",
        permanent: true,
      },
      {
        source: "/australia/litlatinz-review/",
        destination: "/australia",
        permanent: true,
      },
      {
        source: "/canada/litlatinz-review",
        destination: "/canada",
        permanent: true,
      },
      {
        source: "/canada/litlatinz-review/",
        destination: "/canada",
        permanent: true,
      },
      {
        source: "/uk/litlatinz-review",
        destination: "/uk",
        permanent: true,
      },
      {
        source: "/uk/litlatinz-review/",
        destination: "/uk",
        permanent: true,
      },
      {
        source: "/usa/pridepair-review",
        destination: "/gay-dating",
        permanent: true,
      },
      {
        source: "/usa/pridepair-review/",
        destination: "/gay-dating",
        permanent: true,
      },
      {
        source: "/offers/manfinder-gay-dating",
        destination: "/offers/manfinder",
        permanent: true,
      },
      {
        source: "/offers/manfinder-gay-dating/",
        destination: "/offers/manfinder",
        permanent: true,
      },
      {
        source: "/category/manfinder",
        destination: "/offers/manfinder",
        permanent: true,
      },
      {
        source: "/category/manfinder/",
        destination: "/offers/manfinder",
        permanent: true,
      },
      {
        source: "/category/top-offers",
        destination: "/top-offers",
        permanent: true,
      },
      {
        source: "/category/top-offers/",
        destination: "/top-offers",
        permanent: true,
      },
      {
        source: "/gonaughty-australia",
        destination: "/offers/gonaughty-australia",
        permanent: true,
      },
      {
        source: "/gonaughty-australia/",
        destination: "/offers/gonaughty-australia",
        permanent: true,
      },
      {
        source: "/offers",
        destination: "/top-offers",
        permanent: true,
      },
      {
        source: "/offers/",
        destination: "/top-offers",
        permanent: true,
      },
      {
        source: "/offers/ManFinderLandingV2",
        destination: "/offers/manfinder",
        permanent: true,
      },
      {
        source: "/offers/ManFinderLandingV2/",
        destination: "/offers/manfinder",
        permanent: true,
      },
    ];
  },
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
