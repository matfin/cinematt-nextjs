const nextMDX = require('@next/mdx');

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: { providerImportSource: '@mdx-js/react' },
});

const rewrites = async () => {
  return [
    {
      source: '/sitemap.xml',
      destination: '/api/sitemap',
    },
  ];
};

module.exports = {
  ...withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
  }),
  rewrites,
  env: {
    version: process.env.npm_package_version,
    base: process.env.BASE || 'https://cinematt.photography',
  },
};
