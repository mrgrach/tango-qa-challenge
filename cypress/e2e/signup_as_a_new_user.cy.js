import SigninPage from "../pages/SigninPage.js";

import { faker } from '@faker-js/faker';
 
context('As a new user', () => {  
  describe('Able to sign up to Tango app', () => {
  it('Open URL', () => {
    const randomEmail = `${'algrachev5+40@gmail.com'.split('@')[0]}${Math.random().toString(36).substring(2, 7)}@${'algrachev5+40@gmail.com'.split('@')[1]}`;
    const randomPassword = faker.internet.password()
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()

    SigninPage.visitUrl()
    SigninPage.verifyUi()
    cy.contains('Create an account').click()
    cy.wait(500)
    cy.get('#email').type(randomEmail, { force: true })
    SigninPage.clickContinue()
    cy.wait(500)
    SigninPage.verifyWorkOrPersonalEmailView()
    SigninPage.clickPersonalEmail()
    cy.wait(500)
    SigninPage.getFirstName().type(firstName)
    SigninPage.getLastName().type(lastName)
    SigninPage.getPassword().type(randomPassword)
    SigninPage.clickContinue()
    cy.wait(500)
    cy.contains('Almost there').should('be.visible')
    cy.contains(`We sent a temporary sign up code to ${randomEmail}`).should('be.visible')
    cy.contains('Check your inbox and paste the sign-up code below.').should('be.visible')
    cy.get('input').should('have.attr', 'placeholder', 'Paste code')
    cy.get('button[type="submit"]').should('be.disabled')
    cy.contains('Resend').should('be.visible')
    cy.contains('Try a different email').should('be.visible')
    });
  });
});

  // TODO for this week: 
  // - Create a new POM for the signup page  
  // - Install a gmail library to get a verification code from email
  // - Add a test case to verify the reset password scenario 
  // - Add test cases to assert error messages when user types invalid inputs
  // - Add test cases to verify Tango's privacy policy and terms of service links