import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const listingPage = require("../../pages/listingPage");
const loginPage = require("../../pages/loginPage");
const registrationPage = require("../../pages/registrationPage");

Given("User is on the home page", () => {
    cy.intercept({
        method: 'POST',
        url: 'https://www.deinbett.de/api/article/hotspotsTiles'
      }, req => {
        req.destroy();
      }).visit('/');
    cy.get('[data-accept-action="selected"]').click()
})

When("Navigate to the login page", () => {
    listingPage.openLoginPage()
    cy.url().should('contain', '/login')
})

And('user clicks register button', () => {
    loginPage.navigateToRegistrationPage()
    cy.url().should("contain", '/registrierung')
})

And('chooses the {string} salutation', salutation =>{
    registrationPage.chooseSalutation(salutation)
})

And('fills the firstname field with {string}', (firstName) => {
    registrationPage.fillTheFirstNameField(firstName)
})

And('fills the lastname field with {string}', (lastName) => {
    registrationPage.fillTheLastNameField(lastName)
})

And('fills the email field with {string}', (email) => {
    registrationPage.fillTheEmailField(email)
})

And('fills the password field with {string}', (password) => {
    registrationPage.fillThePasswordField(password)
})

And('fills the confirm password field with {string}', (password) => {
    registrationPage.fillTheConfirmPasswordField(password)
})

And('checks the AGB checkbox', ()=>{
    registrationPage.checkTheAGBCheckbox()
})