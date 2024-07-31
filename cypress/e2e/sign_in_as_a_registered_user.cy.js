import SigninPage from "../pages/SigninPage.js";

context('As a registered user', () => {  
  describe('Able to sign in to Tango app', () => {
  it('Open URL', () => {
    cy.fixture('users.json').then((users) => {
        const user = users[0]
        cy.clearCookies()
        SigninPage.login(users.email, users.password)
    });

  });

  it('Able to redirect to my dashboard', () => {
    cy.contains('Team Library').should('be.visible')
    cy.contains('Search').should('be.visible')
    cy.contains('Settings & members').should('be.visible')
    cy.contains("What's new?").should('be.visible')
    cy.contains('Drafts').should('be.visible')
    cy.contains('Shared with me').should('be.visible')
    cy.contains('Starred').should('be.visible')
    cy.contains('Team Library').should('be.visible')
    cy.contains('Trash').should('be.visible')
    cy.contains('New folder').should('be.visible')
    cy.contains('Steps to Creating Effective Knowledge Content for Writing How-to Materials').should('be.visible')
  });

  it('Able to log out', () => {
    cy.contains('button', 'Workspace').click()
    cy.contains('Log out').click();
    cy.contains('Sign in to Tango').should('be.visible')
  });
}); 
});

// TODO for this week
// - Create a new POM for the left nav bar
// - Add an e2e test for profile settings
// - Add an e2e test for inviting members
// - Add an e2e test for Billing
// - Add an e2e test for creating a new Tango