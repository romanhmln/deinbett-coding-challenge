const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    "MAILOSAUR_API_KEY": "dR7IKzPJUHfvK7oSqUEjUHe772eHg3LD",
    "serverId" : "5fffqskt",
    "subdomain": "5fffqskt.mailosaur.net"
  },
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

    experimentalSessionAndOrigin: true
  },
});
