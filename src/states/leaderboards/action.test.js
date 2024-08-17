/**
 * skenario test
 *
 * - asyncPopulateLeaderboards thunk
 *   - should dispatch action correctly when data fetching success
 *   - should dispatch action and call alert correctly when data fetching failed
 */

import { describe, it, expect, vi } from 'vitest'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'
import {
  receiveLeaderboardsActionCreator,
  asyncPopulateLeaderboards
} from './action'

describe('asyncPopulateLeaderboards thunk', () => {
  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    const dispatch = vi.fn()
    const fakeLeaderboards = [{ user: 'user-1', score: 100 }]
    api.getLeaderboards = vi.fn().mockResolvedValue(fakeLeaderboards)

    // action
    await asyncPopulateLeaderboards()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(api.getLeaderboards).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledWith(receiveLeaderboardsActionCreator(fakeLeaderboards))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    const dispatch = vi.fn()
    const fakeError = new Error('Failed to fetch leaderboards')
    api.getLeaderboards = vi.fn().mockRejectedValue(fakeError)
    global.alert = vi.fn()

    // action
    await asyncPopulateLeaderboards()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(api.getLeaderboards).toHaveBeenCalled()
    expect(global.alert).toHaveBeenCalledWith(fakeError.message)
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})
