describe('SauceDemo - Filtering/Sorting Tests', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com');
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
    });
  
    it('TC011 - Sort products by Price (low to high)', () => {
      cy.get('.product_sort_container').select('lohi');
      cy.get('.inventory_item_price').then(prices => {
        const priceTexts = [...prices].map(p => parseFloat(p.innerText.replace('$', '')));
        const sorted = [...priceTexts].sort((a, b) => a - b);
        expect(priceTexts).to.deep.equal(sorted);
      });
    });
  });
  