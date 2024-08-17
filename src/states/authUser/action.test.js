/**
 * skenario test
 *
 * - asyncSetAuthUser thunk
 *   - should dispatch action correctly when login success
 *   - should dispatch action and call alert correctly when login failed
 *
 * - asyncUnsetAuthUser thunk
 *   - should dispatch action correctly
 */

import { describe, it, expect, vi } from 'vitest'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'
import {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser
} from './action'

describe('asyncSetAuthUser thunk', () => {
  it('should dispatch action correctly when login success', async () => {
    // arrange
    const dispatch = vi.fn()
    const fakeToken = 'fakeToken'
    const fakeUser = { id: 'user-1', name: 'User One' }
    api.login = vi.fn().mockResolvedValue(fakeToken)
    api.putAccessToken = vi.fn()
    api.getOwnProfile = vi.fn().mockResolvedValue(fakeUser)

    // action
    await asyncSetAuthUser({ email: 'user@example.com', password: 'password' })(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(api.login).toHaveBeenCalledWith({ email: 'user@example.com', password: 'password' })
    expect(api.putAccessToken).toHaveBeenCalledWith(fakeToken)
    expect(api.getOwnProfile).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeUser))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch action and call alert correctly when login failed', async () => {
    // arrange
    const dispatch = vi.fn()
    const fakeError = new Error('Login failed')
    api.login = vi.fn().mockRejectedValue(fakeError)
    global.alert = vi.fn()

    // action
    await asyncSetAuthUser({ email: 'user@example.com', password: 'password' })(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(api.login).toHaveBeenCalledWith({ email: 'user@example.com', password: 'password' })
    expect(global.alert).toHaveBeenCalledWith(fakeError.message)
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})

describe('asyncUnsetAuthUser thunk', () => {
  it('should dispatch action correctly', async () => {
    // arrange
    const dispatch = vi.fn()
    api.putAccessToken = vi.fn()

    // action
    await asyncUnsetAuthUser()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(unsetAuthUserActionCreator())
    expect(api.putAccessToken).toHaveBeenCalledWith('')
  })
})
