import { test, expect } from '@playwright/test';

test.describe('SauceDemo Checkout & Regression Scenarios', () => {
  test.beforeEach(async ({ page }) => {
    // TODO: Setup login
  });

  test('Scenario 5: Complete Checkout Flow', async () => {
    // TODO: Write test to add item, proceed to checkout, fill details, and finish order
  });

  test('Scenario 6 (Regression): Verify Product Sorting by Price (High to Low)', async ({ page }) => {
    // TODO: Write regression test to sort items by price high to low and assert array ordering
  });
});
