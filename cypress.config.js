const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // register Allure reporter plugin
      allureWriter(on, config);

      // you can add other node event listeners here if needed
      return config;
    },
    specPattern: "cypress/e2e/**/*.cy.js", // your test file pattern
  },
  reporter: 'cypress-mochawesome-reporter', // optional, if you also want Mochawesome
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    overwrite: false,
    html: true,
    json: true
  }
});
