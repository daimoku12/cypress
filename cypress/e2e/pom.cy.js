import Login from "../PageObjects/LoginPage2"
//import Login from "../PageObjects/LoginPage"

describe('POM', () => 
{
  it('login using POM', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    const ln = new Login();
    ln.setUserName("Admin");
    ln.setPassword("admin123");
    ln.clickSubmit();
  })

  it.only('login using POM and fixtures', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.fixture('orangehrm').then((data)=>{
    const ln = new Login();
    ln.setUserName(data.username);
    ln.setPassword(data.password);
    ln.clickSubmit();
    })
  })
})
