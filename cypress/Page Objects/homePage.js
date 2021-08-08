/// <reference types="Cypress" />

export default class homePage {

    visitPage = () => cy.visit("https://www.medicines.org.uk/emc/browse-companies");
    
    clickAcceptCookies = () => cy.get('#onetrust-accept-btn-handler');

    getFirstRecord = () => cy.get('.ieleft > ul > li').first();

    getThirdRecord = () => cy.get('.ieleft > ul > :nth-child(3)');

    getLastRecord = () => cy.get('.ieright > ul > li').last();

};
