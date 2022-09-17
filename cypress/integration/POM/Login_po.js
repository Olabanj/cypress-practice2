export const usernameField =()=> cy.xpath("(//input[@id='user-name'])[1]")
export const passwordField = () => cy.xpath("(//input[@id='password'])[1]")
export const loginBtn = () => cy.xpath("(//input[@id='login-button'])[1]")