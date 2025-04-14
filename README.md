
# Cypress Testing Practice

This repository contains beginner-level Cypress tests I created to improve my automation testing skills.

## Technologies
- Cypress
- JavaScript
- Node.js

## Example Test
```javascript
describe('Google Search', () => {
  it('Searches using Cypress', () => {
    cy.visit('https://www.google.com')
    cy.get('input[name="q"]').type('Cypress GitHub Example{enter}')
    cy.contains('Cypress').should('exist')
  })
})
```
