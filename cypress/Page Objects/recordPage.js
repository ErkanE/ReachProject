/// <reference types="Cypress" />

export default class recordPage {

    getCompanyName = () => cy.get('h1');

    getImage = () => cy.get('.img-responsive');
    
    getAllRecordInfo = () => cy.get('.col-md-12 > .row');

};