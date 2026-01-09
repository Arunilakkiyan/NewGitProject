const {test,expect, chromium}= require ('@playwright/test')



test("browser context",async () => {
  const browser = await chromium.launch();  // Or 'chromium' or 'webkit'.
  // Create a new incognito browser context.
  const context = await browser.newContext();
  // Create a new page in a pristine context.
  const page = await context.newPage();
  await page.goto('https://example.com');

  // Gracefully close up everything
  //await context.close();
  //await browser.close();
})

test("Test1",()=>{
  console.log("Test 1");
  
})