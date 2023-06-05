Feature: Registration feature to check personal data management for the website

    Scenario: User registration
        Given User is on the home page
        When Navigate to the login page
        And user clicks register button
        And chooses the "Herr" salutation
        And fills the firstname field with "Test Name"
        And fills the lastname field with "Test Surname"
        And fills the email field with "test@test.com"
        And fills the password field with "1!AndTheOnly"
        And fills the confirm password field with "1!AndTheOnly"
        And checks the AGB checkbox
        And user clicks the Submit button
        Then user is on the home page
        And My account button is "visible"