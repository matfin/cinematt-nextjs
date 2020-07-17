module.exports = {
  globals: {
    window: true
  },
  rootDir: '.',
  coverageDirectory: './coverage',
  setupFiles: ['./jestsetup.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  coveragePathIgnorePatterns: [
    'node_modules',
    'testutils.ts',
  ],
  moduleDirectories: ['node_modules'],
  testEnvironment: 'jest-environment-jsdom-sixteen'
};
