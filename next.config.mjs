/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.genspark.ai',
      },
    ],
  },
};

export default nextConfig;
