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
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^lib/(.*)$': '<rootDir>/src/lib/$1',
    '^models/(.*)$': '<rootDir>/src/models/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^styles/(.*)$': '<rootDir>/src/styles/$1',
    '^(config|styles|testutils)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom-sixteen'
};
