Feature: Registration feature to check personal data management for the website

    Tasks 1 (a) and (b)

    Scenario: User registration flow
        Given user is on the Login page
        When user clicks Register button
        And chooses the "Herr" salutation
        And fills the Firstname field with random value
        And fills the Lastname field with random value
        And fills the Email field with random value
        And fills the Password field with random value
        And fills the Confirm password field with random value
        And checks the AGB checkbox
        And user clicks the Submit button
        Then user shall see the Dein Konto header button

    Scenario: User forgot password flow
        Given user is on the login page
        And user clicks on Forgot password link
        When user fills in Email field
        And user click Submit button
        And user retrieves the Email
        And user clicks on the link in the email
        And user fills in New password and Confirm password fields
        And user clicks Submit button
        Then restore password fields should disappear
        And login fields should be visible