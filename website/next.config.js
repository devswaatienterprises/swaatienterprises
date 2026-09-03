/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    const crmUrl = process.env.CRM_URL || 'http://127.0.0.1:3001';
    return [
      {
        source: '/sems',
        destination: `${crmUrl}/sems`,
      },
      {
        source: '/sems/:path*',
        destination: `${crmUrl}/sems/:path*`,
      },
    ];
  },
  // Support static page redirects if needed
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/services.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/projects.html',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/products.html',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/quote',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/quote.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/products-waterproofing_systems',
        destination: '/products/waterproofing',
        permanent: true,
      },
      {
        source: '/products-concrete_admixtures',
        destination: '/products/concrete-admixtures',
        permanent: true,
      },
      {
        source: '/products-epoxy_systems',
        destination: '/products/flooring-surface-hardening',
        permanent: true,
      },
      {
        source: '/products-structural_repair',
        destination: '/products/structural-repair',
        permanent: true,
      },
      {
        source: '/products-grouts_anchors',
        destination: '/products/grouts',
        permanent: true,
      },
      {
        source: '/products-industrial_solution',
        destination: '/products/geotextiles-reinforcement',
        permanent: true,
      },
      {
        source: '/products-flooring_and_coatings',
        destination: '/products/protective-coatings',
        permanent: true,
      },
      {
        source: '/products-building_and_joint_sealants',
        destination: '/products/joint-sealants-accessories',
        permanent: true,
      },
      {
        source: '/products-specialized_coatings',
        destination: '/products/protective-coatings',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
