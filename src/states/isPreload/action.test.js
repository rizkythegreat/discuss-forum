/**
 * skenario test
 *
 * - asyncPreloadProcess thunk
 *   - should dispatch action correctly when data fetching success
 *   - should dispatch action and call alert correctly when data fetching failed
 */
import { describe, it, expect, vi } from 'vitest'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'
import { setAuthUserActionCreator } from '../authUser/action'
import { ActionType, setIsPreloadActionCreator, asyncPreloadProcess } from './action'

describe('asyncPreloadProcess thunk', () => {
  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    const dispatch = vi.fn()
    const fakeUser = { id: 'user-1', name: 'User One' }
    api.getOwnProfile = vi.fn().mockResolvedValue(fakeUser)

    // action
    await asyncPreloadProcess()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeUser))
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    const dispatch = vi.fn()
    api.getOwnProfile = vi.fn().mockRejectedValue(new Error('Failed to fetch'))

    // action
    await asyncPreloadProcess()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null))
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})
