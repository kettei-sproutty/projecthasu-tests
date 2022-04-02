module.exports = {
  ...require('./jest.common.cjs'),
  setupFilesAfterEnv: ['@hasu/jest/jest.setup.js'],
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'json', 'js', 'cjs', 'mjs'],
  testEnvironment: 'jest-environment-jsdom',
}
