const { test, expect } = require("@playwright/test");
//test.use({viewport:{width:1366,height:700}})
test("Simple Alert", async ({ page }) => {
  await page.goto("https://letcode.in/alert");

  page.on("dialog", async (d) => {
    expect(d.type()).toContain("alert");

    await d.accept();
  });

  await page.locator("#accept").click();

  //await page.waitForTimeout(5000)
});

test("Prompt Alert", async ({ page }) => {
  await page.goto("https://letcode.in/alert");

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Are you happy with LetCode?");

    await dialog.accept();
  });

  await page.locator("#confirm").click();
});
