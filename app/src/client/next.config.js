module.exports = {
    reactStrictMode: true,
    distDir: process.env.NODE_ENV === "production" ? "../../dist/client/.next" : undefined,
};
