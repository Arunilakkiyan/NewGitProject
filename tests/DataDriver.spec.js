const {test,expect}=require("@playwright/test");

import fs from'fs';
import path from 'path';
import{parse} from 'csv-parse/sync'

const records =parse(fs.readFileSync(path.join(__dirname,"../test_Data/testdata.csv")),
{
    columns:true,
    skip_empty_lines:true,
});


for(const record  of records){

test(`Data Driven Using Csv ${record.Name}${record.Pass}`,async({page})=>{


     await page.goto("https://www.facebook.com/")

    await page.getByPlaceholder("Email address or phone number").fill(record.Name)

    await page.getByPlaceholder("Password").fill(record.Pass)

    await page.waitForTimeout(5000);
    await page.locator("//button[text()='Log in']").click();


});
};
    