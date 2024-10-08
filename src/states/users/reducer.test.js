// # Test Scenario for usersReducer

// ## - usersReducer function
// ### - should return the initial state when given by unknown action
// ### - should return the users when given by RECEIVE_USERS action

import { describe, expect, it } from 'vitest'
import usersReducer from './reducer'
import { ActionType } from './action'

describe('usersReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = []
    const action = { type: 'UNKNOWN' }

    // action
    const nextState = usersReducer(initialState, action)

    // assert
    expect(nextState).toEqual(initialState)
  })

  it('should return the users when given by RECEIVE_USERS action', () => {
    // arrange
    const initialState = []
    const action = {
      type: ActionType.RECEIVE_USERS,
      payload: {
        users: [
          {
            id: 'user-1',
            name: 'User One',
            avatar: 'avatar1.png'
          },
          {
            id: 'user-2',
            name: 'User Two',
            avatar: 'avatar2.png'
          }
        ]
      }
    }

    // action
    const nextState = usersReducer(initialState, action)

    // assert
    expect(nextState).toEqual(action.payload.users)
  })
})
