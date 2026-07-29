export class CheckoutStepOnePage {
  // Selectors
  get firstNameInput() { return cy.get('[data-test="firstName"]'); }
  get lastNameInput() { return cy.get('[data-test="lastName"]'); }
  get postalCodeInput() { return cy.get('[data-test="postalCode"]'); }
  get continueButton() { return cy.get('[data-test="continue"]'); }
  
  fillCustomerInfo(firstName, lastName, postalCode) {
    if (firstName) this.firstNameInput.clear().type(firstName);
    if (lastName) this.lastNameInput.clear().type(lastName);
    if (postalCode) this.postalCodeInput.clear().type(postalCode);
  }

  clickContinue() {
    this.continueButton.click();
  }
}
