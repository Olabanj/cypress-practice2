describe("login",function(){
        it("testa",function(){
        cy.visit("https://www.rediff.com/")
        cy.title().should("eq","Rediff.com: News | Rediffmail | Stock Quotes | Shopping")
        
        
       
})
it("test the login page ",function(){
    cy.get("a[title='Already a user? Sign in']").click()
})
})