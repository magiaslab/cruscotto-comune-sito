import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/riuso", destination: "/riusa", permanent: false },
      { source: "/supporter", destination: "/sostieni", permanent: false },
    ];
  },
};

export default nextConfig;
