describe('Visual Testing with Percy and Cypress', () => {
    it('should take percy snapshot', () => {
        cy.visit('https://cythilya.github.io/2021/07/27/ten-snacks-for-better-health/')
        cy.wait(1000)
        cy.percySnapshot()
    })
})