describe('SauceDemo - Error Handling Tests', () => {
    it('TC013 - Attempt login with blank credentials', () => {
      cy.visit('https://www.saucedemo.com');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').should('contain', 'Username is required');
    });
  });
  