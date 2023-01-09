describe('Data Driven test', () => {
    
    it('data driven', () => {
    
      cy.fixture('orangehrm2').then((data)=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        data.forEach((userdata)=>{
            cy.get("[name='username']").type(userdata.username)
            cy.get("[name='password']").type(userdata.password)
        })
      })
    })
  })