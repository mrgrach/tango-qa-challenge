/********************************************************/
/********************** UI Objects **********************/
/********************************************************/
export default class SigninPage {
    static visitUrl() {
        cy.visit(`https://app.tango.us/sign-in`)
        return '/login';
    };

    static getEmail() {
        return cy.get('#email')
    };
      
    static getPassword() {
        return cy.get('#password')
    };
      
    static getContinue() {
        return cy.get('button[type=submit]').contains('Continue')
    }

    static getLogo() {
        return cy.get('svg').should('have.attr', 'viewBox', '0 0 108 47')
    }

    static getAppHomeUrl() {
        return cy.url().should('eq', 'https://app.tango.us/app/home');
    }

    static getContWithPersonalEmail() {
        return cy.contains('button', 'Continue with personal email')
    }

    static getFirstName() {
        return cy.get('#firstname')
    }

    static getLastName() {
        return cy.get('#lastname')

    }

/******************** End Objects **************************/

/********************************************************/
/******************** Interactions **********************/
/********************************************************/
    static enterEmail(email) {
        this.getEmail().clear().type(email)
    }

    static enterPassword(password) {
        this.getPassword().clear().type(password)
    }

    static clickContinue() {
        this.getContinue().click()
    }

    static clickPersonalEmail() {
        this.getContWithPersonalEmail().click()
    }

    static login(email, password) {
        this.visitUrl()
        this.verifyUi()
        this.enterEmail(email)
        this.enterPassword(password)
        this.clickContinue()
        this.getAppHomeUrl()
    }

    static verifyUi() {
        cy.contains('Sign in to Tango').should('be.visible')
        cy.contains('Step-by-step guidance right on your screen.').should('be.visible')
        cy.contains('Continue with Google').should('be.visible')
        cy.contains('or sign in with email').should('be.visible')
        cy.contains('Work Email').should('be.visible')
        cy.contains('Create an account').should('be.visible')
        this.getLogo()
    }

    static verifyWorkOrPersonalEmailView() {
        cy.contains('Tango is better at work').should('be.visible')
        cy.contains('It looks like you are signing up with a personal email.').should('be.visible')
        cy.contains("Using a work email will help you find your team and personalize Tango based on your company's needs.").should('be.visible')
        cy.contains('Use work email instead').should('be.visible')
        cy.contains('Continue with personal email').should('be.visible')
    }

    static signup() {
        this.visitUrl()
        this.verifyUi()
        this.enterEmail()
        this.clickContinue()
        this.verifyWorkOrPersonalEmailView()
        this.clickPersonalEmail()
        this.getFirstName().type
        this.getLastName().type
        this.clickContinue
    }
}
/******************** End Interactions **************************/

