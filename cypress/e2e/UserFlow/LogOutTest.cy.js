import logInSelectors from '..//../fixtures//loginPageSelectors.json'
import logOutLelectors from '..//../fixtures//logOutPageSelectors.json'

describe('User LogOut', () => {

  beforeEach(() => {
   // Loading user data 
    const user = Cypress.env("user")
    
  // LOG IN TO THE SITE
  // Navigate to the OpenWeather login page.
    cy.visit('')

    cy.get(logInSelectors.loginButton).click()
  // Enter credentials
    cy.get(logInSelectors.emailInput).type(user.email)
    cy.get(logInSelectors.passwordInput).type(user.password)

  // Submit the login form
    cy.get(logInSelectors.submitButton).click()
  })

  it('LogOut test', () => {
  //LOG OUT
    cy.get(logOutLelectors.logoutMenuButton).wait(5000).click()
    cy.get(logOutLelectors.logoutButton).click()
      })
})