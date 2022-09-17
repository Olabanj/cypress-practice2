///<reference types = "Cypress"/>
import * as loginPage from '../POM/Login_po.js'

describe("e2e test for loging page",function(){
    
    it("login successfuly",function(){

        cy.fixture("user").then(function(data){
           
            this.data = data
        
        
            cy.visit("https://www.saucedemo.com/")
        
         loginPage.usernameField().type(this.data.name)
        
         loginPage.passwordField().type(this.data.password)
        
         loginPage.loginBtn().click()
       
        })



    })


})