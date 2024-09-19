import logInSelectors from '../../fixtures/loginPageSelectors.json';

describe('User Login', () => {
  
  beforeEach(() => {
  // Navigate to the OpenWeather login page.
    cy.visit('') })

  it('should log in with valid credentials', () => {
  // LOG IN
  // Loading user data 
    const user = Cypress.env("user")
    
    cy.get(logInSelectors.loginButton).click()
  // Enter credentials
    cy.get(logInSelectors.emailInput).type(user.email)
    cy.get(logInSelectors.passwordInput).type(user.password)

  // Submit the login form
    cy.get(logInSelectors.submitButton).click()
  
  // Redirecting to the homepage upon successful login
    cy.url('').should('include', '/home')

  // Assert that the user profile icon is visible
    cy.get(logInSelectors.userProfileIcon).should('be.visible')
  
  })
})