describe('Verification of Page Elements', () => {

  const user = Cypress.env("user")
  
  beforeEach(() => {
   // Loading user data 
   // const user = Cypress.env("user")
    
  // LOG IN
  // Navigate to the OpenWeather login page.
    cy.visit('https://openweathermap.org')

    cy.get('.user-li > a').click()
  // Enter credentials
    cy.get('#user_email').type(user.email)
    cy.get('#user_password').type(user.password)

  // Submit the login form
    cy.get('.new_user > .btn').click()
  })

  it('Verify the presence of key elements', () => {

// The search bar for finding weather in different cities.
    cy.get('#desktop-menu > form')
    .should('be.exist')
    .should('be.visible')

    cy.get('.logo > a > img').click();
    cy.get('#desktop-menu > form > [name="q"]')
    .type(`${user.city}{enter}`)

      //The current weather section.
     cy.get('.headline')
    .should('be.exist')
    .should('be.visible')
    .and('contain.text', 'Weather in your city')

    cy.get('body > main > div:nth-child(7) > div > div')
    .should('be.exist')
    .should('be.visible')

    cy.get('tbody > :nth-child(1) > :nth-child(2) > :nth-child(1) > a')
    .click()
      
  //The forecast section.
    cy.get('#weather-widget > .section-content')
    .should('be.exist')
    .should('be.visible')

    cy.get('.grid-5-4 > :nth-child(1) > .mobile-padding')
    .should('be.exist')
    .should('be.visible')
    .and('have.text', 'Hourly forecast')
    })
})