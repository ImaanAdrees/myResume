import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin workspace root so Next ignores any parent-dir lockfile.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
