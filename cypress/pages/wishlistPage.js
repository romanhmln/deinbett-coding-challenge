class WishListPage {

    elements = {
        plzInput: () => cy.get('#zipcode-logistic-input'),
        wishlistEntry: () => cy.get('.wishlistEntry'),
        wishlistNameEntry: () => cy.get('.articleFullName__wishlistEntry'),
        wishlistPrice: () => cy.get(".articlePricesNew"),
        wishlistAddAllToCartButton: () => cy.get('#addAddToWishlist'),
        wishlistDeleteItemButton: () => cy.get('.wishlistEntry__remove'),
        modalWindowCloseButton: () => cy.get('#addToCartCloseBox'),
        modalWindowToCartButton: () => cy.get('#overlayRight [data-testid = "cartOverlayToCartButton"]')
    }

    fillThePlz(plz) {
        this.elements.plzInput().clear().type(plz)
    }

    countWishlistEntries(length) {
        this.elements.wishlistEntry().should('have.length', length)
    }

    selectSpecificEntry(title) {
        this.elements.wishlistEntry().contains(title)
    }

    addAllToCart() {
        this.elements.wishlistAddAllToCartButton().click().wait(5000)
    }

    deleteItem() {
        this.elements.wishlistDeleteItemButton().click()
    }

    closeModal() {
        this.elements.modalWindowCloseButton().click()
    }

    toCart() {
        this.elements.modalWindowToCartButton().click()
        cy.url().should('contain', '/warenkorb')
    }
}

module.exports = new WishListPage()