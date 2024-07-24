/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when username is empty
 *   - should display alert when password is empty
 *   - should display alert when username and password are wrong
 *   - should display homepage when username and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  }) 
  it('should be display login page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="m@example.com"]').should('be.visible');
    cy.get('input[placeholder="enter your password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  })

  it('should display alert when email is empty', () => {
    cy.get('button').contains(/^Login$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty')
    })
  })

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="m@example.com"]').type('test@email.com')

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty')
    })
  })

  it('should display alert when email and password is wrong', () => {
    cy.get('input[placeholder="m@example.com"]').type('test@email.com')
    cy.get('input[placeholder="enter your password"]').type('wrong_password')

    // menekan tombol Login
    cy.get('button').contains(/^Login$/).click();

    // alert
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong')
    })
  })

  it('should display homepage when email and password is correct', () => {
    cy.get('input[placeholder="m@example.com"]').type('eky@gmail.com')
    cy.get('input[placeholder="enter your password"]').type('12345678')

    // menekan tombol Login
    cy.get('button').contains(/^Login$/).click();

    // memverifikasi bahwa elemen yang berada di homepage ditampilkan
    cy.get('li').contains(/^Threads$/).should('be.visible');
    cy.get('button').contains('Logout').should('be.visible');
  })
})