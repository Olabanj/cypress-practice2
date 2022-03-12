/// <reference types="cypress"/>

describe("UI elements",function(){
    it("verify checkbox and assert the button",function(){
        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.get("#checkbox1").check().should("be.checked").and("have.value","Cricket")
        cy.get("#checkbox1").uncheck().should("not.be.checked")
        cy.get("input[type='checkbox']").check(["Cricket","Hockey"])
    })
        it("verify the select field",function(){

        cy.get("#Skills").select("Adobe InDesign").should("have.value","Adobe InDesign")

    })
    it("select the multiple language",function(){
        cy.get("#msdd").click()
        cy.get(".ui-corner-all").contains("English").click()
       cy.get (".ui-corner-all").contains("Czech").click()
       cy.get (".ui-corner-all").contains("Dutch").click()
    })
    it("verify the search field",function(){
        cy.get("span[role='combobox']").click({force:true})
        cy.get("input[role='textbox']").type("India")
    })
})