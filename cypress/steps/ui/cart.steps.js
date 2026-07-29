import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

Given('I am logged in as {string}', (username) => {
  loginPage.goto();
  loginPage.login(username, 'secret_sauce');
});

When('I add {string} to the cart', (itemSlug) => {
  inventoryPage.addProductToCart(itemSlug);
});

Then('the cart badge should show {string}', (count) => {
  inventoryPage.getCartBadgeCount().should('have.text', count);
});

Given('I have {string} in the cart', (itemSlug) => {
  inventoryPage.addProductToCart(itemSlug);
});

When('I remove {string} from the cart', (itemSlug) => {
  inventoryPage.removeProductFromCart(itemSlug);
});

Then('the cart badge should not be visible', () => {
  inventoryPage.getCartBadgeCount().should('not.exist');
});
