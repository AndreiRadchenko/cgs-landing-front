const withPlugins = require("next-compose-plugins");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["landing-cgs.s3.amazonaws.com"],
  },
  experimental: {
    concurrentFeatures: true,
  },
  optimizeFonts: true,
  optimization: {
    minimize: true,
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

const plugins = [];

module.exports = withPlugins(plugins, nextConfig);
