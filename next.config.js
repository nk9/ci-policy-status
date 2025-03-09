module.exports = {
  reactStrictMode: true,
  output: 'export',

  webpack: (config) => {
    config.module.rules.push({
      test: /\.geojson$/,
      use: ["json-loader"]
    });

    return config
  },
};
