/** @type {import('next').NextConfig} */
const isExport = process.env.EXPORT === 'true';

const nextConfig = {
  output: isExport ? 'export' : undefined,
  // Serve assets from the site root when exporting.
  assetPrefix: isExport ? '/' : undefined,
  images: {
    unoptimized: isExport,
  },
};

export default nextConfig;
