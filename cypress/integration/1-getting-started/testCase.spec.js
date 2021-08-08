import homePage from '../../Page Objects/homePage';
import recordPage from '../../Page Objects/recordPage';

context('test case', () => {

    const pharmaPage = new homePage();
    const record = new recordPage();
    const jsonFile = 'cypress/Json file/companyInfo.json'
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var index = null;
    var imageName = null;
    var companyName = null;
    var recordData = null;
    var recordDataAlt = null;

    before(() => {
        cy.visit('/');
    });

    describe("enters page", () => {

        it("enters website and accepts all cookies", () => {
            //makes sure the accept button is available then clicks it
            pharmaPage.clickAcceptCookies().should('be.visible').click();
        });

        //it("iterates alphabet list and performs tests", () => {

            for (var i = 0; i <= alphabet.length; i++) {

                index = alphabet[i];

                console.log(index);

                it("records first record details of tab letter " + index, () => {

                    cy.get('.browse').contains(index.text()).click();

                    pharmaPage.getFirstRecord().click();

                    record.getImage().invoke('attr', 'src').then((image) => {
                        imageName = image;
                    });

                    record.getCompanyName().invoke('text').then((name) => {
                        companyName = name;
                    });

                    record.getAllRecordInfo().find('.col-md-4 > .gfdCompanyDetailsCol').each(($el1) => {
                        recordDataAlt = $el1.text().replace(/\n|\t/g, "!").split('!').filter(item => item);
                    });

                    record.getAllRecordInfo().find('.col-md-5 > .gfdCompanyDetailsCol').each(($el) => {
                        recordData = $el.text().replace(/\n|\t/g, "!").split('!').filter(item => item);
                    });

                    cy.readFile(jsonFile).then((list) => {
                        recordData = recordData.concat(recordDataAlt);
                        recordData.push(imageName);
                        recordData.push(companyName);
                        list[recordData[recordData.length - 1]] = recordData;
                        // write the merged array
                        cy.writeFile(jsonFile, list);
                    });

                    cy.log(recordData);

                    cy.go("back");

                });

                it("Records Third record details", () => {

                    if( pharmaPage.getThirdRecord().c)

                    pharmaPage.getThirdRecord().click("left");

                    record.getImage().invoke('attr', 'src').then((image) => {
                        imageName = image;
                    });

                    record.getCompanyName().invoke('text').then((name) => {
                        companyName = name;
                    });

                    record.getAllRecordInfo().find('.col-md-4 > .gfdCompanyDetailsCol').each(($el1) => {
                        recordDataAlt = $el1.text().replace(/\n|\t/g, "!").split('!').filter(item => item);
                    });

                    record.getAllRecordInfo().find('.col-md-5 > .gfdCompanyDetailsCol').each(($el) => {
                        recordData = $el.text().replace(/\n|\t/g, "!").split('!').filter(item => item);
                    });

                    cy.readFile(jsonFile).then((list) => {
                        recordData = recordData.concat(recordDataAlt);
                        recordData.push(imageName);
                        recordData.push(companyName);
                        list[recordData[recordData.length - 1]] = recordData;
                        // write the merged array
                        cy.writeFile(jsonFile, list);
                    });

                    cy.log(recordData);

                    cy.go('back');

                });

                it("Records last record details", () => {

                    pharmaPage.getLastRecord().click("left");

                    record.getImage().invoke('attr', 'src').then((image) => {
                        imageName = image;
                    });

                    record.getCompanyName().invoke('text').then((name) => {
                        companyName = name;
                    });

                    record.getAllRecordInfo().find('.col-md-4 > .gfdCompanyDetailsCol').each(($el1) => {
                        recordDataAlt = $el1.text().replace(/\n|\t/g, "!").split('!').filter(item => item);
                    });

                    record.getAllRecordInfo().find('.col-md-5 > .gfdCompanyDetailsCol').each(($el) => {
                        recordData = $el.text().replace(/\n|\t/g, "!").split('!').filter(item => item);
                    });

                    cy.readFile(jsonFile).then((list) => {
                        recordData = recordData.concat(recordDataAlt);
                        recordData.push(imageName);
                        recordData.push(companyName);
                        list[recordData[recordData.length - 1]] = recordData;
                        // write the merged array
                        cy.writeFile(jsonFile, list);
                    });

                    cy.log(recordData);

                    cy.go('back');

                });

                i++;

            }

        //});

    });

});