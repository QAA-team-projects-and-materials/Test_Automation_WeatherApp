import logInSelectors from '../../fixtures/loginPageSelectors.json'
import forecastSectionSelector from '../../fixtures//forecastSectionSelectors.json'


describe('Verification of Page Elements', () => {
  
  // Loading user data 
  const user = Cypress.env("user")
  
  beforeEach(() => {
  // LOG IN
  // Navigate to the OpenWeather login page.
    cy.visit('')

    cy.get(logInSelectors.loginButton).click()
  // Enter credentials
    cy.get(logInSelectors.emailInput).type(user.email)
    cy.get(logInSelectors.passwordInput).type(user.password)

  // Submit the login form
    cy.get(logInSelectors.submitButton).click()
  })

  it('Verify the presence of key elements', () => {

  // The search bar for finding weather in different cities.
    cy.get('#desktop-menu > form').wait(3000)
    .should('be.exist')
    .should('be.visible')

    cy.get('.logo > a > img').click();
    cy.get("#desktop-menu > form > [name='q']")
    .type(`${user.city}{enter}`)

  //The current weather section.
     cy.get(forecastSectionSelector.headline)

    .should('be.exist')
    .should('be.visible')
    .and('contain.text', 'Weather in your city')

    cy.get(forecastSectionSelector.weatherInfo)
    .should('be.exist')
    .should('be.visible')

    cy.get(forecastSectionSelector.firstWeatherLink)
    .click()
      
  //The forecast section.
    cy.get(forecastSectionSelector.forecastSection)
    .should('be.exist')
    .should('be.visible')

    cy.get(forecastSectionSelector.hourlyForecastText)
    .should('be.exist')
    .should('be.visible')
    .and('have.text', 'Hourly forecast')
    })
})