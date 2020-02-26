describe('Scoring Logic', () => {
  before(() => {
    cy.visit('/');
  });
  describe('As a player, after entering my score items, I can get my total score', () => {
    before(() => {
      cy.get('[data-test="tr-input"]').type(10);
      cy.get('[data-test="awards-input"]').type(10);
      cy.get('[data-test="milestones-input"]').type(10);
      cy.get('[data-test="forests-input"]').type(10);
      cy.get('[data-test="cities-input"]').type(10);
    });
    it('should display the sum of all the scoring items', () => {
      cy.get('[data-test="total-score"]').should('contain', '50');
    });
  });
  describe('As a player, I need to enter my corporation name', () => {
    before('Given a player which has a corporation card', () => {});
    before('When this player wants to enter his corporation name', () => {
      cy.get('[data-test="corporation-name"]')
        .parent()
        .click();
      cy.get('.v-list-item__title')
        .first()
        .click();
    });
    it('should render his corporation name', () => {
      cy.get('[data-test="form"]').should('contain', 'Thorgate');
    });
  });
});
