describe("Google Search", () => {
  it("should have correct title", () => {
    cy.visit("/");
    cy.title().should("include", "Google");
  });

  it("should have correct title", () => {
    cy.visit("/");
    cy.get('[class="lnXdpd"]').should("exist");
  });
});
