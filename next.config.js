/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  images: {
    domains: ['yt3.googleusercontent.com', 'yt3.ggpht.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
