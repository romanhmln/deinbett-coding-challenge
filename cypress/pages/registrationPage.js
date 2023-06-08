class RegistrationPage {

    elements = {
        salutationDropdown: () => cy.get('#salutation'),
        firstNameField: () => cy.get("#firstName"),
        lastNameField: () => cy.get("#lastName"),
        emailField: () => cy.get("#email"),
        passwordField: () => cy.get("#password"),
        confirmPasswordField: () => cy.get("[name='passwordRepeat']"),
        newsletterCheckbox: () => cy.get(".accountNew__checkbox"),
        AGBCheckbox: () => cy.get(".accountNew__agbCheckbox span.checkbox__checkbox"),
        submitButton: () => cy.get("#register-submit"),
    }

    chooseSalutation(salutation) {
        this.elements.salutationDropdown().select(salutation);
    }

    fillTheFirstNameField(firstName) {
        this.elements.firstNameField().clear().type(firstName)
        this.elements.firstNameField().should('have.value', firstName)
    }

    fillTheLastNameField(lastName) {
        this.elements.lastNameField().clear().type(lastName)
        this.elements.lastNameField().should('have.value', lastName)
    }

    fillTheEmailField(email) {
        this.elements.emailField().clear().type(email)
        this.elements.emailField().should('have.value', email)
    }

    fillThePasswordField(password) {
        this.elements.passwordField().clear().type(password)
    }

    fillTheConfirmPasswordField(password) {
        this.elements.confirmPasswordField().clear().type(password)
    }

    checkTheNewsletterCheckbox() {
        this.elements.newsletterCheckbox().click()
    }

    checkTheAGBCheckbox() {
        this.elements.AGBCheckbox().click()
    }

    submitRegistrationData() {
        this.elements.submitButton().click()
    }
}

module.exports = new RegistrationPage()