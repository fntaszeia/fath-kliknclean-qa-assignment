export class CheckoutCompletePage {
  get completeHeader() { return cy.get('[data-test="complete-header"]'); }

  getCompleteHeaderText() {
    return this.completeHeader;
  }
}
