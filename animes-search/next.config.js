/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["s4.anilist.co", "anilist.co"]
  },
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig;
