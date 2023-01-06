// --Cypress XPath Plugin
// https://github.com/cypress-io/cypress/tree/develop/npm/xpath
// npm install -D @cypress/xpath
// Add require('@cypress/xpath'); in support/e2e.js

//--CSS Selector (tag is optional)
//tag id - #id
//tag class - .class
//tag attribute - [attribute='value']
//tag class attribute

//find - get descendent DOM element (parent:child)

describe('CSSLocators', () => 
{
    it('Launch Browser', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // cy.get(".orangehrm-copyright-wrapper").find("div[class='orangehrm-login-footer'] p:nth-child(2)").should('have.length', 1);
    // //Out of 5 anchor elements find the element with specific href

    cy.contains("Login").click(); //gets DOM element containing text
    //cy.xpath("//a").eq(2).click();
    cy.get("[name='username']").type("Admin")
    cy.get("[name='password']").type("admin123")
    //cy.get("[type=submit]").click();
    cy.xpath("//*[@type='submit']").click();
  })
})

//cy.xpath("//ul[@id = 'test']/li") or
//cy.xpath("//ul[@id = 'test']).xpath("./li") - Chained XPath