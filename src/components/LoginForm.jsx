import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'

function LoginForm ({ login }) {
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      login({ email, password })
    }
  }
  return (
    <section className='w-full max-w-sm card'>
      <header className='card-header'>
        <h1 className='text-2xl card-title'>Login</h1>
        <h2 className='card-description'>
          Enter your email below to login to your account.
        </h2>
      </header>
      <main className='grid gap-4 card-content'>
        <div className='grid gap-2'>
          <label htmlFor='email'>Email</label>
          <input
            value={email}
            onChange={onEmailChange}
            className='input'
            id='email'
            type='email'
            placeholder='m@example.com'
            required
          />
        </div>
        <div className='grid gap-2'>
          <label htmlFor='password'>Password</label>
          <input
            value={password}
            onKeyDown={handleKeyPress}
            onChange={onPasswordChange}
            placeholder='enter your password'
            className='input'
            id='password'
            type='password'
            required
          />
        </div>
      </main>
      <footer className='card-footer flex-col'>
        <button
          onClick={() => login({ email, password })}
          className='btn-login'
        >
          Login
        </button>
        <div className='mt-1 text-center text-sm'>
          Don&apos;t have an account?{' '}
          <Link to='/register' className='underline'>
            Register
          </Link>
        </div>
      </footer>
    </section>
  )
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

export default LoginForm
