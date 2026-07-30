import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const { CartPage } = require('../../pages/CartPage');
const cartPage = new CartPage();

Given('I am logged in as {string}', (username) => {
  loginPage.goto();
  loginPage.login(username, 'secret_sauce');
});

When('I add {string} to the cart', (productName) => {
  inventoryPage.getProductPrice(productName).then(price => {
    cy.wrap(price).as('savedProductPrice');
  });
  inventoryPage.addProductToCart(productName);
});

Then('the cart item count should show {string}', (count) => {
  inventoryPage.getCartBadgeCount().should('have.text', count);
});

Then('I should see the product {string} in the cart', (productName) => {
  cartPage.getInventoryItemName(productName).should('be.visible');
});

Then('I should not see the product {string} in the cart', (productName) => {
  cartPage.getInventoryItemName(productName).should('not.exist');
});

When('I remove {string} from the cart page', (productName) => {
  cartPage.removeItem(productName);
});

Given('I have {string} in the cart', (itemSlug) => {
  inventoryPage.addProductToCart(itemSlug);
});

When('I remove {string} from the cart', (itemSlug) => {
  inventoryPage.removeProductFromCart(itemSlug);
});

Then('the cart item count should not be visible', () => {
  inventoryPage.getCartBadgeCount().should('not.exist');
});
