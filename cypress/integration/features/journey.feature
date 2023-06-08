Feature: Registration feature to check personal data management for the website

    #Task 1 (a) and (b)

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
        Given user is on the Login page
        And user clicks on Forgot password link
        When user fills in Email field
        And user click Submit button
        And user retrieves the Email
        And user clicks on the link in the email
        And user fills in New password and Confirm password fields
        And user clicks Submit button
        Then restore password fields should disappear
        And login fields should be visible

    #Task 2 (a) and (b)

    Scenario: User logs in with recently created password (Valid)
        Given user is on the Login page
        And user fills in the Email field with valid data
        And user fills in the Password field with valid data
        When user click the Login button
        And user clicks the My account button
        Then user is on My account page
        And static greeting text is visible

    Scenario: User logs in with old password (Invalid)
        Given user is on the Login page
        And user fills in the Email field with valid data
        And user fills in the Password field with old data
        When user click the Login button
        Then error message should appear stating "Benutzername nicht gefunden oder Passwort falsch."

     #Task 3 (a), (b), (c)

    Scenario: User adds multiple items to the wishlist
        Given user is on the Login page
        And user fills in the Email field with valid data
        And user fills in the Password field with valid data
        And user click the Login button
        When he adds 5 "products" to the wishlist
        |products                          |
        |Einzelbett Varese                 |
        |Kaltschaummatratze Emma One       |
        |Boxspring-Motorbett Carmen        |
        |Boxspringbett mit Bettkasten Kosmo|
        |Bettgestell Gloria                |
        And user visits the wishlist
        Then there are 5 items in the wishlist

    Scenario: User adds items from the wishlist to the basket
        Given user is on the Login page
        And user fills in the Email field with valid data
        And user fills in the Password field with valid data
        And user click the Login button
        And user visits the wishlist
        And there are 5 items in the wishlist
        And user fills in the plz value as '14193'
        When user adds all the items to his basket
        And user visits his basket
        Then there are 5 items in the basket
        And user can see all added items in the basket
        |products                          |
        |Einzelbett Varese                 |
        |Kaltschaummatratze Emma One       |
        |Boxspring-Motorbett Carmen        |
        |Boxspringbett mit Bettkasten Kosmo|
        |Bettgestell Gloria                |

    Scenario: Check the basket merchandise value calculation
        Given user is on the Login page
        And user fills in the Email field with valid data
        And user fills in the Password field with valid data
        And user click the Login button
        And user visits the wishlist
        And there are 5 items in the wishlist
        And user fills in the plz value as '14193'
        When user adds all the items to his basket
        And user visits his basket
        Then there are 5 items in the basket
        And merchandise value is equal to checkout sum excluding delivery and packaging
