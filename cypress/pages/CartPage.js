/**
 * CartPage - Page Object Model for SauceDemo Cart View
 */
export class CartPage {
  // Selectors
  get checkoutButton() { return cy.get('[data-test="checkout"]'); }
  get continueShoppingButton() { return cy.get('[data-test="continue-shopping"]'); }

  getRemoveButton(itemSlug) {
    return cy.get(`[data-test="remove-${itemSlug}"]`);
  }

  removeItem(productName) {
    const itemSlug = productName.toLowerCase().replace(/ /g, '-');
    this.getRemoveButton(itemSlug).click();
  }

  proceedToCheckout() {
    this.checkoutButton.click();
  }

  getInventoryItemName(productName) {
    return cy.contains('.inventory_item_name', productName);
  }
}
