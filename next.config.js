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
};

module.exports = nextConfig; 