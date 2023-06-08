class ListingPage {

    elements = {
        searchBar: () => cy.get('#searchFieldInputId'),
        loginButton: () => cy.get('.headerElement--login'),
        myAccountPage: () => cy.get(".headerElement a[href='/kundenkonto']"),
        wishListButton: () => cy.get('.headerElement__link--wishlist'),
        cartButton: () => cy.get('.headerElement--cart'),
    }

    visit() {
        cy.visit("/")
    }

    search(data) {
        cy.wait(1000).scrollTo('top')
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
        cy.wait(3000)
        this.elements.wishListButton().click()
    }

    openCart() {
        this.elements.cartButton().click()
    }
}
module.exports = new ListingPage()