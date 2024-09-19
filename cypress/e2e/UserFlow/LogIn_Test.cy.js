import selectors from '..//../fixtures//loginPageSelectors.json';

describe('User Login', () => {
  // Get selectors from JSON
  const { loginButton, emailInput, passwordInput, submitButton, userProfileIcon } = selectors.loginPage;
  
  beforeEach(() => {
  // Navigate to the OpenWeather login page.
    cy.visit('') })

  it('should log in with valid credentials', () => {
  // LOG IN
  // Loading user data 
    const user = Cypress.env("user")
    
    cy.get(loginButton).click()
  // Enter credentials
    cy.get(emailInput).type(user.email)
    cy.get(passwordInput).type(user.password)

  // Submit the login form
    cy.get(submitButton).click()
  
  // Redirecting to the homepage upon successful login
    cy.url('').should('include', '/home')

  // Assert that the user profile icon is visible
    cy.get(userProfileIcon).should('be.visible')
  
  })
})