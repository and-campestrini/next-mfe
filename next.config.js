const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "next-mfe",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./index": "./src/pages/index.ts",
        },
        shared: {},
      })
    );

    return config;
  },
};

module.exports = nextConfig;
