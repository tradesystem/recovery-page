/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  images: {
    domains: ["cardapiojkservic1.websiteseguro.com"],
  },
};

export default nextConfig;
