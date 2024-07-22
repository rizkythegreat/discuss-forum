import { useDispatch } from 'react-redux'
import RegisterForm from '../components/RegisterForm'
import { useNavigate } from 'react-router-dom'
import { asyncRegisterUser } from '../states/users/action'

function RegisterPage () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }))
    navigate('/')
  }
  return (
    <main className='flex flex-col items-center justify-between p-10 sm:p-24'>
      <h2 className='scroll-m-20 mb-6 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Forum Diskusi
      </h2>
      <RegisterForm register={onRegister} />
    </main>
  )
}

export default RegisterPage
