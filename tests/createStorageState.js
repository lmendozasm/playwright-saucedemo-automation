const { chromium } = require('playwright');

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(process.env.BASE_URL || 'https://www.saucedemo.com');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Wait for the inventory page to appear after login
  await page.locator('.inventory_list').waitFor({ timeout: 60000 });

  await context.storageState({ path: 'tests/storageState.json' });
  await browser.close();
  console.log('✅ Stored auth state at tests/storageState.json');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
