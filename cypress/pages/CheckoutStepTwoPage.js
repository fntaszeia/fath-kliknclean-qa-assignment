export class CheckoutStepTwoPage {
  get finishButton() { return cy.get('[data-test="finish"]'); }
  get itemTotal() { return cy.get('.summary_subtotal_label'); }
  get tax() { return cy.get('.summary_tax_label'); }
  get total() { return cy.get('.summary_total_label'); }
  
  getInventoryItemName(productName) {
    return cy.contains('.inventory_item_name', productName);
  }

  getInventoryItemPrice(productName) {
    return cy.contains('.cart_item', productName).find('.inventory_item_price');
  }

  clickFinish() {
    this.finishButton.click();
  }
}
