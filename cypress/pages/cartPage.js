class CartPage {

    elements = {
        cartEntry: () => cy.get('.cartEntries .cartEntry--cart'),
        cartEntryName: () => cy.get('.simpleText--sizeArticleName'),
        cartEntryDelete: () => cy.get(".cartEntry__closeButton"),
        cartEntryPrices: () => cy.get(".articleCartPrices"),
        cartPrice: () => cy.get(".summaryBox__value").first(),
    }

    verifyItemIsInTheBasket(item) {
        this.elements.cartEntryName().contains(item).should('exist')
    }

    verifyAmountOfItems(amount) {
        this.elements.cartEntry().should('have.length', amount)
    }

}

module.exports = new CartPage()