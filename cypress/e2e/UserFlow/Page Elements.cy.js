import selectors from '..//../fixtures//loginPageSelectors.json'
import forecastSelectors from '..//../fixtures/forecastSectionSelectors.json'

describe('Verification of Page Elements', () => {

  const user = Cypress.env("user")
  
  beforeEach(() => {
   // Loading user data 
    const user = Cypress.env("user")
    
  // LOG IN
  // Navigate to the OpenWeather login page.
    cy.visit('')

    cy.get(selectors.loginPage.loginButton).click()
  // Enter credentials
    cy.get(selectors.loginPage.emailInput).type(user.email)
    cy.get(selectors.loginPage.passwordInput).type(user.password)

  // Submit the login form
    cy.get(selectors.loginPage.submitButton).click()
  })

  it('Verify the presence of key elements', () => {

  // The search bar for finding weather in different cities.
    cy.get(forecastSelectors.commonElements.searchForm).wait(3000)
    .should('be.exist')
    .should('be.visible')

    cy.get(forecastSelectors.commonElements.logo).click();
    cy.get(forecastSelectors.commonElements.searchInput)
    .type(`${user.city}{enter}`)

  //The current weather section.
     cy.get(forecastSelectors.weatherPage.headline)
    .should('be.exist')
    .should('be.visible')
    .and('contain.text', 'Weather in your city')

    cy.get(forecastSelectors.weatherPage.weatherInfo)
    .should('be.exist')
    .should('be.visible')

    cy.get(forecastSelectors.weatherPage.firstWeatherLink)
    .click()
      
  //The forecast section.
    cy.get(forecastSelectors.weatherPage.forecastSection)
    .should('be.exist')
    .should('be.visible')

    cy.get(forecastSelectors.weatherPage.hourlyForecastText)
    .should('be.exist')
    .should('be.visible')
    .and('have.text', 'Hourly forecast')
    })
})