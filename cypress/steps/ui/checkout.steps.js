import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutStepOnePage } from '../../pages/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from '../../pages/CheckoutStepTwoPage';
import { CheckoutCompletePage } from '../../pages/CheckoutCompletePage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutStepOnePage = new CheckoutStepOnePage();
const checkoutStepTwoPage = new CheckoutStepTwoPage();
const checkoutCompletePage = new CheckoutCompletePage();



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

Then('I should see the product {string} with the saved price on the overview page', (productName) => {
  checkoutStepTwoPage.getInventoryItemName(productName).should('be.visible');
  cy.get('@savedProductPrice').then((savedPrice) => {
    checkoutStepTwoPage.getInventoryItemPrice(productName).should('have.text', savedPrice);
  });
});

Then('the total amount should be calculated correctly', () => {
  cy.get('@savedProductPrice').then((savedPrice) => {
    const priceNum = parseFloat(savedPrice.replace('$', ''));
    checkoutStepTwoPage.itemTotal.should('contain.text', priceNum);
    checkoutStepTwoPage.tax.then($tax => {
      const taxNum = parseFloat($tax.text().replace('Tax: $', ''));
      checkoutStepTwoPage.total.should('contain.text', (priceNum + taxNum).toFixed(2));
    });
  });
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
