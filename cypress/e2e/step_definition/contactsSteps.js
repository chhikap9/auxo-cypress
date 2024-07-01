import { sidebar } from '../page_objects/sidebar.js';
import { customerList } from '../page_objects/customerList.js';
import { newCustomer } from '../page_objects/newCustomer.js';

class StepIndex {
  navigateToCustomerList() {
    cy.clickOnElement(sidebar.contacts);
    cy.clickOnElement(sidebar.customerList);
    cy.urlShouldInclude('/contacts/customers');
    cy.elementShouldContainText(customerList.header, 'Customers');
  }

  createIndividualCustomer() {
    this.navigateToCustomerList();
    cy.clickOnElement(customerList.newCustomerBtn);
    cy.elementShouldContainText(newCustomer.header, 'New Customer');
    cy.inputTextIntoElement(newCustomer.firstNameTextField, 'firstName');
    cy.inputTextIntoElement(newCustomer.lastNameTextField, 'lastName');
    cy.inputTextIntoElement(newCustomer.mobileTextField, '0281591594');
    cy.inputTextIntoElement(newCustomer.phoneTextField, '094567894');
    cy.inputTextIntoElement(newCustomer.emailTextField, 'test@test.com');
    cy.clickOnElement(newCustomer.nextBtn);
  }
}
export const contactsSteps = new StepIndex();