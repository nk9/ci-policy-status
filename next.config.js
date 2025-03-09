module.exports = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.geojson$/,
      use: ["json-loader"]
    });

    return config
  },
};
