const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
});

module.exports = {
  ...withMDX,
  env: {
    version: process.env.npm_package_version
  }
};
