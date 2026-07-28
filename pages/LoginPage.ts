import { Page, Locator } from '@playwright/test';

/**
 * LoginPage - Page Object Model for SauceDemo Login Page
 */
export class LoginPage {
  readonly page: Page;
  // TODO: Define locators

  constructor(page: Page) {
    this.page = page;
    // TODO: Initialize locators using page.locator()
  }

  async goto() {
    // TODO: Navigate to base URL
  }

  async login(username: string, password: string) {
    // TODO: Fill username, password and click login button
  }

  async getErrorMessage(): Promise<string> {
    // TODO: Return error message text
    return '';
  }
}
