//https://www.toolsqa.com/cypress-tutorial/

//Describe - used to group tests
//it/ specify - test name

// --Cypress setup
// npm -i intit //creates package.json
// npm install cypress --save -dev //install cypress

// --How to run
// npx cypress open //start cypress
// npx cypress run //to run all tests (headless by default)
// npx cypress run --headed //to run all tests
// npx cypress run --spec cypress\e2e\first.cy.js --headed //run specific file
// npx cypress run --browser chrome //run on specific browser

describe('Login Test', () => 
{
  it.only('Launch Browser', () => {  //it.only runs only that test
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") //open url
    cy.title().should('eq','OrangeHRM') //assertion
    cy.get("[type=submit]").contains("og") //matching text
    cy.get("[name='username']").type("Admin") //enter text
    cy.get("[name='password']").type("admin123")
    cy.get("[type=submit]").click(); //click    
  })

  specify.skip('Skip method', () => { //it.skip - skip a test 
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") //open url
  })

})
// Another way to write describe function () => or function ()
describe('Something', function () 
{
})