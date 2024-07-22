import { Link } from 'react-router-dom'

function RegisterForm () {
  return (
    <div className='w-full max-w-sm card'>
      <div className='card-header'>
        <h1 className='text-2xl card-title'>Register</h1>
        <h2 className='card-description'>
          Register to create your account.
        </h2>
      </div>
      <main className='grid gap-4 card-content'>
        <div className='grid gap-2'>
          <label htmlFor='name'>Name</label>
          <input className='input' id='name' type='name' placeholder='enter your name' required />
        </div>
        <div className='grid gap-2'>
          <label htmlFor='email'>Email</label>
          <input className='input' id='email' type='email' placeholder='m@example.com' required />
        </div>
        <div className='grid gap-2'>
          <label htmlFor='password'>Password</label>
          <input className='input' id='password' placeholder='enter your password' type='password' required />
        </div>
      </main>
      <footer className='card-footer flex-col'>
        <button className='btn-login'>Sign Up</button>
        <div className='mt-1 text-center text-sm'>
          Already have an account?{' '}
          <Link to='/' className='underline'>
            Login
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default RegisterForm
