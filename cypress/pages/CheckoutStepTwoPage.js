export class CheckoutStepTwoPage {
  get finishButton() { return cy.get('[data-test="finish"]'); }

  clickFinish() {
    this.finishButton.click();
  }
}
