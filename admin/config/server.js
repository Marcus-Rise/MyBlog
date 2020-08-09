module.exports = ({ env }) => {
  const port = env.int("PORT", 1337);
  const host = env("HOST", "0.0.0.0");
  const domain = env("DOMAIN", "domain_server");
  const url = "https://" + domain;

  return {
    host,
    port,
    url: url + "/admin",
    admin: {
      url: url + "/dashboard",
      auth: {
        secret: env("ADMIN_JWT_SECRET", "!change_me!"),
      },
    },
  };
};
