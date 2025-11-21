import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  turbopack: {
    debugIds: true,  // jos haluat debug-lokit
    // ei ole dokumentoitua “sourcemap”-asetusta, mutta voit tutkia debug-mahdollisuuksia
  },

  webpack: (config) => {
    // Webpack-osuus, jos käytät Webpackia jossain vaiheessa
    config.devtool = false;
    return config;
  },
};

export default nextConfig;
