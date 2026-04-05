/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/solutions/leases', destination: '/solutions/commercial', permanent: true },
      { source: '/solutions/tenant-relations', destination: '/solutions/commercial', permanent: true },
      { source: '/solutions/operations', destination: '/solutions/technical', permanent: true },
      { source: '/solutions/financials', destination: '/solutions/financial', permanent: true },
      { source: '/solutions/transactions', destination: '/solutions/asset', permanent: true },
    ]
  },
}

module.exports = nextConfig
