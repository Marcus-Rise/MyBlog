/* eslint-disable */

const withPWA = require("next-pwa");

module.exports = withPWA({
    pwa: {
        disable: process.env.NODE_ENV !== "production",
    },
    reactStrictMode: true,
    distDir: process.env.NODE_ENV === "production" ? "../../dist/client/.next" : undefined,
    crossOrigin: "anonymous",
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack", "url-loader"],
        });

        return config;
    },
});
