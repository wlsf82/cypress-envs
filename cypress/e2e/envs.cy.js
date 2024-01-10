describe('Cypress envs', () => {
  it('gets a value from the `cypress.env.json` file using the `Cypress.env` module', () => {
    const secret = Cypress.env('secret-from-cypress-dot-env-file')

    cy.log(secret)
  })

  it('gets a value from an environment variable prefixed by `CYPRESS_` using the `Cypress.env` module', () => {
    const secret = Cypress.env('SECRET_ENV_VARIABLE')

    cy.log(secret)
  })
})
