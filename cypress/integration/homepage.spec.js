describe('The Homepage', () => {
  it('shows the Star Wars movies', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Episode 4 - A New Hope')
    cy.contains('Episode 5 - The Empire Strikes Back')
    cy.contains('Episode 6 - Return of the Jedi')
    cy.contains('Episode 1 - The Phantom Menace')
    cy.contains('Episode 2 - Attack of the Clones')
    cy.contains('Episode 3 - Revenge of the Sith')
    cy.contains('Episode 7 - The Force Awakens')
  })

  it('shows a link to the login page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Log In').click()
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/login')
    })
  })
})
