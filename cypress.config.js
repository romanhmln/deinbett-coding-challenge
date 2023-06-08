const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },

    defaultCommandTimeout: 15000,
    pageLoadTimeout: 120000,

    chromeWebSecurity: false,
    viewportHeight: 720,
    viewportWidth: 1280,

    baseUrl: "https://www.deinbett.de",

    specPattern: ["**/*.feature"],
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    retries: {
      runMode: 1,
      openMode: 1
    }
  },
});
