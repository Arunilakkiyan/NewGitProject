const{test,expect} =require("@playwright/test")




test.afterAll("After All",async()=>{
    console.log("This Is After ALl ..");
    

})

test.beforeAll("Before All",async()=>{
    console.log("This Is before ALl ..");
    

})

test.afterEach("afterEach",async()=>{
    console.log("This Is AfterEach ..");
    

})
test.beforeEach("beforeEach",async()=>{
    console.log("This Is beforeEach ..");
    

})
test.describe('Group1',()=>{
    
test("Test 1",async({page})=>{
    console.log("This Is Test 1 ... ");
    
})
test("Test 2",async({page})=>{
    console.log("This Is Test 2 ... ");
    
})

})


test.describe.only('Group 2',()=>{

    test("Test3",async({page})=>{
    console.log("This Is Test 3 ... ");
    
})
test("Test4",async({page})=>{
    console.log("This Is Test 4 ... ");
    
})

})
test.describe('Group 3',()=>{

    test("Test 5",async({page})=>{
    console.log("This Is Test 5 ... ");
    
})
test("Test 6",async({page})=>{
    console.log("This Is Test 6 ... ");
    
})

})

