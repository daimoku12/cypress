describe('Screenshot Videos', () => 
{
  it('Capture', () => {
    cy.visit("https://demo.opencart.com/")
    cy.screenshot("homepage") //entire page screenshot
    cy.get("img[title='Your Store']").screenshot("logo") //element screenshot
  })

  it.only('Capture on failure', () => {
    //Capture screenshot and video on failure automatically - execute via CLI
    cy.visit("https://demo.opencart.com/")
    cy.get("li:nth-child(7) a:nth-child(1)").click() //go on camera page
    cy.get("div[id='content'] h2").should('have.text', "Tablets")
    //run via CLI - npx cypress run --spec cypress\e2e\screenshotAndVideos.cy.js
  })

})