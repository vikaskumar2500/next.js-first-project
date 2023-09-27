/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.nine.ch',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
}
