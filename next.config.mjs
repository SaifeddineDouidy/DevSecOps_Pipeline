// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    dirs: ['app', 'components', 'lib', 'pages'], // Directories to lint
  },
};
  
export default nextConfig;