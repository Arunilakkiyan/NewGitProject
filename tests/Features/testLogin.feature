Feature: User Login
  As a user, I want to be able to log in to the application
  So that I can access my personalized content.

  Scenario: Successful login with valid credentials
    Given the user is on the login page "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    When the user enters valid "pranav@testroverautomation.com" and "Test1234"
    And clicks on the login button
    Then the user should be redirected to the homepage
    And a "Login Successful" message should be displayed

  Scenario: Unsuccessful login with invalid password
    Given the user is on the login page "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    When the user "pranav@testroverautomation.c" a valid "Hello"
  
    And clicks on the login button
    And the user should remain on the login page
