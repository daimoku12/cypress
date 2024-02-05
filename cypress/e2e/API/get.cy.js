describe('API tests', () => {


    it('GET Request ', () => {
        cy.request({
            method : 'GET',
            url : "https://gorest.co.in/public-api/users",
            headers : {
                'authorization' : "Bearer d9e1a7df360f6ea18c8c27c3be8122527103c740dfda2c6b3298cd7cab2aa544"}
        }).then(res=>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(10)
    })
  })
})  