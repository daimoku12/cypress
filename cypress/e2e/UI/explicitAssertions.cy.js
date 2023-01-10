//Explicit - expect (BDD), assert (TDD)

describe('ExplicitAssertions', () => 
{
  it('assertionExplicit', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.get("[name='username']").type("Admin")
    cy.get("[name='password']").type("admin123")
    cy.get("[type=submit]").click();

    let expName = "xyz";

    cy.get(".oxd-userdropdown-name").then((x)=>{let actName=x.text()
    expect(actName).to.not.equal(expName) //BDD Style
    assert.equal(actName,expName) //TDD Style
    })
  })
})
