class ProductListingPage {

    elements = {
        productTile: () => cy.get('.articleTileV2'),
        productName: () => cy.get('.articleTileV2__name'),
        productWishList: () => cy.get(".articleTileV2__wishlistIcon"),
    }

    selectItem() {
        this.elements.productTile().first().click()
    }

    addToWishList() {
        this.elements.productWishList().click()
    }
}

module.exports = new ProductListingPage()