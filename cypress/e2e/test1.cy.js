/// <reference types="cypress" />

// Welcome to Cypress!

describe('example to-do app', () => {

  it('displays two todo items by default', () => {
    cy.visit('https://www.google.com/');
    cy.title().should('eq', 'Google');
  })
})
