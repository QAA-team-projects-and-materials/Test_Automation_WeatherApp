import logInSelectors from '..//../fixtures//loginPageSelectors.json'
import commonElements from '..//../fixtures/forecastSectionSelectors.json'


describe('Verification of Page Elements', () => {
  // Get selectors from JSON
  const { loginButton, emailInput, passwordInput, submitButton } = logInSelectors.loginPage;
  const { searchForm, logo, searchInput} = commonElements.commonElements
  const {headline, weatherInfo, firstWeatherLink, forecastSection, hourlyForecastText } = commonElements.weatherPage
  // Loading user data 
  const user = Cypress.env("user")
  
  beforeEach(() => {
  // LOG IN
  // Navigate to the OpenWeather login page.
    cy.visit('')

    cy.get(loginButton).click()
  // Enter credentials
    cy.get(emailInput).type(user.email)
    cy.get(passwordInput).type(user.password)

  // Submit the login form
    cy.get(submitButton).click()
  })

  it('Verify the presence of key elements', () => {

  // The search bar for finding weather in different cities.
    cy.get(searchForm).wait(3000)
    .should('be.exist')
    .should('be.visible')

    cy.get(logo).click();
    cy.get(searchInput)
    .type(`${user.city}{enter}`)

  //The current weather section.
     cy.get(headline)

    .should('be.exist')
    .should('be.visible')
    .and('contain.text', 'Weather in your city')

    cy.get(weatherInfo)
    .should('be.exist')
    .should('be.visible')

    cy.get(firstWeatherLink)
    .click()
      
  //The forecast section.
    cy.get(forecastSection)
    .should('be.exist')
    .should('be.visible')

    cy.get(hourlyForecastText)
    .should('be.exist')
    .should('be.visible')
    .and('have.text', 'Hourly forecast')
    })
})