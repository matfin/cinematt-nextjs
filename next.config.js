const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
});

const rewrites = async () => {
  return [
    {
      source: '/sitemap.xml',
      destination: '/api/sitemap',
    }
  ];
};

module.exports = {
  ...withMDX,
  rewrites,
  env: {
    version: process.env.npm_package_version,
    base: process.env.BASE || 'https://cinematt.photography',
  },
};
