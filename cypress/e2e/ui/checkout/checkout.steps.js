import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../../pages/LoginPage';
import { InventoryPage } from '../../../pages/InventoryPage';
import { CartPage } from '../../../pages/CartPage';
import { CheckoutStepOnePage } from '../../../pages/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from '../../../pages/CheckoutStepTwoPage';
import { CheckoutCompletePage } from '../../../pages/CheckoutCompletePage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutStepOnePage = new CheckoutStepOnePage();
const checkoutStepTwoPage = new CheckoutStepTwoPage();
const checkoutCompletePage = new CheckoutCompletePage();

Given('I am logged in as {string}', (username) => {
  loginPage.goto();
  loginPage.login(username, 'secret_sauce');
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
  checkoutStepOnePage.fillCustomerInfo(firstName, lastName, postalCode);
});

When('I continue to the overview', () => {
  checkoutStepOnePage.clickContinue();
});

When('I finish the order', () => {
  checkoutStepTwoPage.clickFinish();
});

Then('I should see the order confirmation message {string}', (message) => {
  checkoutCompletePage.getCompleteHeaderText().should('have.text', message);
});

When('I sort products by {string}', (sortOption) => {
  inventoryPage.selectSortOption(sortOption);
});

Then('the product prices should be sorted in descending order', () => {
  inventoryPage.getProductPrices().then(($prices) => {
    const prices = $prices.toArray().map(el => parseFloat(el.innerText.replace('$', '')));
    const sortedPrices = [...prices].sort((a, b) => b - a);
    expect(prices).to.deep.equal(sortedPrices);
  });
});
