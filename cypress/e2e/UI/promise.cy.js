
let p = new Promise((resolve, reject)=>{
  let a = 1+2
  if (a==2){
    resolve('Sucess')
  }else{
    reject('Failed')
  }
})

p.then((message)=>{
  cy.console("This is in the then" + message)
}).catch((message)=>{
    cy.console("This is in the catch "+ message)
})