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

  // 4.1) expect(locator).toBeEnabled() - to verify the element is enabled
  // 4.2) expect(locator).toBeDisabled() - to verify the element is disabled
  const searchBox = await page.locator("#small-searchterms");
  await expect(searchBox).toBeEnabled();

  // 5.1) expect(locator).toBeChecked() - to verify the checkbox is checked
  // 5.2) expect(locator).toBeUnchecked() - to verify the checkbox is unchecked

  // check the radio button
  const genderMaleRadioButton = await page.locator("#gender-male");
  await genderMaleRadioButton.check(); // to check the radio button
  await expect(genderMaleRadioButton).toBeChecked();

  // check the checkbox
  const newsletterCheckbox = await page.locator(
    "#NewsLetterSubscriptions_0__IsActive",
  );
  await expect(newsletterCheckbox).toBeChecked();

  // 6) expect(locator).toHaveAttribute() - to verify the attribute of the element
  const registerButton = await page.locator("#register-button");
  await expect(registerButton).toHaveAttribute("type", "submit");
});
