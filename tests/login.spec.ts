import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('user can log in with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  // Add an assertion for successful login, e.g., check for a product page element
  await expect(page).toHaveURL(/inventory/);
});

test('locked out user sees error message', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('locked_out_user', 'secret_sauce');
  // Assert error message is visible
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});