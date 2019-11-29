module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/{components,store,lib}/**/*.js',
    '!src/**/style.js'
  ],
  coveragePathIgnorePatterns: ['<rootDir>/src/components/styles/'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json'],
  setupFiles: ['<rootDir>/enzyme.config.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js', '**/spec.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/ '],
  testURL: 'http://localhost',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: false,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  }
};
