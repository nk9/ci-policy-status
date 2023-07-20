module.exports = {
  reactStrictMode: true,
  
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.geojson$/,
      use: ["json-loader"]
    });

    return config
  },
};
