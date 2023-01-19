describe('API tests', () => {


    it('GET Request', () => {
        cy.request({
            method : 'GET',
            url : "https://gorest.co.in/public-api/users",
            headers : {
                'authorization' : "Bearer ac76038f23145ca36719ab521e7a865bfbc2f66e6616beccf905a7576c0b63d7"}
        }).then(res=>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(10)
    })
  })
})  