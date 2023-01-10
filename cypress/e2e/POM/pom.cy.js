//import Login from "../PageObjects/LoginPage2"
//import Login from "../PageObjects/LoginPage"

import Login from "../PageObjects/LoginPage3"

describe('POM', () => 
{
  it('login using POM - loginPage.js', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    const ln = new Login();
    ln.setUserName("Admin");
    ln.setPassword("admin123");
    ln.clickSubmit();
  })

  it('login using POM and fixtures - loginPage2.js', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.fixture('orangehrm').then((data)=>{
    const ln = new Login();
    ln.setUserName(data.username);
    ln.setPassword(data.password);
    ln.clickSubmit();
    })
  })

    it.only('loginPage3.js', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    Login.setUserName("Admin");
    Login.setPassword("admin123");
    Login.clickSubmit();
  })
})
