import logInSelectors from '..//../fixtures//loginPageSelectors.json'
import logOutLelectors from '..//../fixtures//logOutPageSelectors.json'

describe('User LogOut', () => {

  beforeEach(() => {
  // Loading user data 
    const user = Cypress.env("user")
  // Navigate to the OpenWeather login page.
    cy.visit('') 
    cy.findAllByText('Sign in').eq(0).click()

  // Enter credentials
    cy.findAllByPlaceholderText('Enter email').eq(0).type(user.email)
    cy.findAllByPlaceholderText('Password').type(user.password)

  // Submit the login form
    cy.findByRole('button', { name: /submit/i }).click()

  // Redirecting to the homepage upon successful login
    cy.url('').should('include', '/home')

  // Assert that the user profile icon is visible
    cy.findByAltText("Logo white").should('be.visible')
  
  })

  it('LogOut test', () => {
  //LOG OUT
  cy.findAllByText('Hrudilov').eq(0).click()
   // cy.get(logOutLelectors.logoutButton).click()
  })
})