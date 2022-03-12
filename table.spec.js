/// <reference types="cypress"/>

describe("UI elements",function(){
    it("verify checkbox and assert the button",function(){
cy.visit("https://testautomationpractice.blogspot.com/")
cy.get("table[name='BookTable']").contains("td","Master In Selenium").should("be.visible")
cy.get("table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)").contains("Selenium").should("be.visible")
        
    })
})