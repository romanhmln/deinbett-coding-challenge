class listingPage {

    elements ={
        searchBar: () => cy.get('#searchFieldInputId'),
        loginButton: () => cy.get('.headerElement--login'),
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

    openWishList() {
        this.elements.wishListButton().click
    }

    openCart() {
        this.elements.cartButton().click
    }
}
module.exports = new listingPage()