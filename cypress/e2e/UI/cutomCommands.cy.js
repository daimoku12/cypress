//https://www.toolsqa.com/cypress/custom-commands-in-cypress/
//Try over write existing method
//Create index.d.ts under Support folder and add notes related to custom method
//Make change in jsconfig.json ("include": ["./node_modules/cypress", "cypress/**/*.js", "cypress/**/*d.ts"])

describe('custom commands', () => 
{
  it('custom command', () => {
    cy.visit("https://www.google.com")
    cy.setText('.gLFyf', 'hello')
  })
})