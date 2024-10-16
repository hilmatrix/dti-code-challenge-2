module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
      // Handle CSS imports
      '\\.(css|scss)$': 'identity-obj-proxy',
    },
  };
  