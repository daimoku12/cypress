describe('alerts', () => 
{
  it.skip('javaScript alert', () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsAlert()']").click(); //alert handled automatically

    cy.on('window:alert', (t)=> {
      expect(t).to.contains('I am a JS Alert');
    })
    
    cy.get('#result').should('have.text', 'You successfully clicked an alert')
  })

  it.skip('confirmation alert ok', () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click(); //alert handled automatically by clicking ok button

    cy.on('window:confirm', (t)=> {
      expect(t).to.contains('I am a JS Confirm');
    })
    
    cy.get('#result').should('have.text', 'You clicked: Ok')
  })

  it.skip('confirmation alert cancel', () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click(); //alert handled automatically by clicking ok button

    cy.on('window:confirm', (t)=> {
      expect(t).to.contains('I am a JS Confirm');
    })

    cy.on('window:confirm', (t)=> false) //alert handled using cancel button
    cy.get('#result').should('have.text', 'You clicked: Cancel')
  })

  it.skip('prompt alert', () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    //Trigger event before clicking on the button otherwise Cycpress will handle the alert automatically
    cy.window().then((win)=>{
        cy.stub(win, 'prompt').returns('welcome')
    })

    cy.get("button[onclick='jsPrompt()']").click(); //alert handled automatically using ok button
    cy.get('#result').should('have.text', 'You entered: welcome')
  })

  //First option - pass username and password as Json
  it.skip('authentication alert', () => {
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: 
                                                                {
                                                                  username: "admin", password:"admin"
                                                                }
                                                               })

    cy.get("div[class='example'] p").should('have.contain', 'Congratulations')
  })

    //Second option - inject username and password in url
    it('authentication alert', () => {
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth") 
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')
      })
})

