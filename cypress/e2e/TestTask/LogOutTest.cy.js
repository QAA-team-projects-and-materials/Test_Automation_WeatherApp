describe('User Login', () => {

  beforeEach(() => {
   // Loading user data 
    const user = Cypress.env("user")
    
  // LOG  IN
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
  //LOG OUT
    cy.get('.inner-user-container').wait(5000).click()
    cy.get(':nth-child(5) > .logout').click()
      })
})