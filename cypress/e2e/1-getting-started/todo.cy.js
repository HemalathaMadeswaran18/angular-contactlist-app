describe('template spec', () => {
   it('passes',()=>{
    cy.visit('https://example.cypress.io')
   })
})



describe('contact app e2e test cases', ()=>{
  // it('should have title as Contact App',()=>{
  //   cy.visit('/register');
  //   cy.get('#brand-name').should('have.text','Register')

  // })

it('should check for user registration',()=>{
  cy.visit('/register');
  cy.get('#fname').type('steve');
  cy.get('#lname').type('jobs');
  cy.get('#city').type('banglore');
  cy.get('#age').type('23');
  cy.get('#email').type('steve@gmail.com');
  cy.get('#password').type('steve123');
  cy.wait(2000);
  cy.get('#btnRegister').click();
})




})


