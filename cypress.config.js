const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Register Allure plugin
      allureWriter(on, config);

      // Add other Node event listeners if needed
      return config;
    },
     env: {
      allureResultsPath: "cypress/allure-results",   // ✅ set correct path
      allure: true,
    },
    specPattern: "cypress/e2e/**/*.cy.js", // your test files
    baseUrl: "https://www.google.com/", // optional base URL
  },
});
