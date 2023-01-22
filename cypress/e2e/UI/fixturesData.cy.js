//const dataJson = require('../../fixtures/createuser') - Another way to use fixtures (tried in API Post)

describe('Fixtures', () => {
  //Access through Hook - for multiple it blocks
  let userdata;

  before(()=>{
    cy.fixture('orangehrm').then((data)=>{
      userdata=data;
    })
  })

  //Direct Access  
  it.skip('Read data', () => {
    
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.fixture('orangehrm').then((data)=>{
      cy.get("[name='username']").type(data.username)
      cy.get("[name='password']").type(data.password)
      cy.get("[type=submit]").click()
    })
  })

  it('Read data using hook', () => {
    
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.fixture('orangehrm').then((data)=>{
      cy.get("[name='username']").type(userdata.username)
      cy.get("[name='password']").type(userdata.password)
      cy.get("[type=submit]").click();
    })
  })
})