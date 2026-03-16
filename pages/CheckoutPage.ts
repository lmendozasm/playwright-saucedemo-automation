import { Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput = '[data-test="firstName"]';
  readonly lastNameInput = '[data-test="lastName"]';
  readonly postalCodeInput = '[data-test="postalCode"]';
  readonly continueButton = '[data-test="continue"]';
  readonly finishButton = '[data-test="finish"]';
  readonly totalLabel = '[data-test="total-label"]';

  constructor(page: Page) {
    this.page = page;
  }

  async fillInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.locator(this.firstNameInput).fill(firstName);
    await this.page.locator(this.lastNameInput).fill(lastName);
    await this.page.locator(this.postalCodeInput).fill(postalCode);
    await this.page.locator(this.continueButton).click();
  }

  async finishCheckout() {
    await this.page.locator(this.totalLabel).click();
    await this.page.locator(this.finishButton).click();
  }
}
