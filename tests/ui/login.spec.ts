import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

test.describe('SauceDemo Authentication Tests', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.goto();
  });

  test('Scenario 1: Successful Login with valid credentials', async () => {
    // Act: Perform login with valid user
    await loginPage.login('standard_user', 'secret_sauce');

    // Assert: User should be navigated to products catalog page
    await expect(inventoryPage.pageTitle).toHaveText('Products');
    await expect(inventoryPage.page).toHaveURL(/.*inventory.html/);
  });

  test('Scenario 2: Invalid Login with locked out user', async () => {
    // Act: Attempt login with locked out user credentials
    await loginPage.login('locked_out_user', 'secret_sauce');

    // Assert: Error message should be visible with locked out message
    const errorText = await loginPage.getErrorMessage();
    expect(errorText).toContain('Epic sadface: Sorry, this user has been locked out.');
  });
});
