const { test, expect } = require("@playwright/test");

test(" Handling Alert ", async ({ page }) => {
  await page.goto("https://letcode.in/alert");

  page.on("dialog", async (d) => {
    expect(d.type().includes("alert"));

    await d.accept();
  });

  await page.locator("#accept").click();

  await page.waitForTimeout(5000);
});

test("Confirm Alert", async ({ page }) => {
  await page.goto("https://letcode.in/alert");

  page.on("dialog", async (d) => {
    await expect(d.message()).toContain("Are you happy with LetCode?");
    await d.dismiss();
  });

  await page.locator("#confirm").click();
});

test("Prompt Alert", async ({ page }) => {
  await page.goto("https://letcode.in/alert");

  page.on("dialog", async (dialog) => {
    // await expect(d.message()).toContain("Are you happy with LetCode?");
    await dialog.type("Hello");
    await dialog.accept();

    
  });

  await page.locator("#prompt").click();

 
});
