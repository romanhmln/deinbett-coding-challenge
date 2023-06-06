class loginPage {

    elements = {
        registrationButton: () => cy.get('#registerAccount'),
        userEmailField: () => cy.get('#loginEmail'),
        userPwField: () => cy.get('#loginPassword'),
        forgotPasswordLink: () => cy.get('.existingAccount__forgotten'),
        loginButton: () => cy.get('#login-submit'),

        errorOnLogin: () => cy.get("[title='loginEmail'].input--error"),
        errorOnPw: () => cy.get("[title='loginPassword'].input--error"),
        labelError: () => cy.get("#loginEmail-error"),
    }

    visit() {
        cy.visit('/login')
        cy.url().should('contain', '/login')
    }

    navigateToRegistrationPage() {
        this.elements.registrationButton().click();
        cy.url().should("contain", '/registrierung')
    }

    fillTheLoginEmailField(email) {
        this.elements.userEmailField().type(email);
    }

    fillTheLoginPasswordField(password) {
        this.elements.userPwField().type(password);
    }

    clickForgotPasswordLink() {
        this.elements.forgotPasswordLink().click();
    }

    clickLoginButton() {
        this.elements.loginButton().click({force: true})
    }

}

module.exports = new loginPage()