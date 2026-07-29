import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../../pages/LoginPage';
import { InventoryPage } from '../../../pages/InventoryPage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

Given('I am logged in as {string} with password {string}', (username, password) => {
  loginPage.goto();
  loginPage.login(username, password);
});

When('I add {string} to the cart', (itemSlug) => {
  inventoryPage.addProductToCart(itemSlug);
});

Then('the cart badge should show {string}', (count) => {
  // TODO: Assert cart badge displays the expected count
});

Given('I have {string} in the cart', (itemSlug) => {
  inventoryPage.addProductToCart(itemSlug);
});

When('I remove {string} from the cart', (itemSlug) => {
  inventoryPage.removeProductFromCart(itemSlug);
});

Then('the cart badge should not be visible', () => {
  // TODO: Assert cart badge element does not exist
});
