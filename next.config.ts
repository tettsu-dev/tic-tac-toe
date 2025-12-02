import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: "/tic-tac-toe",
  assetPrefix: '/tic-tac-toe/'
};

export default nextConfig;
