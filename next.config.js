/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ytimg.com', 'img.youtube.com'],
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
};

module.exports = nextConfig; 