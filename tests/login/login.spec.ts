import { test, expect } from '../testFixtures';

test('user can log in with valid credentials', async ({ loginPage, page }) => {
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);
});

test('locked out user sees error message', async ({ loginPage }) => {
  await loginPage.login('locked_out_user', 'secret_sauce');
  await expect(loginPage.page.locator('[data-test="error"]')).toBeVisible();
});
