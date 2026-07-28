import { Page, Locator } from '@playwright/test';

/**
 * CheckoutPage - Page Object Model for Checkout Steps & Completion
 */
export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly completeHeader: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.completeHeader = page.locator('.complete-header');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  /**
   * Fill out customer checkout information form
   */
  async fillCustomerInfo(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  /**
   * Click continue button to move to order review step
   */
  async clickContinue() {
    await this.continueButton.click();
  }

  /**
   * Click finish button to complete the purchase
   */
  async clickFinish() {
    await this.finishButton.click();
  }

  /**
   * Get order completion header text (e.g. 'Thank you for your order!')
   */
  async getCompleteHeaderText(): Promise<string> {
    return await this.completeHeader.textContent() || '';
  }
}
