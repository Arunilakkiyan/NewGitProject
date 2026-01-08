import { expect } from "allure-playwright";
import { createBdd } from "playwright-bdd";

const{Given,When,Then} =createBdd();


Given('the user is on the login page {string}', async ({page}, url) => {
  // Step: Given the user is on the login page "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
  // From: tests\Features\testLogin.feature:6:5

  await page.goto(url)

});

When('the user enters valid {string} and {string}', async ({page}, userName, pass) => {
  // Step: When the user enters valid "pranav@testroverautomation.com" and "Test1234"
  // From: tests\Features\testLogin.feature:7:5
  await page.locator("#input-email").fill(userName);
  await page.locator("#input-password").fill(pass)

  
});

When('clicks on the login button', async ({page}) => {
  // Step: And clicks on the login button
  // From: tests\Features\testLogin.feature:8:5
  await page.locator("//input[@value='Login']").click();


});

Then('the user should be redirected to the homepage', async ({page}) => {


    expect(page.url()).toBe('https://ecommerce-playground.lambdatest.io/index.php?route=account/account')
});

Then('a {string} message should be displayed', async ({page}, arg) => {
  // Step: And a "Login Successful" message should be displayed
  // From: tests\Features\testLogin.feature:10:5
  let text=await page.getByText(" Edit your account information").textContent()
  expect(text).toBe(" Edit your account information")
});

When('the user {string} a valid {string}', async ({page}, userName, pass) => {
   await page.locator("#input-email").fill(userName);
  await page.locator("#input-password").fill(pass)
});



Then('the user should remain on the login page', async ({page}) => {
  // Step: And the user should remain on the login page
  // From: tests\Features\testLogin.feature:18:5
   expect(page.url()).toBe("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")

});