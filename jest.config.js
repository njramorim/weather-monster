module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/{components,store,lib}/**/*.js',
    '!src/**/style.js',
    '!src/index.js',
    '!src/components/App.js',
    '!src/store/index.js'
  ],
  coveragePathIgnorePatterns: ['<rootDir>/src/components/styles/'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json'],
  setupFiles: ['<rootDir>/config/enzyme.config.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js', '**/spec.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/ '],
  testURL: 'http://localhost',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  }
};
