describe('The login page', () => {
  it('shows a login form', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('select[id="person"]').select('Darth Vader')
    cy.get('input[id="name"]').type('Bob')
    cy.get('button').click()
  })

  it('shows a link to the home page', () => {
    cy.visit('http://localhost:3000/login')
    cy.contains('Home').click()
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/')
    })
  })
})
