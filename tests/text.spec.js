const {test,expect}=require("@playwright/test");

test("Text Validation",async ({page})=>{

    await page.goto("https://www.facebook.com/")

      const text=await page.getByText(" helps you connect and share with the people in your life.").textContent()

    console.log(text);
    


})