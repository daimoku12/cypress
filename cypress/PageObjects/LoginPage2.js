class Login
{
    txtUsername = "[name='username']";
    txtPassword = "[name='password']";
    btnSubmit = "[type=submit]";
    
    setUserName(username)
    {
        cy.get(this.txtUsername).type(username)
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password)
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click()
    }
}

export default Login;