let getText;  

describe("find text of an element", () => {

    it("Alias First Test - Using Invoke Command ", function () {
        cy.visit("https://www.linkedin.com/")
        cy.get('[data-test-id="hero__headline"]').invoke('text').as('textFunction'); //as - alias
        cy.log(this.textFunction);
    })

    it("Print Value - ALias => Invoke - Command ", function () {
        cy.log("==Print Value Using Invoke Command ==", this.textFunction)
    })

    it("Second Test - using variable ", () => {
        cy.visit("https://www.linkedin.com/")
        cy.get('[data-test-id="hero__headline"]').then(($value) => {getText = $value.text()})
    })

    it("Print Value - Uisng Variables ", function () {
        cy.log("====== Print Value - Using Variables ====== ", getText)
    })

    it.only("Using Invoke Command ", function () {
        cy.visit("https://www.linkedin.com/")
        cy.get('[data-test-id="hero__headline"]').invoke('text').then(value => cy.log(value))
        //cy.get('[data-test-id="hero__headline"]').invoke('text').then((value) => cy.log(value))
    })
})
