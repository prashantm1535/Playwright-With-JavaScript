const { test, expect } = require("@playwright/test");

test("assertions", async ({ page }) => {
  // open app url
  await page.goto("https://demo.nopcommerce.com/register");

  // 1) expect(page).toHaveURL() - to verify the url of the page
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  // 2) expect(page).toHaveTitle() - to verify the title of the page
  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  // 3) expect(locator).toBeVisible() - to verify the visibility of the element
  const logoElement = await page.locator(".header-logo");
  await expect(logoElement).toBeVisible();
});
