/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json',
        isolatedModules: true,
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!@cowprotocol)'],
  moduleNameMapper: {
    '^@cowprotocol/common$': '<rootDir>/../cow-common/src/index.ts',
    '^@cowprotocol/common/(.*)$': '<rootDir>/../cow-common/src/$1',
    '^@cowprotocol/config$': '<rootDir>/../cow-config/src/index.ts',
    '^@cowprotocol/config/(.*)$': '<rootDir>/../cow-config/src/$1',
    '^@cowprotocol/order-book$': '<rootDir>/../cow-order-book/src/index.ts',
    '^@cowprotocol/order-book/(.*)$': '<rootDir>/../cow-order-book/src/$1',
    '^@cowprotocol/order-signing$': '<rootDir>/../cow-order-signing/src/index.ts',
    '^@cowprotocol/order-signing/(.*)$': '<rootDir>/../cow-order-signing/src/$1',
    '^@cowprotocol/sdk-ethers-v5$': '<rootDir>/../cow-sdk-ethers-v5/src/index.ts',
    '^@cowprotocol/sdk-ethers-v5/(.*)$': '<rootDir>/../cow-sdk-ethers-v5/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[tj]sx?$',
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!src/**/__generated__/**', '!src/**/index.ts'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  // Add this to ensure node_modules can be resolved correctly
  moduleDirectories: ['node_modules', '../../node_modules'],
}
