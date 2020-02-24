// https://docs.cypress.io/api/introduction/api.html

describe("Terraforming counter app", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Terraforming Mars Counter App");
  });
});
