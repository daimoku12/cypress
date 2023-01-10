
describe('Attribute', () => 
{
  it('attribute', () => {
    cy.visit("https://www.google.com")
    cy.get("input[title='Search']").should('have.attr', 'type', 'text') //first way
    cy.get("input[title='Search']").invoke('attr', 'type').then(typeValue => cy.log("attribute value is :"+typeValue)) //second way

    cy.get("input[title='Search']").then((el) => {
        cy.wrap(el.attr('type')).then(something => cy.log(something)) //third way
    })
  })
})