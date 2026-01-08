 const {test,expect, chromium}=require("@playwright/test");


// test("Windows",async({browser})=>{
//    const context=await  browser.newContext();

//    const page= await context.newPage();

//     await page.goto("https://www.flipkart.com/")

//     await page.locator("//input[@name='q']").fill("Iphone");;
    
//     await page.keyboard.press("Enter")

//     //await page.getByText("Apple iPhone 17 (Black, 512 GB)").click();



//     const [newPage] =await Promise.all(
// [


//     await page.waitForEvent("page"),

//      page.locator("(//a[@class='k7wcnx'])[1]").click()

  
// ]

//     )
//        await newPage.waitForTimeout(5000)

//    await newPage.locator("(//a[contains(@href,'apple-iphone-17-pro-max-cosmic')])[1]").click()

   

// })
test("Windows",async()=>{


// const pagePromise = context.waitForEvent('page');
// await page.getByText('open new tab').click();
// const newPage = await pagePromise;
// // Interact with the new page normally.
// await newPage.getByRole('button').click();
// console.log(await newPage.title());

const browser=await chromium.launch();
const context=await browser.newContext();

const page1=await context.newPage();
const page2=await context.newPage();

const all =context.pages();

console.log("Number Of Pages "+all);


await page1.goto("https://www.facebook.com/")
console.log(await page1.title());

//

// await page2.goto("https://www.instagram.com/")
// console.log(awaitpage2.title());


 await page2.goto("https://www.flipkart.com/")

    await page2.locator("//input[@name='q']").fill("Iphone");;
    
    await page2.keyboard.press("Enter")


    const pagePromise=context.waitForEvent('page');
    await page2.getByText("Apple iPhone 17 (Black, 512 GB)").click();

    const newPage=await pagePromise;

    console.log(await newPage.title());
    



});