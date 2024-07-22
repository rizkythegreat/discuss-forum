// Sidebar.jsx
import PropTypes from 'prop-types'
import { useMediaQuery } from '../utils/use-media-query'
import { userShape } from './ThreadItem'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ authUser, signOut }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  return isDesktop
    ? (
      <div className='sticky hidden sm:block top-0 h-screen overflow-y-auto bg-gray-100 p-8 xl:w-64'>
        <div className='flex items-center mb-8'>
          <img src={authUser.avatar} alt='avatar' className='avatar' />
          <h1>Halo {authUser.name} !</h1>
        </div>
        <ul>
          <li className='mb-2'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'text-indigo-500' : 'hover:text-indigo-500'}
            >
              Threads
            </NavLink>
          </li>
          <li className='mb-2'>
            <NavLink
              to='/leaderboards'
              className={({ isActive }) =>
                isActive ? 'text-indigo-500' : 'hover:text-indigo-500'}
            >
              Leaderboards
            </NavLink>
          </li>
          <li className='mb-2'>
            <button onClick={signOut} className='btn-logout'>
              Logout
            </button>
          </li>
        </ul>
      </div>
      )
    : (
      <div className='fixed inset-x-0 z-10 bottom-0 bg-gray-100 p-4'>
        <ul className='flex justify-around'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'text-indigo-500' : 'hover:text-indigo-500'}
            >
              Threads
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/leaderboards'
              className={({ isActive }) =>
                isActive ? 'text-indigo-500' : 'hover:text-indigo-500'}
            >
              Leaderboards
            </NavLink>
          </li>
          <li>
            <button onClick={signOut} className='btn-logout'>
              Logout
            </button>
          </li>
        </ul>
      </div>
      )
}

Sidebar.propTypes = {
  authUser: PropTypes.shape(userShape).isRequired,
  signOut: PropTypes.func.isRequired
}

export default Sidebar
