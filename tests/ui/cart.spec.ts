import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

test.describe('SauceDemo Shopping Cart Tests', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    // Login before each cart test
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Scenario 3: Add Product to Cart', async () => {
    // Act: Add Sauce Labs Backpack to cart
    await inventoryPage.addProductToCart('sauce-labs-backpack');

    // Assert: Cart badge count should update to 1
    const badgeCount = await inventoryPage.getCartBadgeCount();
    expect(badgeCount).toBe(1);
  });

  test('Scenario 4: Remove Product from Cart', async () => {
    // Arrange: Add product first
    await inventoryPage.addProductToCart('sauce-labs-backpack');
    expect(await inventoryPage.getCartBadgeCount()).toBe(1);

    // Act: Remove product from inventory view
    await inventoryPage.removeProductFromCart('sauce-labs-backpack');

    // Assert: Cart badge should be removed / 0
    const badgeCount = await inventoryPage.getCartBadgeCount();
    expect(badgeCount).toBe(0);
  });
});
