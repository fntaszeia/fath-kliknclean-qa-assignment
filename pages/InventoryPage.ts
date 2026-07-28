import { Page, Locator } from '@playwright/test';

/**
 * InventoryPage - Page Object Model for SauceDemo Products Catalog
 */
export class InventoryPage {
  readonly page: Page;
  // TODO: Define locators

  constructor(page: Page) {
    this.page = page;
    // TODO: Initialize locators
  }

  async addProductToCart(itemSlug: string) {
    // TODO: Add product to cart
  }

  async removeProductFromCart(itemSlug: string) {
    // TODO: Remove product from cart
  }

  async getCartBadgeCount(): Promise<number> {
    // TODO: Return cart badge count number
    return 0;
  }

  async goToCart() {
    // TODO: Click shopping cart icon
  }

  async selectSortOption(option: string) {
    // TODO: Select dropdown option
  }
}
