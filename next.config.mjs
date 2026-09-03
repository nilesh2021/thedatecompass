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
        source: "/offers/dreamz-ai-v2",
        destination: "/offers/dreamz-ai-companion",
        permanent: true,
      },
      {
        source: "/category/manfinder",
        destination: "/offers/manfinder",
        permanent: true,
      },
      {
        source: "/category/top-offers",
        destination: "/top-offers",
        permanent: true,
      },
      {
        source: "/gonaughty-australia",
        destination: "/offers/gonaughty-australia",
        permanent: true,
      },
      {
        source: "/offers",
        destination: "/top-offers",
        permanent: true,
      },
      {
        source: "/offers/ManFinderLandingV2",
        destination: "/offers/manfinder-v2",
        permanent: true,
      },
    ];
  },
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;