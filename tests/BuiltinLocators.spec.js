const { test, expect } = require("@playwright/test");

test("Buitin Locators", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    { waitUntil: "domcontentloaded" },
  );

  // page.getByAltText() - to locate an element, usually image, by its alternative text.
  const logo = page.getByAltText("company-branding");
  await expect(logo).toBeVisible();

  // page.getByPlaceholder() - to lacate as input element by its placeholder text.
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");

  // page.getByRole() - to locate an element by explicit & implicit accessibility attributes.
  await page.getByRole("button", { type: "submit" }).click();

  // page.getByText() - to locate an element by its text content.

  const name = await page
    .locator("//p[@class='oxd-userdropdown-name']")
    .textContent();
  await expect(await page.getByText(name)).toBeVisible();
});
