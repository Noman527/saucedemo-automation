describe('SauceDemo - Error on Partial Checkout Info', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com');
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
  
      // Add item and go to checkout
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_link').click();
      cy.get('[data-test="checkout"]').click();
    });
  
    it('TC014 - Leave First Name blank during checkout', () => {
      cy.get('[data-test="lastName"]').type('Tester');
      cy.get('[data-test="postalCode"]').type('12345');
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="error"]').should('contain', 'Error: First Name is required');
    });
  });
  