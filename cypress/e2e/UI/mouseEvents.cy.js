//Trigger - https://docs.cypress.io/api/commands/trigger#Syntax
//Drag and Drop plugin - https://www.npmjs.com/package/@4tw/cypress-drag-drop
//npm install --save-dev @4tw/cypress-drag-dropnpx cypress open


describe('Mouse Operations', () => 
{
  it('MouseHover', () => {
    cy.visit("https://demo.opencart.com/")
    cy.xpath("//a[normalize-space()='Desktops']").trigger('mouseover').click();
  })

  it('Right Click', () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu') //or .rightClick()
    cy.get(".context-menu-item.context-menu-icon.context-menu-icon-copy").click();
  })

  it('Double Click', () => {
    cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
    cy.frameLoaded('#iframeResult')
    cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick'); //try .dblClick()
    cy.iframe('#iframeResult').find("#field2").should('have.value', 'Hello World!')
  })

  it('Drag and Drop', () => {
    cy.visit("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
    //cy.get("#box6").drag('#box106')
    cy.get("#box6").drag('#box106', {force:true})
  })

  it.only('Scrolling Page', () => {
    cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")
    //cy.get("img[alt='Flag of India']").scrollIntoView()
    cy.get("img[alt='Flag of India']").scrollIntoView({duration:2000})
  })
})