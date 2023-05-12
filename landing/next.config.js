/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["landing-cgs.s3.amazonaws.com", "d2qrnmx3qcgrup.cloudfront.net"],
    minimumCacheTTL: 3600,
  },
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
  },
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
