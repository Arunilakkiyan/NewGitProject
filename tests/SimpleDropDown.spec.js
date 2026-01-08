const {test,expect}=require("@playwright/test");


test("Handling DropDown",async({page})=>{
    

   await page.goto("https://letcode.in/dropdowns");

   //await page.locator("#fruits").selectOption({lable:'Orange'});  //Using Lable
   //await page.locator("#fruits").selectOption('Orange');//Using Visible Text

   //await page.locator("#fruits").selectOption({index:3})//using index

   //await page.selectOption("#fruits",'Orange')//to reduce the code


//assertion
//    const alloptions=await page.locator('#fruits option');
//  await expect(alloptions).toHaveCount(6)


//  //to list out all options from drop down
//  const alloption=await page.$$('#fruits option');

//  for(let i=0; i<alloption.length;i++){

//     console.log(await alloption[i].textContent());
    
//  }


    await page.selectOption("#superheros",['The Avengers','Black Panther','Batman'])



   await page.waitForTimeout(5000);


})