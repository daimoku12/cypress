//npm i --save-dev cypress-mochawesome-reporter - install
//https://www.npmjs.com/package/cypress-mochawesome-reporter - make change in cypress.config.js
//Add import 'cypress-mochawesome-reporter/register' in support/e2e.js
//Run test via CLI - npx cypress run --spec cypress\e2e\report.cy.js

describe('browser navigation', () => 
{
  it('Navigation', () => {
    cy.visit("https://demo.opencart.com/")
    cy.get("li:nth-child(7) a:nth-child(1)").click() //go on camera page
    cy.go('back')
    cy.go('forward')
  })
})