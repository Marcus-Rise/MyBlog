module.exports = ({ env }) => {
  const port = env.int("PORT", 1337);
  const host = env("HOST", "0.0.0.0");
  const domain = env("DOMAIN", "domain");
  const url = "https://" + domain;

  return {
    host,
    port,
    url: url + "/admin/",
    admin: {
      url: url + "/dashboard",
      auth: {
        secret: env("ADMIN_JWT_SECRET", "2c32a9a7d61de13c8819ea41566884dd"),
      },
    },
  };
};
