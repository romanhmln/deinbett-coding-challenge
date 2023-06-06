class listingPage {

    elements ={
        searchBar: () => cy.get('#searchFieldInputId'),
        loginButton: () => cy.get('.headerElement--login'),
        myAccountPage: () => cy.get(".headerElement a[href='/kundenkonto']"),
        wishListButton: () => cy.get('.headerElement__link--wishlist'),
        cartButton: () => cy.get('.headerElement__element--cart'),
    }

    visit(){
        cy.visit("/")
    }

    search(data) {
        this.elements.searchBar().type(data).type('{enter}')
    }
    
    openLoginPage() {
        this.elements.loginButton().click()
    }

    openAccountPage() {
        this.elements.myAccountPage().click()
        cy.url().should('contain', '/kundenkonto')
    }

    openWishList() {
        this.elements.wishListButton().click
    }

    openCart() {
        this.elements.cartButton().click
    }
}
module.exports = new listingPage()