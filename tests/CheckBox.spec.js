const {test,expect} = require("@playwright/test")


test("Handling Text Box",async ({page})=>{

    await page.goto("https://www.facebook.com/");

    await page.getByText("Create new account").click();

    await page.locator("(//input[@id='sex'])[1]").click();

    expect(await page.getByText("Create new account").isEnabled).toBeTruthy();


   

})