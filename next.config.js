/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.marcellamarcone.it',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
