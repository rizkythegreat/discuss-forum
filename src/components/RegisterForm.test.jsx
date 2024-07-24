/**
 * skenario testing
 *
 * - RegisterForm component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when sign up button is clicked
 *   - should navigate to login page when login link is clicked
 */

import { cleanup, render, screen } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import RegisterForm from './RegisterForm'
import userEvent from '@testing-library/user-event'
import matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)

describe('RegisterForm component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should handle name typing correctly', async () => {
    render(
      <MemoryRouter>
        <RegisterForm register={() => {}} />
      </MemoryRouter>
    )
    const nameInput = await screen.getByLabelText('Name')
    await userEvent.type(nameInput, 'John Doe')
    expect(nameInput).toHaveValue('John Doe')
  })

  it('should handle email typing correctly', async () => {
    render(
      <MemoryRouter>
        <RegisterForm register={() => {}} />
      </MemoryRouter>
    )
    const emailInput = await screen.getByLabelText('Email')
    await userEvent.type(emailInput, 'john@example.com')
    expect(emailInput).toHaveValue('john@example.com')
  })

  it('should handle password typing correctly', async () => {
    render(
      <MemoryRouter>
        <RegisterForm register={() => {}} />
      </MemoryRouter>
    )
    const passwordInput = await screen.getByLabelText('Password')
    await userEvent.type(passwordInput, 'password123')
    expect(passwordInput).toHaveValue('password123')
  })

  it('should call register function when sign up button is clicked', async () => {
    const mockRegister = vi.fn()
    render(
      <MemoryRouter>
        <RegisterForm register={mockRegister} />
      </MemoryRouter>
    )
    const nameInput = await screen.getByLabelText('Name')
    await userEvent.type(nameInput, 'John Doe')
    const emailInput = await screen.getByLabelText('Email')
    await userEvent.type(emailInput, 'john@example.com')
    const passwordInput = await screen.getByLabelText('Password')
    await userEvent.type(passwordInput, 'password123')
    const signUpButton = screen.getByRole('button', { name: 'Sign Up' })

    await userEvent.click(signUpButton)

    expect(mockRegister).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123'
    })
  })

  it('should navigate to login page when login link is clicked', async () => {
    render(
      <MemoryRouter>
        <RegisterForm register={() => {}} />
      </MemoryRouter>
    )
    const loginLink = await screen.getByText('Login')
    await userEvent.click(loginLink)
    expect(window.location.pathname).toBe('/')
  })
})
