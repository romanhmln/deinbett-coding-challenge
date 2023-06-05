class loginPage {

    elements = {
        registrationButton: () => cy.get('#registerAccount'),
        userEmailField: () => cy.get('#loginEmail'),
        userPwField: () => cy.get('#loginPassword'),
        forgotPasswordLink: () => cy.get('.existingAccount__forgotten'),
        loginButton: () => cy.get('#login-submit'),
    }

    navigateToRegistrationPage() {
        return this.elements.registrationButton().click();
    }

    fillTheLoginEmailField(email) {
        return this.elements.userEmailField().type(email);
    }

    fillTheLoginPasswordField(password) {
        return this.elements.userPwField().type(password);
    }

    clickForgotPasswordLink() {
        return this.elements.forgotPasswordLink().click();
    }

    clickLoginButton() {
        return this.elements.loginButton().click()
    }   

}

module.exports = new loginPage()