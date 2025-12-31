import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-8aa8b480403f4da0bac5a9e73a4cf84c.r2.dev",
        port: "",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
