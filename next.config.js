/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      // undici (dependência do @vercel/blob) usa sintaxe que o webpack do Next 14.1 não consegue empacotar
      serverComponentsExternalPackages: ['@vercel/blob', 'undici'],
    },
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
  