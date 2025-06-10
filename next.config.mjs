/** @type {import('next').NextConfig} */
const isExport = process.env.EXPORT === 'true';

const nextConfig = {
  output: isExport ? 'export' : undefined,
  images: {
    unoptimized: isExport,
  },
};

export default nextConfig;
