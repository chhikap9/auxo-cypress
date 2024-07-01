// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

const defaultTimeout = 10000;

Cypress.Commands.add(
    'login',
    (username = Cypress.env('username'), password = Cypress.env('password')) => {
      cy.visit(Cypress.env('url')); 
      cy.get('input[name="username"]').type(username); 
      cy.get('input[name="password"]').type(password); 
      cy.get('button[type="submit"]').click(); 
      cy.url().should('include', '/dashboard'); 
      cy.get('.page-header__block').contains('Dashboard'); 
    }
  );

Cypress.Commands.add('clickOnElement', (element, waitfor = defaultTimeout) => {
  cy.log('Clicking on element', element);
  cy.get(element, { timeout: waitfor }).click({ timeout: waitfor });
});

Cypress.Commands.add('urlShouldInclude', (suffix) => {
    cy.url().should('include', suffix);
  });

Cypress.Commands.add(
  'elementShouldContainText',
  (cssSelector, text, waitfor = defaultTimeout) => {
    cy.get(cssSelector, { timeout: waitfor }).should('to.contain', text);
  }
);

Cypress.Commands.add(
    'inputTextIntoElement',
    (element, text, waitfor = defaultTimeout) => {
      cy.log('Inputting text into element', element, text);
      cy.get(element, { timeout: waitfor }).type(text);
    }
  );