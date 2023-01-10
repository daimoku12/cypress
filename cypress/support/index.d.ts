declare namespace Cypress {

    interface Chainable<Subject> {
      /**
       * Set text on an element
       * @see https://www.toolsqa.com/cypress/custom-commands-in-cypress/
       * @example
       * cy.setText("#locator", "value to enter")
       */
      setText(element: object, value: String): Chainable<any>
    }


  }