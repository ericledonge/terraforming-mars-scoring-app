describe('Layout', () => {
  before(() => {
    cy.visit('/');
  });
  it('should render the app title', () => {
    cy.get('[data-test="app-title"]').should(
      'contain',
      'Terraforming Mars Scoring App'
    );
  });
  it('should render the app credits', () => {
    cy.get('[data-test="app-credits"]').should('contain', 'Eric Le Donge');
  });
});
