// https://docs.cypress.io/api/introduction/api.html

describe('Terraforming counter app', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.get('[data-test="app-title"]').should(
      'contain',
      'Terraforming Mars Counter App'
    );
  });
  describe('As a player, I can enter my terraform ratings (TR)', () => {
    it('should display an input for TR', () => {
      cy.get('[data-test="tr-input"]').should('be.visible');
    });
    it('should display an input for Awards', () => {
      cy.get('[data-test="awards-input"]').should('be.visible');
    });
    it('should display an input for Milestones', () => {
      cy.get('[data-test="milestones-input"]').should('be.visible');
    });
  });
});
