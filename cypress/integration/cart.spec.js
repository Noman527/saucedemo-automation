describe('SauceDemo - Cart Tests', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.url().should('include', '/inventory.html')
    })
  
    it('TC004 - Add single item to cart', () => {
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('.shopping_cart_badge').should('contain', '1')
    })
  
    it('TC005 - Add multiple items to cart', () => {
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
      cy.get('.shopping_cart_badge').should('contain', '2')
    })
  
    it('TC006 - Remove item from cart', () => {
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[data-test="remove-sauce-labs-backpack"]').click()
      cy.get('.shopping_cart_badge').should('not.exist')
    })
  })
  