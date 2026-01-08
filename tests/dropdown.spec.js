const { test, expect } = require("@playwright/test");

test("Handling Dropdown", async ({ page }) => {
  await page.goto("https://www.google.com/");

  await page.locator("//textarea[@name='q']").fill("iphone");

  await page.waitForTimeout(3000); // Waits for 3 seconds
  let allOptions = await page.locator("//ul[@class='G43f7e']/li").all();
  console.log(allOptions.length);

  for (let option of allOptions) {
    // let text= await option.textContent()

    let text = await option.innerText();
    if (text == "iPhone 17") {
      await option.click();
    }
  }

  console.log(await page.title());
});
