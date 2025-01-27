module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json',
      },
    ],
  },
  moduleNameMapper: {
    '^@cowprotocol/(.*)$': '<rootDir>/pkg/$1/src',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.config.js'],
}
