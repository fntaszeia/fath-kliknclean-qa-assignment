import { Page, Locator } from '@playwright/test';

/**
 * CartPage - Page Object Model for SauceDemo Cart View
 */
export class CartPage {
  readonly page: Page;
  // TODO: Define locators

  constructor(page: Page) {
    this.page = page;
    // TODO: Initialize locators
  }

  async removeItem(itemSlug: string) {
    // TODO: Remove item from cart
  }

  async proceedToCheckout() {
    // TODO: Click checkout button
  }
}
