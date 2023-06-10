const { TIMEOUT_HANG_ACTION } = require("../support/helpers")

class ListingPage {

    elements = {
        searchBar: () => cy.get('#searchFieldInputId'),
        loginButton: () => cy.get('.headerElement--login'),
        myAccountPage: () => cy.get(".headerElement a[href='/kundenkonto']"),
        wishListButton: () => cy.get('.headerElement__link--wishlist'),
        cartButton: () => cy.get('.headerElement--cart'),
    }

    search(data) {
        cy.wait(TIMEOUT_HANG_ACTION).scrollTo('top')
        this.elements.searchBar().clear().type(data).type('{enter}')
    }

    openLoginPage() {
        this.elements.loginButton().click()
    }

    openAccountPage() {
        this.elements.myAccountPage().click()
        cy.url().should('contain', '/kundenkonto')
    }

    openWishList() {
        cy.wait(TIMEOUT_HANG_ACTION).scrollTo('top')
        this.elements.wishListButton().click({timeout: 10000})
    }

    openCart() {
        this.elements.cartButton().click()
    }
}
module.exports = new ListingPage()