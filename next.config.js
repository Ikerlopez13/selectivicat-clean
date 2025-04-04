/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    LS_API_KEY: process.env.LS_API_KEY,
    LS_STORE_ID: process.env.LS_STORE_ID,
    LS_VARIANT_ID: process.env.LS_VARIANT_ID,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
    unoptimized: false,
  },
  async rewrites() {
    return [
      {
        source: '/@fisica.png',
        destination: '/images/fisica.png',
      },
    ];
  },
  // Configuración para servir archivos PDF estáticos correctamente
  output: 'standalone',
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 