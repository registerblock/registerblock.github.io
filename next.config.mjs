/** @type {import('next').NextConfig} */
const isExport = process.env.EXPORT === 'true';

const nextConfig = {
  output: isExport ? 'export' : undefined,
  // Use relative asset paths when exporting so the site can be served from
  // the repository root without an injected base path.
  assetPrefix: isExport ? '.' : undefined,
  images: {
    unoptimized: isExport,
  },
};

export default nextConfig;
