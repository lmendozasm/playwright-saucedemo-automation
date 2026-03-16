import { test, expect } from '../../fixtures/testFixtures';

import { getUser } from '../../utils/users';

const standardUser = getUser('standard_user');
const lockedOutUser = getUser('locked_out_user');

test('user can log in with valid credentials', async ({ loginPage, page }) => {
  await loginPage.login(standardUser.username, standardUser.password);
  await expect(page).toHaveURL(/inventory/);
});

test('locked out user sees error message', async ({ loginPage }) => {
  await loginPage.login(lockedOutUser.username, lockedOutUser.password);
  await expect(loginPage.page.locator('[data-test="error"]')).toBeVisible();
});
