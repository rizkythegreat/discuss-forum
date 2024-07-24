/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */
import { cleanup, render, screen } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import LoginForm from './LoginForm'
import userEvent from '@testing-library/user-event'
import matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should handle email typing correctly', async () => {
    render(
      <MemoryRouter>
        <LoginForm login={() => {}} />
      </MemoryRouter>
    )
    // arrange
    const emailInput = await screen.getByLabelText('Email')

    // action
    await userEvent.type(emailInput, 'emailtest')

    // assert
    expect(emailInput).toHaveValue('emailtest')
  })

  it('should handle password typing correctly', async () => {
    render(
      <MemoryRouter>
        <LoginForm login={() => {}} />
      </MemoryRouter>
    )
    // arrange
    const passwordInput = await screen.getByPlaceholderText('enter your password')

    // action
    await userEvent.type(passwordInput, 'passwordtest')

    // assert
    expect(passwordInput).toHaveValue('passwordtest')
  })

  it('should call login function when login button is clicked', async () => {
    // arrange
    const mockLogin = vi.fn()
    render(
      <MemoryRouter>
        <LoginForm login={mockLogin} />
      </MemoryRouter>
    )
    const emailInput = await screen.getByLabelText('Email')
    await userEvent.type(emailInput, 'emailtest')
    const passwordInput = await screen.getByLabelText('password-login')
    await userEvent.type(passwordInput, 'passwordtest')
    const loginButton = screen.getByRole('button', { name: 'Login' })

    // action
    await userEvent.click(loginButton)

    // assert
    expect(mockLogin).toHaveBeenCalledWith({
      email: 'emailtest',
      password: 'passwordtest'
    })
  })
})
