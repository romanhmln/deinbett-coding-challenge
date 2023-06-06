import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { acceptCookies, destroyRequestThatBlocksLoadEvent, stringGen } from "../helpers";
import listingPage from "../../pages/listingPage";
const loginPage = require("../../pages/loginPage");
const registrationPage = require("../../pages/registrationPage");
const forgotPwPage = require("../../pages/forgotPasswordPage");

const serverId = Cypress.env('serverId')

let randomName = stringGen(10, 'name')
let randomPw = stringGen(10, 'password')
let randomPwNew = stringGen(10, 'password')
let email = `${stringGen(8, 'name').toLowerCase()}@${Cypress.env('subdomain')}`
let forgotPwLink = null;

Given("user is on the Login page", () => {
    loginPage.visit()
    acceptCookies()
})

When('user clicks Register button', () => {
    loginPage.navigateToRegistrationPage()
})

And('chooses the {string} salutation', salutation => {
    registrationPage.chooseSalutation(salutation)
})

And('fills the Firstname field with random value', () => {
    registrationPage.fillTheFirstNameField(randomName)
})

And('fills the Lastname field with random value', () => {
    registrationPage.fillTheLastNameField(randomName)
})

And('fills the Email field with random value', () => {
    registrationPage.fillTheEmailField(email)
})

And('fills the Password field with random value', () => {
    registrationPage.fillThePasswordField(randomPw)
})

And('fills the Confirm password field with random value', () => {
    registrationPage.fillTheConfirmPasswordField(randomPw)
})

And('checks the AGB checkbox', () => {
    registrationPage.checkTheAGBCheckbox()
})

And('user clicks the Submit button', () => {
    registrationPage.submitRegistrationData()
})

Then('user shall see the Dein Konto header button', () => {
    destroyRequestThatBlocksLoadEvent()
    listingPage.elements.myAccountPage().should('exist').and('be.visible')
})

Given('user is on the login page', () => {
    loginPage.visit()
    acceptCookies()
})

And('user clicks on Forgot password link', () => {
    loginPage.clickForgotPasswordLink()
})

When('user fills in Email field', () => {
    forgotPwPage.fillInTheEmailField(email)
})

And('user click Submit button', () => {
    forgotPwPage.clickTheSubmitButton()
})

And('user retrieves the Email', () => {
    cy.wait(60000)
    cy.mailosaurGetMessage(serverId, {
        sentTo: email
    }).then(email => {
        expect(email.subject).to.equal('Passwort zurücksetzen');
        forgotPwLink = email.html.links[4].href;
    })
})

And('user clicks on the link in the email', () => {
    cy.visit(forgotPwLink)
    forgotPwPage.elements.forgotPwNewPasswordField().should('exist').and('be.visible')
})

And('user fills in New password and Confirm password fields', () => {
    forgotPwPage.fillInTheNewPasswordFields(randomPwNew)
})

And('user clicks Submit button', () => {
    forgotPwPage.submitNewPassword()
})

Then('restore password fields should disappear', () => {
    forgotPwPage.elements.forgotPwNewPasswordField().should('not.exist')
    forgotPwPage.elements.forgotPwNewPasswordRepeatField().should('not.exist')
    forgotPwPage.elements.forgotPwNewPasswordSubmitButton().should('not.exist')
})

And('login fields should be visible', () => {
    loginPage.elements.userEmailField().should('exist').and('be.visible')
    loginPage.elements.userPwField().should('exist').and('be.visible')
    loginPage.elements.loginButton().should('exist').and('be.visible')
})
