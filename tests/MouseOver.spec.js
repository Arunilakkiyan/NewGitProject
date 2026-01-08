const { test,expect } = require("@playwright/test")



test("Page test",async({page})=>{


   await page.goto("https://greenstech.in/")

   await page.locator("(//a[text()='Courses '])[1]").hover();

    await page.locator("//a[text()='Bigdata Training']").click();

})