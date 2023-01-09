//Cypress cannot directly work with tabs

describe('handle window', () => {
  
    it('window approach one', () => {

    cy.visit('https://the-internet.herokuapp.com/windows')
    //Remove target attribute before click. Target page will open in same window
    cy.get("a[href='/windows/new']").invoke('removeAttr', 'target').click()
    cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
    cy.wait(3000)
    cy.go('back')  
    cy.url().should('include', 'https://the-internet.herokuapp.com/windows')

  })

  it.only('window approach two', () => {

    cy.visit('https://the-internet.herokuapp.com/windows')
    //Limitation - Main page and target page should have same domain (https://the-internet.herokuapp.com)
    cy.get('.example >a').then((e) => {
        let url = e.prop('href')
        cy.get(url)
    })

    cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
    cy.wait(3000)
    cy.go('back')
  })
})