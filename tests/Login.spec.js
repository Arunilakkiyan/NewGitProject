const {test,expect}=require("@playwright/test");
import { LoginPage } from "../pages/LoginPage";
// test("valis Login",async ({page})=>{

//     await page.goto("https://www.facebook.com/")

//     await page.getByPlaceholder("Email address or phone number").fill("Hello Mc")

//     await page.getByPlaceholder("Password").fill("@Bluemix123")

//     await page.locator("//button[text()='Log in']").click();


// })

test('test',async({page})=>{

    const login=new LoginPage(page);
    await login.gotoLoginPage();

    await page.waitForTimeout(5000)
    await login.login("Arun","Arun@123")


})

