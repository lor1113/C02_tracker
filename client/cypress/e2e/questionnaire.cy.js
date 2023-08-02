describe("Questionnaire", ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })

    it('should connect to server', ()=>{
    })

    it('should not submit if form not complete', ()=>{
        cy.get('button').should('be.disabled');
    })

    it('should submit once all questions are answered', ()=>{
        cy.get('#vacationCount').type('3')
        cy.get('#vacationDistance').select('country')
        cy.get('#vacationTravel').select('car')
        cy.get('#1.formDiv').click()
        cy.get('#transportType').select('car')
        cy.get('#travelCount').type('4')
        cy.get('#2.formDiv').click()
        cy.get('#dietType').select('omnivore')
        cy.get('#dietLocal').select('mid')
        cy.get('#3.formDiv').click()
        cy.get('#consumptionClothes').select('fewMonths')
        cy.get('#consumptionElectronics').select('fewYears')
        cy.get('#consumptionSustainability').select('somewhat')
        cy.get('#4.formDiv').click()
        cy.get('#heatingCount').type('4')
        cy.get('#coolingCount').type('3')
        cy.get('#energyElectricity').select('entirely')
        cy.get('button').should('be.enabled')
        cy.get('button').click()
    })

    it('should allow for questionnaire to be resubmitted', ()=>{
        cy.get('#vacationCount').type('3')
        cy.get('#vacationDistance').select('country')
        cy.get('#vacationTravel').select('car')
        cy.get('#1.formDiv').click()
        cy.get('#transportType').select('car')
        cy.get('#travelCount').type('4')
        cy.get('#2.formDiv').click()
        cy.get('#dietType').select('omnivore')
        cy.get('#dietLocal').select('mid')
        cy.get('#3.formDiv').click()
        cy.get('#consumptionClothes').select('fewMonths')
        cy.get('#consumptionElectronics').select('fewYears')
        cy.get('#consumptionSustainability').select('somewhat')
        cy.get('#4.formDiv').click()
        cy.get('#heatingCount').type('4')
        cy.get('#coolingCount').type('3')
        cy.get('#energyElectricity').select('entirely')
        cy.get('button').click()
        cy.get('button').click()
        cy.get('#vacationTravel').select('plane')
        cy.get('button').click()
    })


})