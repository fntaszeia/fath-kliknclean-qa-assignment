import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

test.describe('SauceDemo Authentication Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Scenario 1: Successful Login with valid credentials', async () => {
    // TODO: Write test for successful login using standard_user / secret_sauce
  });

  test('Scenario 2: Invalid Login with locked out user', async () => {
    // TODO: Write test for invalid login using locked_out_user / secret_sauce
  });
});
