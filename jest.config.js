module.exports = {
    preset: 'jest-playwright-preset',
    testEnvironmentOptions: {
      'jest-playwright': {
        launchOptions: {
            headless: false
          },
          contextOptions: {
            ignoreHTTPSErrors: true,
            viewport: {
              width: 1920,
              height: 1080
            }
          },
          //browsers: ["chromium", "firefox", "webkit"],
          browsers: ["chromium"],
          devices: [],
          exitOnPageError: false
      },
    },
    testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
    transform: {
      "^.+\\.(ts)$": "ts-jest",
    }
}