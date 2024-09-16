describe('User Login', () => {

  beforeEach(() => {
   // Loading user data 
    const user = Cypress.env("user")
    
  // LOG IN
  // Navigate to the OpenWeather login page.
    cy.visit('https://openweathermap.org');

    cy.get('.user-li > a').click();
  // Enter credentials
    cy.get('#user_email').type(user.email);
    cy.get('#user_password').type(user.password);

  // Submit the login form
    cy.get('.new_user > .btn').click();
  });

  it('should log in with valid credentials', () => {
    // Redirecting to the homepage upon successful login
    cy.url('').should('include', '/home')

    // Assert that the user profile icon is visible
    cy.get('.panel-body').should('be.visible')
  });
});