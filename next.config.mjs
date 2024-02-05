/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // FIXME: Only for development!
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
