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
  moduleNameMapper: {
    '^assets/(.*)$': '<rootDir>/assets/$1',
    '^components/(.*)$': '<rootDir>/components/$1',
    '^hooks/(.*)$': '<rootDir>/hooks/$1',
    '^lib/(.*)$': '<rootDir>/lib/$1',
    '^models/(.*)$': '<rootDir>/models/$1',
    '^pages/(.*)$': '<rootDir>/pages/$1',
    '^styles/(.*)$': '<rootDir>/styles/$1',
    '^(config|styles|testutils)$': '<rootDir>/$1',
  },
  testEnvironment: 'jest-environment-jsdom-sixteen'
};
