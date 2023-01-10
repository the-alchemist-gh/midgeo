/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.mymovies.africa',
        // port: '',
        pathname: '/static/media/**',
      },
      {
        protocol: 'https',
        hostname: 'api.mymovies.africa',
        // port: '',
        pathname: '/content/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;
