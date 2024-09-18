import selectors from '..//..//support/selectors.json';


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
    cy.get(selectors.commonElements.searchForm).wait(3000)
    .should('be.exist')
    .should('be.visible')

    cy.get(selectors.commonElements.logo).click();
    cy.get(selectors.commonElements.searchInput)
    .type(`${user.city}{enter}`)

  //The current weather section.
     cy.get(selectors.weatherPage.headline)
    .should('be.exist')
    .should('be.visible')
    .and('contain.text', 'Weather in your city')

    cy.get(selectors.weatherPage.weatherInfo)
    .should('be.exist')
    .should('be.visible')

    cy.get(selectors.weatherPage.firstWeatherLink)
    .click()
      
  //The forecast section.
    cy.get(selectors.weatherPage.forecastSection)
    .should('be.exist')
    .should('be.visible')

    cy.get(selectors.weatherPage.hourlyForecastText)
    .should('be.exist')
    .should('be.visible')
    .and('have.text', 'Hourly forecast')
    })
})