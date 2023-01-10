//Implicit - should (eq, contain, include, exist, have.length, have.value, be.visible, be.enabled), and

describe('Assertions', () => 
{
  it('assertion', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.title().should('eq','OrangeHRM') //eq
    cy.get("img[alt='company-branding']").should('be.visible') //be.visible be.enabled
    cy.get("img[alt='company-branding']").should('exist') //exist
    cy.xpath("//a").should('have.length', 5); //have.length

    cy.xpath("//a").its('length').then((something) => cy.log("Length value is :" +something)) //get length
   
    cy.url().should('include','orangehrmlive.com') //include
    cy.url().should('contain','orange') //contain

    cy.url().should('include','orangehrmlive.com') //method chaining
            .should('contain','orange')

    cy.url().should('include','orangehrmlive.com') //method chaining with and 
            .and('contain','orange')
            .and('not.contain','test') //not.contain

    var url = cy.url().should('include','orangehrmlive.com')
    url.should('include','orangehrmlive.com')   

    cy.get("[name='username']").type("Admin").should('have.value', 'Admin') //have.value
    // cy.get("[name='password']").type("admin123")
    // cy.get("[type=submit]").click(); //click
  })
})
