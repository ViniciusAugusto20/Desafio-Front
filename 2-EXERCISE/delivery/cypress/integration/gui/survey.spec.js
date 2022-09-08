/// <reference types="cypress" />

describe("Survey", () => {

  beforeEach(() => cy.visit(`${Cypress.config('baseUrl')}`));

  it("try to send survey", () => {
    cy.get("#qa-star4-input").check({force: true})
    cy.get("#qa-name-input").type("Cypress Teste")
    cy.get("#qa-commentary-input").type("Lorem ipsum dolor sit amet, consectetur adipiscing elit")
    cy.get("#qa-submit-button").click()
    cy.get("#qa-toast-success").should("exist")
  });

  it("try to send survey with no name", () => {
    cy.get("#qa-star2-input").check({force: true})
    cy.get("#qa-name-input-error").should("exist")
    cy.get("#qa-commentary-input").type("Lorem ipsum dolor sit amet, consectetur adipiscing elit")
    cy.get("#qa-submit-button").should('be.disabled')
  });


});
