# SauceDemo Cypress Automation

This repository contains Cypress end-to-end test cases for [SauceDemo](https://www.saucedemo.com/), including login, product filter, add to cart, checkout, and error handling.

## ✅ Features Covered
- Login with valid and invalid credentials
- Add to Cart functionality
- Product sorting/filtering
- Logout process
- Checkout workflow
- Error validations

## 🚀 Tech Stack
- Cypress 12+
- JavaScript (ES6)
- Mocha + Chai (Cypress default)

## 📂 Test File
All test cases are inside `cypress/e2e/saucedemo.cy.js`.

## 📸 Screenshots
Cypress will automatically capture screenshots for failed tests in the `/cypress/screenshots/` directory.

## 🧪 Run Tests

```bash
npx cypress open    # for GUI mode
npx cypress run     # for headless CLI mode
