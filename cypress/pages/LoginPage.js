/**
 * LoginPage - Page Object Model for SauceDemo Login Page
 */
export class LoginPage {
  // Selectors
  get usernameInput() { return cy.get('[data-test="username"]'); }
  get passwordInput() { return cy.get('[data-test="password"]'); }
  get loginButton() { return cy.get('[data-test="login-button"]'); }
  get errorMessage() { return cy.get('.error-message-container'); }

  goto() {
    cy.visit('/');
  }

  login(username, password) {
    if (username) {
      this.usernameInput.clear().type(username);
    }
    if (password) {
      this.passwordInput.clear().type(password);
    }
    this.loginButton.click();
  }

  getErrorMessage() {
    return this.errorMessage;
  }
}
