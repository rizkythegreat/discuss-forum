/**
 * skenario test
 *
 * - leaderboardsReducer function
 *   - should return the initial state when given by unknown action
 *   - should return the leaderboards when given by RECEIVE_LEADERBOARDS action
 */

import { describe, it, expect } from 'vitest'
import leaderboardsReducer from './reducer'
import { ActionType } from './action'

describe('leaderboardsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = []
    const action = { type: 'UNKNOWN' }

    // action
    const nextState = leaderboardsReducer(initialState, action)

    // assert
    expect(nextState).toEqual(initialState)
  })

  it('should return the leaderboards when given by RECEIVE_LEADERBOARDS action', () => {
    // arrange
    const initialState = []
    const action = {
      type: ActionType.RECEIVE_LEADERBOARDS,
      payload: {
        leaderboards: [
          { user: 'user-1', score: 100 },
          { user: 'user-2', score: 80 }
        ]
      }
    }

    // action
    const nextState = leaderboardsReducer(initialState, action)

    // assert
    expect(nextState).toEqual(action.payload.leaderboards)
  })
})
