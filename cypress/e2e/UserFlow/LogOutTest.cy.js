import selectors from '../../support/selectors.json';

describe('User LogOut', () => {

  beforeEach(() => {
   // Loading user data 
    const user = Cypress.env("user")
    
  // LOG IN TO THE SITE
  // Navigate to the OpenWeather login page.
    cy.visit('')

    cy.get(selectors.loginPage.loginButton).click()
  // Enter credentials
    cy.get(selectors.loginPage.emailInput).type(user.email)
    cy.get(selectors.loginPage.passwordInput).type(user.password)

  // Submit the login form
    cy.get(selectors.loginPage.submitButton).click()
  })

  it('LogOut test', () => {
  //LOG OUT
    cy.get(selectors.dashboardPage.logoutMenuButton).wait(5000).click()
    cy.get(selectors.dashboardPage.logoutButton).click()
      })
})