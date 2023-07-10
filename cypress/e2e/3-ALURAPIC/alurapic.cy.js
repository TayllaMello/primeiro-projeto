describe('Login e registro de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')

    })

    it('verifica mensagens validacao', () => {

        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')


    })

    it('verifica mensagem de email inválido', () => {

        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="email"]').type('taylla')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
    })

    it('verifica mensagem de nome de usuário inválido', () => {

        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="fullName"]').type('t')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible')
    })

    it('verifica mensagem de nome de usuário inválido', () => {

        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="userName"]').type('t')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible')
    })

    it('verifica mensagem de senha com menos de 8 caracteres', () => {

        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="password"]').type('123')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
    })



})