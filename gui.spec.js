/// <reference types="cypress"/>

describe("UI elements",function(){
    it("verify input box and radio button",function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.url().should("include","rahulshetty")
        cy.get(':nth-child(1) > .form-control').should("be.visible").should("be.enabled").type("lukman",{force:true})
        cy.get("input[name='email']").should("be.visible").should("be.enabled").type("lukman")
        cy.get("#exampleInputPassword1").type("adepel")
        cy.get("#exampleCheck1").should("be.visible").check({force:true})
        cy.get("#exampleFormControlSelect1").select("Male")
        cy.get("#inlineRadio2").should("be.visible").should("be.enabled").click()
 cy.get("#inlineRadio3").should("be.visible").should("not.be.checked")
 
 cy.get("input[value='Submit']").click()
 cy.title().should("eq","ProtoCommerce")

 
    })

})