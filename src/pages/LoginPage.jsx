import React from 'react'
import LoginForm from '../components/LoginForm'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { asyncSetAuthUser } from '../states/authUser/action'

function LoginPage () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }))
    navigate('/')
  }
  return (
    <main className='flex flex-col items-center justify-between p-10 sm:p-24'>
      <h2 className='scroll-m-20 mb-6 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Forum Diskusi
      </h2>
      <LoginForm login={onLogin} />
    </main>
  )
}

export default LoginPage
