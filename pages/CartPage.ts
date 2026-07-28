import { Page, Locator } from '@playwright/test';

/**
 * CartPage - Page Object Model for SauceDemo Cart View
 */
export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;
  readonly cartItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    this.cartItems = page.locator('.cart_item');
  }

  /**
   * Remove item from cart view by product slug
   */
  async removeItem(itemSlug: string) {
    await this.page.locator(`[data-test="remove-${itemSlug}"]`).click();
  }

  /**
   * Click checkout button to proceed to customer information step
   */
  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  /**
   * Get total number of items in cart list
   */
  async getItemCount(): Promise<number> {
    return await this.cartItems.count();
  }
}
