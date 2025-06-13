/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'pedrabar.pt' }],
          destination: 'https://www.pedrabar.pt/:path*',
          permanent: true,
        },
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'http://www.pedrabar.pt' }],
          destination: 'https://www.pedrabar.pt/:path*',
          permanent: true,
        },
      ]
    },
  }
  
  module.exports = nextConfig
  