describe('SauceDemo - Checkout Tests', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
  
      // Add an item to the cart before each test
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_link').click();
    });
  
    it('TC007 - Proceed to checkout with items in the cart', () => {
      cy.get('[data-test="checkout"]').click();
      cy.url().should('include', '/checkout-step-one');
    });
  
    it('TC008 - Fill in checkout info and continue', () => {
      cy.get('[data-test="checkout"]').click();
      cy.get('[data-test="firstName"]').type('John');
      cy.get('[data-test="lastName"]').type('Doe');
      cy.get('[data-test="postalCode"]').type('12345');
      cy.get('[data-test="continue"]').click();
      cy.url().should('include', '/checkout-step-two');
    });
  
    it('TC009 - Complete the purchase successfully', () => {
      cy.get('[data-test="checkout"]').click();
      cy.get('[data-test="firstName"]').type('John');
      cy.get('[data-test="lastName"]').type('Doe');
      cy.get('[data-test="postalCode"]').type('12345');
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="finish"]').click();
      cy.get('.complete-header').should('contain', 'Thank you for your order!');
    });
  });
  