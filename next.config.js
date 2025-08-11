/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'www.dropbox.com',
        pathname: '/scl/fi/**',
      },
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['framer-motion']
  }
}

const protectedRoutes = {
  '/src/app/casestudydirectexpress/page': true
};

module.exports = nextConfig