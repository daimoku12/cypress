class Login
{
  elements = {
    username: ()=> cy.get("[name='username']"),
    password: ()=> cy.get("[name='password']"),
    submit: ()=> cy.get("[type=submit]")
  }

  setUserName(txtusername)
  {
    this.elements.username().type(txtusername)
  }

  setPassword(txtpassword)
  {
    this.elements.password().type(txtpassword)
  }

  clickSubmit()
  {
    this.elements.submit().click()
  }
}

module.exports = new Login();