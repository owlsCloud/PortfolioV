/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: { disableStaticImages: false, unoptimized: true },
};
module.exports = nextConfig;
