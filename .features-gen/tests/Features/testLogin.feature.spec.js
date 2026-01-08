// Generated from: tests\Features\testLogin.feature
import { test } from "playwright-bdd";

test.describe('User Login', () => {

  test('Successful login with valid credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is on the login page "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"', null, { page }); 
    await When('the user enters valid "pranav@testroverautomation.com" and "Test1234"', null, { page }); 
    await And('clicks on the login button', null, { page }); 
    await Then('the user should be redirected to the homepage', null, { page }); 
    await And('a "Login Successful" message should be displayed', null, { page }); 
  });

  test('Unsuccessful login with invalid password', async ({ Given, When, And, page }) => { 
    await Given('the user is on the login page "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"', null, { page }); 
    await When('the user "pranav@testroverautomation.c" a valid "Hello"', null, { page }); 
    await And('clicks on the login button', null, { page }); 
    await And('the user should remain on the login page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Features\\testLogin.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is on the login page \"https://ecommerce-playground.lambdatest.io/index.php?route=account/login\"","stepMatchArguments":[{"group":{"start":30,"value":"\"https://ecommerce-playground.lambdatest.io/index.php?route=account/login\"","children":[{"start":31,"value":"https://ecommerce-playground.lambdatest.io/index.php?route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the user enters valid \"pranav@testroverautomation.com\" and \"Test1234\"","stepMatchArguments":[{"group":{"start":22,"value":"\"pranav@testroverautomation.com\"","children":[{"start":23,"value":"pranav@testroverautomation.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":59,"value":"\"Test1234\"","children":[{"start":60,"value":"Test1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And clicks on the login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the homepage","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And a \"Login Successful\" message should be displayed","stepMatchArguments":[{"group":{"start":2,"value":"\"Login Successful\"","children":[{"start":3,"value":"Login Successful","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given the user is on the login page \"https://ecommerce-playground.lambdatest.io/index.php?route=account/login\"","stepMatchArguments":[{"group":{"start":30,"value":"\"https://ecommerce-playground.lambdatest.io/index.php?route=account/login\"","children":[{"start":31,"value":"https://ecommerce-playground.lambdatest.io/index.php?route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When the user \"pranav@testroverautomation.c\" a valid \"Hello\"","stepMatchArguments":[{"group":{"start":9,"value":"\"pranav@testroverautomation.c\"","children":[{"start":10,"value":"pranav@testroverautomation.c","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"Hello\"","children":[{"start":49,"value":"Hello","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And clicks on the login button","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And the user should remain on the login page","stepMatchArguments":[]}]},
]; // bdd-data-end