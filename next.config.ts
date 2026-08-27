import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/riuso", destination: "/riusa", permanent: false },
      { source: "/supporter", destination: "/sostieni", permanent: false },
      { source: "/supporto", destination: "/sostieni", permanent: false },
      { source: "/esempi", destination: "/comuni", permanent: false },
      { source: "/10-minuti", destination: "/guida", permanent: false },
    ];
  },
};

export default nextConfig;
