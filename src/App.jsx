import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import loadable from '@loadable/component';
import { asyncPreloadProcess } from './states/isPreload/action'
import { asyncUnsetAuthUser } from './states/authUser/action'
import pMinDelay from 'p-min-delay';

const DetailPage = loadable(() => import('./pages/DetailPage'))
const HomePage = loadable(() => pMinDelay(import('./pages/HomePage'), 800))
const RegisterPage = loadable(() => import('./pages/RegisterPage'))
const LoginPage = loadable(() => import('./pages/LoginPage'))
const Sidebar = loadable(() => import('./components/Navbar'))
const AddThreadPage = loadable(() => import('./pages/AddThreadPage'))
const Loading = loadable(() => pMinDelay(import('./components/Loading'), 500)) 
const LeaderboardPage = loadable(() => import('./pages/LeaderboardPage') )

function App () {
  const isPreload = useSelector((state) => state.isPreload)
  const authUser = useSelector((state) => state.authUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPreloadProcess())
  }, [dispatch])

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser())
  }

  if (isPreload) {
    return <Loading />
  }
  if (authUser === null) {
    return (
      <>
        <Loading />
        <Routes>
          <Route path='/*' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </>
    )
  }
  return (
    <>
      <div className='flex'>
        <Loading />
        <Sidebar authUser={authUser} signOut={onSignOut} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/thread/:threadId' element={<DetailPage />} />
          <Route path='/new' element={<AddThreadPage />} />
          <Route path='/leaderboards' element={<LeaderboardPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
