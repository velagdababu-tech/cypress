describe('Google Search', () => {
  it('should have correct title', () => {
    cy.allure().label('feature', 'Google Search');
    cy.visit('/');
    cy.title().should('include', 'Google');
    cy.allure().step('Checked the page title');
  });

    it('should have correct title', () => {
    cy.allure().label('feature', 'Google Search');
    cy.visit('/');
    cy.get('[class="lnXdpd"]').should('exist');
    cy.allure().step('Checked the locator exist');
  });
});
