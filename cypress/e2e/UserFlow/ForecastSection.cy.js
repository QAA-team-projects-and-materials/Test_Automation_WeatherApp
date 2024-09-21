import forecastSectionSelector from '../../fixtures//forecastSectionSelectors.json'

describe('Verification of Page Elements', () => {
  
  // Loading user data 
  const user = Cypress.env("user")
  
  beforeEach(() => {
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
  })

  it('Verify the presence of key elements', () => {

  // The search bar for finding weather in different cities.
    cy.findByAltText("Logo white")
    .should('be.exist')
    .should('be.visible')
    .click();

    cy.findAllByPlaceholderText("Weather in your city")
    .eq(0).type(`${user.city}{enter}`)

  //The current weather section.
    cy.findAllByText('Weather in your city')
    .should('be.visible')
/*
    cy.findByTestId('№forecast-list', { timeout: 10000 })
    .should('be.visible');*/

    cy.findByText('Kyiv, UA')
    .click()
      
  //The forecast section.
    cy.get(forecastSectionSelector.forecastSection)
    .should('be.exist')
    .should('be.visible')

    cy.findAllByText('Hourly forecast')
    .should('be.exist')
    .should('be.visible')
    .and('have.text', 'Hourly forecast')
    })
})