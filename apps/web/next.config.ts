import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  basePath,
  images: {
    unoptimized: true
  },
  output: "export",
  trailingSlash: true,
  typedRoutes: false,
  ...(isGithubPages ? { assetPrefix: `${basePath}/` } : {})
};

export default nextConfig;
