describe("Questionnaire", ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })

    it('should connect to cypress', ()=>{
    })

    it('should not submit if form not complete', ()=>{
        cy.get('button').should('be.disabled');
    })

    it('should submit once all questions are answered', ()=>{
        cy.get("#consumptionForm")
        cy.get('#consumptionClothes')
    })
})