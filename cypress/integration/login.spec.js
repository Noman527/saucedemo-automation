describe('SauceDemo - Login Test', () => {
    it('TC001 - Valid login with standard_user', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.url().should('include', '/inventory.html')
    })
  
    it('TC002 - Invalid login with wrong password', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('wrong_password')
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
    })
  
    it('TC003 - Locked-out user login', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').type('locked_out_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out')
    })
  })
  