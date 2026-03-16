const { chromium } = require('playwright');

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(process.env.BASE_URL || 'https://www.saucedemo.com');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // Wait for the inventory page to render after login
  await page.waitForSelector('.inventory_list', { timeout: 60000 });

  await context.storageState({ path: 'tests/storageState.json' });
  await browser.close();
  console.log('✅ Stored auth state at tests/storageState.json');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
