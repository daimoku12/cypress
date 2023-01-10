
describe('browser navigation', () => 
{
  it('Navigation', () => {
    cy.visit("https://demo.opencart.com/")
    cy.get("li:nth-child(7) a:nth-child(1)").click() //go on camera page
    cy.go('back')
    cy.go('forward')
    cy.go(-1) //go back
    cy.go(1)  //go forward
    cy.reload();
  })
})