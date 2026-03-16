import { test, expect } from '../../fixtures/testFixtures';
import { getUser } from '../../utils/users';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test('user can complete a purchase', async ({ loginPage, page }) => {
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  const standardUser = getUser('standard_user');
  await loginPage.login(standardUser.username, standardUser.password);
  await inventoryPage.addBackpack();
  await inventoryPage.addTShirt();
  await inventoryPage.addBikeLight();
  await inventoryPage.goToCart();
  await cartPage.checkout();
  await checkoutPage.fillInformation('Tess', 'Garcia', 'l5n2s6');
  await checkoutPage.finishCheckout();
  await expect(page).toHaveURL(/checkout-complete/);
});
