describe('Login Test', () => {
  it('Fails login with wrong password', () => {
    cy.visit('https://example.com/login')
    cy.get('input[name="username"]').type('testuser')
    cy.get('input[name="password"]').type('wrongpassword')
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid credentials').should('exist')
  })
})
