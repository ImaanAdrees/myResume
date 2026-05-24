import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next.js doesn't
  // confuse the parent dir's lockfile for the workspace.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
