/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: false,
  images: {
    domains: ['yt3.googleusercontent.com', 'yt3.ggpht.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
