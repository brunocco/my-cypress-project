describe('Teste de Login OrangeHRM', () => {
  beforeEach(() => {
    cy.visit('/web/index.php/auth/login')
  })

  it('Login com sucesso', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    // Verifica se foi redirecionado para dashboard
    cy.url().should('include', '/dashboard')
    cy.contains('Dashboard').should('be.visible')
  })

  it('Login sem sucesso', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('senhaErrada')
    cy.get('button[type="submit"]').click()

    // Verifica mensagem de erro
    cy.get('.oxd-alert-content > .oxd-text')
      .should('be.visible')
      .and('contain.text', 'Invalid credentials')
  })
})



