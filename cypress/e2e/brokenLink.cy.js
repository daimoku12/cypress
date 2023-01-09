describe('broken link', () => 
{
  it('broken link', () => {
    cy.visit("https://www.google.com")
    cy.get('a').invoke('attr', 'href').then(href => {
    cy.request(href).its('status').should('eq', 200)
    })
  })

  it.only('broken links', () => {
    cy.visit("https://www.google.com")
    cy.get("a").each(($link, index, $links)=>{ 
        cy.wrap($link).invoke('attr', 'href').then(href => {
          cy.request(href).its('status').should('eq', 200)
       })})
    })
  })