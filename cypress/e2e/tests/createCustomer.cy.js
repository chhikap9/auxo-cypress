import { contactsSteps } from '../step_definition/contactsSteps.js';

describe('Create a customer', () => {
  it('should create an individual customer', () => {
    cy.login(); // login in the command.js file
    contactsSteps.createIndividualCustomer();
  });
});