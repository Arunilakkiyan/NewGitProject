import { createBdd } from "playwright-bdd";

const{Given,When,Then} =createBdd();
Given('I navigate to {string}', async ({page}, url) => {
  
    await page.goto(url)
  
});

When('I entered Email {string}', async ({page}, name) => {
  // Step: And I entered Email "arun@gmail.com"
  // From: login.feature:7:5

  await page.locator('#email').fill(name)
});

When('I enter Password {string}', async ({page}, pass) => {
  // Step: And I enter Password "Arun@311"
  // From: login.feature:8:5

await page.locator('#pass').fill(pass)
});

Then('I should verify url', async ({page}) => {
    const titile=await page.title()
    console.log(titile);
    
  

});
