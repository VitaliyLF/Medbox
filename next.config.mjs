/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  webpack(config) {
    //Processing SVG as React components
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts|tsx|jsx)$/],
      },
      use: ['@svgr/webpack'],
    })

    //Handling SVGs as regular resource files
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        not: [/\.(js|ts|tsx|jsx)$/],
      },
      type: 'asset/resource',
    })

    return config
  },
}

export default nextConfig
