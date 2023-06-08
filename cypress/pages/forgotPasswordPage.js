class forgotPasswordPage {

    elements = {
        forgotPwEmailField: () => cy.get('#passwordForgottenEmail'),
        forgotPwSubmitButton: () => cy.get('#passwordForgottenSubmitId'),
        forgotPwNewPasswordField: () => cy.get('#newPassword'),
        forgotPwNewPasswordRepeatField: () => cy.get('#newPasswordRepeat'),
        forgotPwNewPasswordSubmitButton: () => cy.get('#passwordNewSubmit')
    }

    fillInTheEmailField(email) {
        this.elements.forgotPwEmailField().clear().type(email)
        this.elements.forgotPwEmailField().should('have.value', email)
    }

    clickTheSubmitButton() {
        this.elements.forgotPwSubmitButton().click()
    }

    fillInTheNewPasswordFields(password) {
        this.elements.forgotPwNewPasswordField().clear().type(password)
        this.elements.forgotPwNewPasswordRepeatField().clear().type(password)
    }

    submitNewPassword() {
        this.elements.forgotPwNewPasswordSubmitButton().click({ force: true })
        cy.wait(5000)
    }
}

module.exports = new forgotPasswordPage()