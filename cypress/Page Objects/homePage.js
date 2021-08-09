/// <reference types="Cypress" />

export default class homePage {

    visitPage = () => cy.visit("https://www.medicines.org.uk/emc/browse-companies");

    clickCookieSettings = () => cy.get('#onetrust-pc-btn-handler').click();

    clickConfirmCookieSettings = () => cy.get('#accept-recommended-btn-handler').click();

    AcceptCookiesButton = () => cy.get('#onetrust-accept-btn-handler');

    getFirstRecord = () => cy.get('.ieleft > ul > li').first();

    getThirdRecord = () => cy.get('.ieleft > ul > :nth-child(3)');

    getLastRecord = () => cy.get('.ieright > ul > li').last();

};
