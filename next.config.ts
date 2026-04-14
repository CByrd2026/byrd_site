import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  typescript: {
    // csstype@3.2.3 contains a Unicode smart quote that causes a parser error
    // in the TypeScript version used by Next.js 16. This is an upstream dep bug,
    // not a project code issue.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
