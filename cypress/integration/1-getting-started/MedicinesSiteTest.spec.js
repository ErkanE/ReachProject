import homePage from '../../Page Objects/homePage';
import recordPage from '../../Page Objects/recordPage';

context('test case', () => {

    const pharmaPage = new homePage();
    const record = new recordPage();
    const jsonFile = 'cypress/Json file/companyInfo.json'
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var imageName = null;
    var companyName = null;
    var recordData = null;
    var recordDataAlt = null;

    before(() => {
        cy.visit('/')
        cy.setCookie('OptanonConsent', 'consentId=09212136-d108-407e-814c-1294471f821f&datestamp=Mon+Aug+09+2022+13%3A02%3A17+GMT%2B0100+(British+Summer+Time)&version=6.12.0&interactionCount=1&isIABGlobal=false&hosts=&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0010%3A1&AwaitingReconsent=false');
        cy.setCookie('OptanonAlertBoxClosed', '2022-08-09T12:03:35.335Z');
    });

    describe("enters page", () => {

        it("Records Third record details of tab letter ", () => {

            for (var i = 0; i <= alphabet.length - 1; i++) {

                var index = alphabet[i];

                if (!(index == "X" || index == "Y")) {

                    console.log(index);

                    cy.get('.browse').contains(index).click();

                    pharmaPage.getFirstRecord().click("left");

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
                        recordData.push("Image name");
                        recordData.push(imageName);
                        recordData.push("Company name");
                        recordData.push(companyName);
                        list[recordData[recordData.length - 1]] = recordData;
                        // write the merged array
                        cy.writeFile(jsonFile, list);
                    });

                    cy.go("back");

                    cy.log(index);
                }

                if (!(index == "J" || index == "Q" || index == "U" || index == "W" || index == "Z" || index == "X" || index == "Y")) {

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
                        recordData.push("Image name");
                        recordData.push(imageName);
                        recordData.push("Company name");
                        recordData.push(companyName);
                        list[recordData[recordData.length - 1]] = recordData;
                        // write the merged array
                        cy.writeFile(jsonFile, list);
                    });

                    cy.log(recordData);

                    cy.go('back');

                }

                if (!(index == "Q" || index == "X" || index == "Y")) {

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
                        recordData.push("Image name");
                        recordData.push(imageName);
                        recordData.push("Company name");
                        recordData.push(companyName);
                        list[recordData[recordData.length - 1]] = recordData;
                        // write the merged array
                        cy.writeFile(jsonFile, list);
                    });

                    cy.log(recordData);

                    cy.go('back');
                }

            }

        });

    });

    console.log(JSON.stringify(jsonFile));

});

