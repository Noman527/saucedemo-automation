describe('SauceDemo - Logout Test', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com');
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
    });
  
    it('TC012 - Logout from the application', () => {
      cy.get('#react-burger-menu-btn').click();
      cy.contains('Logout').click();
      cy.url().should('include', 'saucedemo.com');
      cy.get('#login-button').should('be.visible');
    });
  });
  