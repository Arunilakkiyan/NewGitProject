const {test,expect} =require('@playwright/test')


test('Soft Assertions Demo',async ({page})=>{
    await page.goto('https://facebook.com');

    //Hard Assertion

    await expect.soft(page).toHaveTitle('Facook – log in or sign up');
    await expect(page).toHaveURL('https://www.facebook.com/');

});