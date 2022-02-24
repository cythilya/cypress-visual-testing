describe('Visual Testing with Percy and Cypress', () => {
    it('should take percy snapshot', () => {
        cy.visit('https://cythilya.github.io/about/')
        cy.wait(1000)
        cy.percySnapshot()
    })
})