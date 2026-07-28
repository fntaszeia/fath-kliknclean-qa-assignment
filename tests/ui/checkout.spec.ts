import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test.describe('SauceDemo Checkout & Regression Scenarios', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Scenario 5: Complete Checkout Flow', async () => {
    // 1. Add product to cart
    await inventoryPage.addProductToCart('sauce-labs-backpack');
    await inventoryPage.goToCart();

    // 2. Proceed to checkout
    await cartPage.proceedToCheckout();

    // 3. Fill customer details
    await checkoutPage.fillCustomerInfo('Fath', 'Baskara', '12345');
    await checkoutPage.clickContinue();

    // 4. Finish order
    await checkoutPage.clickFinish();

    // 5. Assert successful order completion message
    const headerText = await checkoutPage.getCompleteHeaderText();
    expect(headerText).toBe('Thank you for your order!');
  });

  test('Scenario 6 (Regression): Verify Product Sorting by Price (High to Low)', async ({ page }) => {
    // Act: Select Price (high to low) sort option
    await inventoryPage.selectSortOption('hilo');

    // Fetch prices of all items visible on screen
    const priceElements = await page.locator('.inventory_item_price').allTextContents();
    const prices = priceElements.map(p => parseFloat(p.replace('$', '')));

    // Assert: Verify prices array is sorted in descending order
    const sortedPrices = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sortedPrices);
  });
});
