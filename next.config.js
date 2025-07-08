/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'files.keepingcurrentmatters.com',
        pathname: '/**',
      },
      // Add more domains as needed
    ],
    domains: ['files.keepingcurrentmatters.com', 'placehold.co'],
  },
}

module.exports = nextConfig
