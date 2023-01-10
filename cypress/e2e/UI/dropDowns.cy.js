describe('UI Interaction', () => 
{
  it.skip('dropdown with select', () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html")
    cy.get("#zcf_address_country").select("China").should('have.value', 'China') //use select
  })

  it.skip('dropdown without select', () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
    cy.get("#select2-billing_country-container").click()
    cy.get(".select2-search__field").type("China").type('{enter}')
    cy.get("#select2-billing_country-container").should('have.text', 'China') //use text not value with have
  })

  it.skip('autosuggest dropdown', () => {
    cy.visit("https://www.wikipedia.org")
    cy.get("#searchInput").type('Delhi')
    cy.get('.suggestion-title').contains('Delhi University').click() //contains - get element using text
  })

  it('dynamic dropdown', () => {
    cy.visit("https://www.google.com")
    cy.get(".gLFyf").type('cypress automation')
    cy.wait(2000)

    cy.get('div.wM6W7d>span').each(($el, index, $list) =>{
        if ($el.text()=="cypress automation jobs")
        {
            cy.wrap($el).click()
        }      
    })
    cy.get("input[name='q']").should('have.value','cypress automation jobs')
  })
})