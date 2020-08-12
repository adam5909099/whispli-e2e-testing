describe('proof of concept', () => {
  it ('login', () => {
    // Visit login page
    cy.visit('/inbox/login');

    // Enter username and password
    cy.get('name=username').type('renatatest1');
    cy.get('name=password').type('password');

    // Click submit button
    cy.contains('button[type=submit]').click();
  })

})