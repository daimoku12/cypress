describe('wrap', () => 
{
  it('wrap', () => {
    cy.visit("https://www.google.com")
    cy.get("input[title='Search']").then(inp => { //inp is JQuery element
        inp.val("QA") //.val is JQuery method
    })
    // cy.get("input[title='Search']").then((el) => {
    //     cy.wrap(el.attr('type')).then(something => cy.log(something)) //third way
    // })
  })

  it.only('wrap jquery element to use cypress methods', () => {
    cy.visit("https://www.google.com")
    cy.get("input[title='Search']").then(inp => {
        //inp.type("Hello") //TyprError - inp.Type is not a function
        //Cannot use Cypress function (type) with JQuery parameter (inp)
        cy.wrap(inp).type("Hello");
    })
  })

  it.only('wrap variables/objects/arrays', () => {

    let name = "QA Test Strategy"
    cy.wrap(name).should('eq', "QA Test Strategy")

    let channel = {name: "QA"}
    cy.wrap(channel).should('have.property', 'name', 'QA')

    let playlists = ["Java", "Javascript", "Cypress"]
    cy.wrap(playlists).should("include", "Cypress")
  })
})