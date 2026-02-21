const { test, expect } = require("@playwright/test");

test("Soft Assertions", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  //   // hard assertions
  //   await expect(page).toHaveTitle("STORE123");
  //   // terminates the test if the assertion fails, it will not execute the next assertions
  //   await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
  //   await expect(page.locator(".navbar-brand")).toBeVisible();

  //   soft assertions
  await expect.soft(page).toHaveTitle("STORE123");
  // does not terminate the test if the assertion fails, it will continue to execute the next assertions
  await expect.soft(page).toHaveURL("https://www.demoblaze.com/index.html");
  await expect.soft(page.locator(".navbar-brand")).toBeVisible();
});
