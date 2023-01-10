//Scopes all subsequent cy commands to within this element.
//Narrow down search within an element

describe('Within', () => 
{
  it('within', () => {
    cy.visit("https://www.amazon.in")
    cy.get(".nav-search-field").within(()=>cy.get('#twotabsearchtextbox').type('testing within')) 

    //Another option
    // var test = cy.get(".nav-search-field")
    // test.get('#twotabsearchtextbox').type('testing within option 2')
  })
})
