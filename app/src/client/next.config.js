/* eslint-disable */

const withPWA = require("next-pwa");

module.exports = withPWA({
    reactStrictMode: true,
    distDir: process.env.NODE_ENV === "production" ? "../../dist/client/.next" : undefined,
});
