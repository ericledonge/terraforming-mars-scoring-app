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
    it('should display an input for Forest tiles', () => {
      cy.get('[data-test="forests-input"]').should('be.visible');
    });
    it('should display an input for Cities tiles', () => {
      cy.get('[data-test="cities-input"]').should('be.visible');
    });
  });

  describe('As a player, after entering my score items, I can get my total score', () => {
    before(() => {
      cy.get('[data-test="tr-input"]').type(10);
      cy.get('[data-test="awards-input"]').type(10);
      cy.get('[data-test="milestones-input"]').type(10);
      cy.get('[data-test="forests-input"]').type(10);
      cy.get('[data-test="cities-input"]').type(10);
    });
    it('should display an input for Cities tiles', () => {
      cy.get('[data-test="score-output"]').should('be.visible');
    });
    it('should display the sum of all the scoring items', () => {
      cy.get('[data-test="score-output"]').should('contain', '60');
    });
  });
});
