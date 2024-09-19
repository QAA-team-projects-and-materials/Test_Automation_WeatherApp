import selectors from '..//../fixtures//loginPageSelectors.json'
import logOutLelectors from '..//../fixtures//logOutPageSelectors.json'

describe('User LogOut', () => {
  // Get selectors from JSON
  const { loginButton, emailInput, passwordInput, submitButton } = selectors.loginPage;
  const {logoutMenuButton, logoutButton} = logOutLelectors.dashboardPage
  beforeEach(() => {
   // Loading user data 
    const user = Cypress.env("user")
    
  // LOG IN TO THE SITE
  // Navigate to the OpenWeather login page.
    cy.visit('')

    cy.get(loginButton).click()
  // Enter credentials
    cy.get(emailInput).type(user.email)
    cy.get(passwordInput).type(user.password)

  // Submit the login form
    cy.get(submitButton).click()
  })

  it('LogOut test', () => {
  //LOG OUT
    cy.get(logoutMenuButton).wait(5000).click()
    cy.get(logoutButton).click()
      })
})