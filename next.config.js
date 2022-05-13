const { withPlaiceholder } = require("@plaiceholder/next");

const config = withPlaiceholder({
  webpack5: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["code-generation-landing-bucket.s3.amazonaws.com"],
  },
});

module.exports = config;
