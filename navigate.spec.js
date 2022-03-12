/// <reference types="cypress"/>

describe("UI elements",function(){
    it("verify checkbox and assert the button",function(){

        cy.visit("https://demo.nopcommerce.com/apple-macbook-pro-13-inch")
        cy.title().should("eq","nopCommerce demo store. Apple MacBook Pro 13-inch")
        cy.get(".ico-register").contains("Reg").click()
        cy.url().should("include","nopcommerce")
        cy.go("forward")
        cy.go("back")

    })
})