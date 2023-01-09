//before, beforeEach, afterEach, after - Hooks
//it.skip, it.only - Tags

describe('Hooks example', ()=>{

    before('Before block', ()=>{
        cy.log("Printing from Before")
    })
    
    beforeEach('Initialize', ()=>{
        cy.log("Printing from BeforeEach")
    })

    after('After block', ()=>{
        cy.log("Printing from After")
    })
    
    afterEach('Teardown', ()=>{
        cy.log("Printing from AfterEach")
    })

    it.only('First test', () => {
        cy.log("First it block")
    })

    it.only('Second Test', () => {
        cy.log("Second it block")
      })
  })