import selectors from '..//..//support/selectors.json';
describe('User Login', () => {

  beforeEach(() => {
  // Navigate to the OpenWeather login page.
    cy.visit('') })

  it('should log in with valid credentials', () => {
  // LOG IN
  // Loading user data 
    const user = Cypress.env("user")
    
    cy.get(selectors.loginPage.loginButton).click()
  // Enter credentials
    cy.get(selectors.loginPage.emailInput).type(user.email)
    cy.get(selectors.loginPage.passwordInput).type(user.password)

  // Submit the login form
    cy.get(selectors.loginPage.submitButton).click()
  
  // Redirecting to the homepage upon successful login
    cy.url('').should('include', '/home')

  // Assert that the user profile icon is visible
    cy.get(selectors.dashboardPage.userProfileIcon).should('be.visible')
  })
})