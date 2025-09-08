import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect old blog listing to contact
      {
        source: "/blog",
        destination: "/contact",
        permanent: true,
      },
      // Redirect any blog article to contact as well
      {
        source: "/blog/:slug*",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
