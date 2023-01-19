/** @type {import('next').NextConfig} */
module.exports = {
  poweredByHeader: false,
  generateEtags: false,
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['__tests__'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}
