module.exports = {
  /* setupFilesAfterEnv: ['./test-setup.js'], */
  coverageReporters: ["lcov", "html"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "dist",
    "build",
    ".storybook",
    ".stories",
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  testMatch: ["<rootDir>/__tests__/**/*.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)":
      "<rootDir>/config/jest/fileTransform.js",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],

  setupFiles: ["dotenv/config"],
};
