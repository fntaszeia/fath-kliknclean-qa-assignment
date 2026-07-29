import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../../pages/LoginPage';

const loginPage = new LoginPage();

Given('I am on the SauceDemo login page', () => {
  loginPage.goto();
});

When('I login with username {string} and password {string}', (username, password) => {
  loginPage.login(username, password);
});

Then('I should be redirected to the inventory page', () => {
  cy.url().should('include', '/inventory.html');
});

Then('I should see the error message {string}', (message) => {
  loginPage.getErrorMessage().should('be.visible').and('contain.text', message);
});
