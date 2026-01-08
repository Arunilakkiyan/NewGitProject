Feature: Verify Login

    Verify User is able to login with valid and invalid credentials

    Scenario: Verify user is able to login with valid credentials
    Given I navigate to "https://www.facebook.com/"
    And I entered Email "arun@gmail.com"
    And I enter Password "Arun@311"
    Then I should verify url