import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["localhost", "143.110.240.64", "accybpublic.s3.amazonaws.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.accyb.vercel.app/en",
      },
      {
        protocol: "https",
        hostname: "**.accyb.vercel.app/en",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
