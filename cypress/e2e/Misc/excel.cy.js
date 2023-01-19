//npm install xlsx
//Add task in cypress.config.js

describe('cy task', () => 
{
  it('excel to json', () => {
    const excelFilePath = "cypress\\e2e\\Misc\\Test.xlsx";
    const sheetName = "login";
    cy.task("generateJSONFromExcel", {excelFilePath, sheetName}).then((user) => {
        cy.log(user[0].Name)
        cy.log(user[0].Address)
    })
  })
})
