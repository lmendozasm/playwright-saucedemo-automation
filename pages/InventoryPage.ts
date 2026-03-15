import { Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly backpackAddBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';
  readonly tshirtAddBtn = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]';
  readonly bikeLightAddBtn = '[data-test="add-to-cart-sauce-labs-bike-light"]';
  readonly cartLink = '[data-test="shopping-cart-link"]';

  constructor(page: Page) {
    this.page = page;
  }

  async addBackpack() {
    await this.page.click(this.backpackAddBtn);
  }

  async addTShirt() {
    await this.page.click(this.tshirtAddBtn);
  }

  async addBikeLight() {
    await this.page.click(this.bikeLightAddBtn);
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }
}
