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
    // await expect(d.message()).toContain("Are you happy with LetCode?");
    await dialog.type("Hello");
    await dialog.accept();

     await expect(page).toHaveURL('https://www.facebook.com/');

    
  });

  await page.locator("#prompt").click();

 
});

