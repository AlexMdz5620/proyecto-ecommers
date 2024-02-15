describe('Funcionalidad de login', () => {

  it('Mi aplicacion carga leyendo Home en /', () => {
    //AAA(Arrange, Act, Assert)
    //01 Arrange: setup del estado inicial de mi aplicacion
    cy.visit('/')
    //02 Act: interactuar con la aplicacion
    cy.get('h1').contains('Home') //03 Assert: espero este resultado
  })

  it('Probar el login de CUSTOMER', () => {
    //INTERCEP lo uso para saber cuando una llamada a la api
    //es resuelta y puedo esperarla en otro momento usando wait('@login)
    cy.intercept('POST', 'http://localhost:5173/login').as('login')//le damos un nombre o sobrenombre
    //01 Arrange:Setup del estado inicial de mi aplicacion
    cy.visit('/')
    //02 Act: interactuar con la aplicacion
    //cy.get('input[name="email"]').type('drstrange@marvel.com')
    //cy.get('input[name="password"]').type('multiverso')
    //cy.get('button[type="submit"]').click()
    cy.doLogin('drstrange@marvel.com', 'multiverso')

    cy.wait('@login')//resuelva la petiicon y esperamos hasta que se resuelva la peticion
    cy.get('h1').contains('Please')
  })
})