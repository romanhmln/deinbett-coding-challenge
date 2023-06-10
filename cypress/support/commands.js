// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-mailosaur'

import { TIMEOUT_EMAIL } from './helpers';

Cypress.Commands.add('getTheResetPasswordLink', (user) => {
    cy.wait(TIMEOUT_EMAIL).mailosaurGetMessage(Cypress.env('serverId'), {
        sentTo: user.getEmail()
    }).then(email => {
        expect(email.subject).to.equal('Passwort zurücksetzen');
        cy.wrap(email.html.links[4].href).then(links => {
            cy.visit(links);
        })
    })
})

Cypress.Commands.add("acceptCookies", () => {
    cy.get('[data-accept-action="selected"]').click()
})