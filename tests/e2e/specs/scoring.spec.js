describe('Scoring Logic', () => {
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
});
