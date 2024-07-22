import './App.css'
import DetailPage from './pages/DetailPage'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { asyncPreloadProcess } from './states/isPreload/action'
import Sidebar from './components/Navbar'
import { asyncUnsetAuthUser } from './states/authUser/action'
import Loading from './components/Loading'
import LeaderboardPage from './pages/LeaderboardPage'

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
    return null
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
          <Route path='/leaderboards' element={<LeaderboardPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
