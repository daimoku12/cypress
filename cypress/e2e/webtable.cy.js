describe('handling tables', ()=>{

    beforeEach('Login', ()=>{ //hook

        cy.visit('https://demo.opencart.com/admin/')
        cy.get("#input-username").type('demo')
        cy.get("#input-password").type('demo')
        cy.get("button[type='submit']").click()
        cy.get(".btn-close").click()
        cy.get("#menu-customer").click()
        cy.xpath("//ul[@class='collapse show']//a[contains(text(),'Customers')]").click()
    })

    it.skip('check number of rows and colums', () => {
      
        cy.xpath("//table[@class='table table-bordered table-hover']//tbody//tr").should('have.length', '10')
        cy.xpath("//table[@class='table table-bordered table-hover']//thead//td").should('have.length', '7')
    })

    it('check cell data from specific row and column', () => {
         
        cy.xpath("//tbody//tr[5]//td[3]").should('have.text','princytrainings4@gmail.com')
    })

    it.only('read all data in first page', () => {

        cy.xpath("//table[@class='table table-bordered table-hover']//tbody//tr")
          .each(($row, index, $rows) => {
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col, index, $cols)=>{
                  cy.log($col.text())
                })
            })
          })
    })

    it('pagination', () => {

    
    })
  })