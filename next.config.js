/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: "/projects/:slug",
        destination: "/:slug",
        permanent: true,
      },
    ];
  },
};
