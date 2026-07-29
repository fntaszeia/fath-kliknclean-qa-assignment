/**
 * InventoryPage - Page Object Model for SauceDemo Products Catalog
 */
export class InventoryPage {
  // Selectors
  get cartLink() { return cy.get('[data-test="shopping-cart-link"]'); }
  get cartBadge() { return cy.get('[data-test="shopping-cart-badge"]'); }
  get sortDropdown() { return cy.get('[data-test="product-sort-container"]'); }
  get itemPrices() { return cy.get('.inventory_item_price'); }

  getAddToCartButton(itemSlug) {
    return cy.get(`[data-test="add-to-cart-${itemSlug}"]`);
  }

  getRemoveFromCartButton(itemSlug) {
    return cy.get(`[data-test="remove-${itemSlug}"]`);
  }

  addProductToCart(itemSlug) {
    this.getAddToCartButton(itemSlug).click();
  }

  removeProductFromCart(itemSlug) {
    this.getRemoveFromCartButton(itemSlug).click();
  }

  getCartBadgeCount() {
    return this.cartBadge;
  }

  goToCart() {
    this.cartLink.click();
  }

  selectSortOption(option) {
    this.sortDropdown.select(option);
  }

  getProductPrices() {
    return this.itemPrices;
  }
}
