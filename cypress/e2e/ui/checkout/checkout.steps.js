import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../../pages/LoginPage';
import { InventoryPage } from '../../../pages/InventoryPage';
import { CartPage } from '../../../pages/CartPage';
import { CheckoutPage } from '../../../pages/CheckoutPage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

Given('I am logged in as {string} with password {string}', (username, password) => {
  loginPage.goto();
  loginPage.login(username, password);
});

When('I add {string} to the cart', (itemSlug) => {
  inventoryPage.addProductToCart(itemSlug);
});

When('I go to the cart', () => {
  inventoryPage.goToCart();
});

When('I proceed to checkout', () => {
  cartPage.proceedToCheckout();
});

When('I fill in checkout info with first name {string} last name {string} and postal code {string}', (firstName, lastName, postalCode) => {
  checkoutPage.fillCustomerInfo(firstName, lastName, postalCode);
});

When('I continue to the overview', () => {
  checkoutPage.clickContinue();
});

When('I finish the order', () => {
  checkoutPage.clickFinish();
});

Then('I should see the order confirmation message {string}', (message) => {
  // TODO: Assert the completion header text matches the expected message
});

When('I sort products by {string}', (sortOption) => {
  inventoryPage.selectSortOption(sortOption);
});

Then('the product prices should be sorted in descending order', () => {
  // TODO: Get all product prices and assert they are sorted high to low
});
