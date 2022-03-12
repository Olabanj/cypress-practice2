/// <reference types="cypress"/>
describe(" Alerts button",function(){
    it("verify Alerts and assert the button",function(){
        cy.visit("https://www.rediffmailpro.com/cgi-bin/login.cgi")
        cy.get('[type="submit"]').click({force:true})
        cy.on('window:alert',(str)=>{
        expect(str).to.equal("Please enter email address")
    }
    )
    })
})