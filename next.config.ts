import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only — emit a fully static site into `out/`.
  output: "export",

  // Repo is deployed at https://imaanadrees.github.io/myResume so all routes
  // and assets need to be prefixed with /myResume.
  basePath: "/myResume",
  assetPrefix: "/myResume",

  // GH Pages prefers `/foo/` over `/foo` — emits index.html per route.
  trailingSlash: true,

  // No image optimizer at runtime on a static host.
  images: { unoptimized: true },

  // Pin workspace root so Next ignores any parent-dir lockfile.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
