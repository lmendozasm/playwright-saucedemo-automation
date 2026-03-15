import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test('user can complete a purchase', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addBackpack();
  await inventoryPage.addTShirt();
  await inventoryPage.addBikeLight();
  await inventoryPage.goToCart();
  await cartPage.checkout();
  await checkoutPage.fillInformation('Tess', 'Garcia', 'l5n2s6');
  await checkoutPage.finishCheckout();
  await expect(page).toHaveURL(/checkout-complete/);
});
