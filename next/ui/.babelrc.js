const isProduction = process.env.NODE_ENV === "production";

const config = {
  presets: [
    "next/babel"
  ],
  plugins: [
    [
      "babel-plugin-styled-components",
      {
        ssr: true,
        minify: isProduction,
        transpileTemplateLiterals: true,
        pure: true,
        displayName: !isProduction,
        preprocess: false,
      }
    ]
  ]
};

console.log(config);

module.exports = config;
