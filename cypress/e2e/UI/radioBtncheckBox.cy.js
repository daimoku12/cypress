describe('UI Interaction', () => 
{
  it('radioBtn', () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation")
    
    cy.get("input#female").should('be.visible')
    cy.get("input#male").should('be.visible')
    cy.get("input#male").click()
    cy.get("input#female").check().should('be.checked') //check radio btn
    var male = cy.get("input#male")
    male.click();
  })

  it('checkBox', () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation")
    
    cy.get("input#monday").should('be.visible').click()
    cy.get("input#monday").check().should('be.checked') //selecting single checkbox
    cy.get("input#monday").uncheck().should('not.be.checked') //unselecting checkbox

    cy.get(".form-check-input[type='checkbox']").check(); //select all checkbox
    //cy.get(".form-check-input[type='checkbox']").click() //Error - Click only works on one element
    cy.get(".form-check-input[type='checkbox']").last().check(); //check last checkbox. Try first also
  })
})