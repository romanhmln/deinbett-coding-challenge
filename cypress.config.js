const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 15000,
    chromeWebSecurity: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: "https://www.deinbett.de",
    specPattern: "**/*.feature",
    blockHosts: ["drtst"],
  },
});
