import type { NextConfig } from "next";

// Static export: `npm run build` writes a plain HTML/CSS site to /out.
// Vercel detects Next.js and deploys it automatically.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
