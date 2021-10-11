// next.config.js
module.exports = {
  images: {
    domains: [process.env.APP_DOMAIN, "www.gravatar.com"],
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://server-reddit-app.herokuapp.com/api/:path*", // Proxy to Backend
      },
    ];
  },

  future: {
    webpack5: true,
  },
};
