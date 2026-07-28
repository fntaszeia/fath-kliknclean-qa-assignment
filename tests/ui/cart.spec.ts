import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

test.describe('SauceDemo Shopping Cart Tests', () => {
  test.beforeEach(async ({ page }) => {
    // TODO: Login before each test
  });

  test('Scenario 3: Add Product to Cart', async () => {
    // TODO: Write test to add product to cart and verify cart badge
  });

  test('Scenario 4: Remove Product from Cart', async () => {
    // TODO: Write test to remove product from cart and verify badge update
  });
});
