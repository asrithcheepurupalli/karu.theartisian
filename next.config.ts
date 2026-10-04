import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // plain static legal pages in public/legal
  async rewrites() {
    return [
      { source: "/privacy", destination: "/legal/privacy.html" },
      { source: "/terms", destination: "/legal/terms.html" },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
