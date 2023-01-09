//https://www.npmjs.com/package/cypress-iframe
//Install iframe plugin - npm install -D cypress-iframe
//In your cypress/support/commands.js file/ e2e.js, add the following:
//import 'cypress-iframe'or require('cypress-iframe');

describe('handling frames', ()=>{

  it('iframes', () => {
  cy.visit('https://the-internet.herokuapp.com/iframe')
  
  let iframe = cy.get('#mce_0_ifr') //get iframe
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)

    iframe.clear().type("Welcome {ctrl+a}")
  })

  it('iframes custom command', () => {
    
    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.getIframe('#mce_0_ifr').clear().type("Welcome {ctrl+a}") //getIframe created in Commands.js
  })

  it.only('iframes cypress iframe plugin', () => {
    
    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.frameLoaded('#mce_0_ifr') //load the frame
    cy.iframe('#mce_0_ifr').clear().type("Welcome {ctrl+a}")
    //cy.iframe('#my-frame').find('.some-button').should('be.visible').click() - try
  })
})