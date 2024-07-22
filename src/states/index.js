import { configureStore } from '@reduxjs/toolkit'
import threadReducer from './threads/reducer'
import usersReducer from './users/reducer'
import threadDetailReducer from './threadDetail/reducer'
import authUserReducer from './authUser/reducer'
import isPreloadReducer from './isPreload/reducer'
import { loadingBarReducer } from 'react-redux-loading-bar'
import leaderboardsReducer from './leaderboards/reducer'

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    threads: threadReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threadDetail: threadDetailReducer,
    leaderboards: leaderboardsReducer,
    loadingBar: loadingBarReducer
  }
})

export default store
