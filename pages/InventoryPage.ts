import { Page, Locator } from '@playwright/test';

/**
 * InventoryPage - Page Object Model for SauceDemo Products Catalog Page
 */
export class InventoryPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly shoppingCartBadge: Locator;
  readonly shoppingCartLink: Locator;
  readonly productSortDropdown: Locator;
  readonly inventoryItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('.title');
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
    this.shoppingCartLink = page.locator('.shopping_cart_link');
    this.productSortDropdown = page.locator('[data-test="product-sort-container"]');
    this.inventoryItems = page.locator('.inventory_item');
  }

  /**
   * Add item to cart by its product data-test attribute name (e.g. 'sauce-labs-backpack')
   */
  async addProductToCart(itemSlug: string) {
    await this.page.locator(`[data-test="add-to-cart-${itemSlug}"]`).click();
  }

  /**
   * Remove item from cart from the product catalog view
   */
  async removeProductFromCart(itemSlug: string) {
    await this.page.locator(`[data-test="remove-${itemSlug}"]`).click();
  }

  /**
   * Get the current cart badge count (returns 0 if badge is not present)
   */
  async getCartBadgeCount(): Promise<number> {
    if (await this.shoppingCartBadge.isVisible()) {
      const text = await this.shoppingCartBadge.textContent();
      return text ? parseInt(text, 10) : 0;
    }
    return 0;
  }

  /**
   * Navigate to the cart page by clicking the shopping cart icon
   */
  async goToCart() {
    await this.shoppingCartLink.click();
  }

  /**
   * Select a product sorting option ('az', 'za', 'lohi', 'hilo')
   */
  async selectSortOption(option: string) {
    await this.productSortDropdown.selectOption(option);
  }
}
