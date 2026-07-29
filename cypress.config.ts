import { defineConfig } from 'cypress';

/**
 * Cypress Configuration for KliknClean Senior QA Assessment
 * Configured for E2E UI tests (SauceDemo) and API tests (FakeStoreAPI).
 */
export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
});
