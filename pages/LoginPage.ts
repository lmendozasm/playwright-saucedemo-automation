import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput = '[data-test="username"]';
  readonly passwordInput = '[data-test="password"]';
  readonly loginButton = '[data-test="login-button"]';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }
}
