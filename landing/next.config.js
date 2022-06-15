/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["landing-cgs.s3.amazonaws.com"],
  },
  compress: true,
  routes: [
    {
      src: "/GilroyFont/(.*)",
      headers: { "cache-control": "s-maxage=31536000" },
      dest: "/GilroyFont/$1",
    },
  ],
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
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
