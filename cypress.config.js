const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
    specPattern: 'cypress/integration/**/*.js',
    baseUrl: 'https://www.saucedemo.com',
    video: true,  // Enable video recording for test runs
    screenshotOnRunFailure: true,  // Take screenshots on test failure
    videosFolder: 'cypress/videos', // Specify where videos are stored
    screenshotsFolder: 'cypress/screenshots', // Specify where screenshots are stored
    trashAssetsBeforeRuns: true, // Clean up old assets (videos/screenshots) before each run
  },
});
