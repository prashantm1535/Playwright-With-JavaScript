const { test, expect } = require("@playwright/test");

test("Buitin Locators", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  // page.getByAltText() - to locate an element, usually image, by its alternative text.
  const logo = page.getByAltText("company-branding");
  await expect(logo).toBeVisible();
});
