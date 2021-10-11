const { withPlaiceholder } = require("@plaiceholder/next");

const config = withPlaiceholder({
  webpack5: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ["code-generation-landing-bucket.s3.amazonaws.com", "cdnjs.cloudflare.com"],
    path: "/_next/image",
    logger: 'default',
  },
});

module.exports = config;
