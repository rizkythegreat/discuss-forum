// # Test Scenario for threadDetailReducer

// ## - threadDetailReducer function
// ### - should return the initial state when given by unknown action
// ### - should return the thread detail when given by RECEIVE_THREAD_DETAIL action
// ### - should return the thread detail with toggled up vote when given by UP_VOTE_THREAD_DETAIL action
// ### - should return the thread detail with toggled down vote when given by DOWN_VOTE_THREAD_DETAIL action
// ### - should return the thread detail without toggled votes when given by NEUTRALIZE_VOTE_THREAD_DETAIL action
// ### - should return the thread detail with new comment when given by CREATE_COMMENT action
// ### - should return the thread detail with toggled up vote comment when given by UP_VOTE_COMMENT action
// ### - should return the thread detail with toggled down vote comment when given by DOWN_VOTE_COMMENT action
// ### - should return the thread detail with neutralized vote comment when given by NEUTRALIZE_VOTE_COMMENT action

import { describe, expect, it } from 'vitest';
import threadDetailReducer from './reducer';
import { ActionType } from './action';

describe('threadDetailReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread detail when given by RECEIVE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: ActionType.RECEIVE_THREAD_DETAIL,
      payload: {
        threadDetail: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-1',
          upVotesBy: [],
          downVotesBy: [],
          comments: []
        }
      }
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should return the thread detail with toggled up vote when given by UP_VOTE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-1',
      upVotesBy: [],
      downVotesBy: [],
      comments: []
    };

    const action = {
      type: ActionType.UP_VOTE_THREAD_DETAIL,
      payload: {
        userId: 'users-1'
      }
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: ['users-1'],
      downVotesBy: []
    });
  });

  it('should return the thread detail with toggled down vote when given by DOWN_VOTE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-1',
      upVotesBy: [],
      downVotesBy: []
    };

    const action = {
      type: ActionType.DOWN_VOTE_THREAD_DETAIL,
      payload: {
        userId: 'users-1'
      }
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: ['users-1']
    });
  });

  it('should return the thread detail without toggled votes when given by NEUTRALIZE_VOTE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-1',
      upVotesBy: ['users-1'],
      downVotesBy: ['users-2']
    };

    const action = {
      type: ActionType.NEUTRALIZE_VOTE_THREAD_DETAIL,
      payload: {
        userId: 'users-1'
      }
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: ['users-2']
    });
  });

  it('should return the thread detail with new comment when given by CREATE_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-1',
      upVotesBy: [],
      downVotesBy: [],
      comments: []
    };

    const action = {
      type: ActionType.CREATE_COMMENT,
      payload: {
        comment: {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T08:00:00.000Z',
          ownerId: 'users-1',
          upVotesBy: [],
          downVotesBy: []
        }
      }
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [action.payload.comment, ...initialState.comments]
    });
  });

  it('should return the thread detail with toggled up vote comment when given by UP_VOTE_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-1',
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T08:00:00.000Z',
          ownerId: 'users-1',
          upVotesBy: [],
          downVotesBy: []
        }
      ]
    };

    const action = {
      type: ActionType.UP_VOTE_COMMENT,
      payload: {
        commentId: 'comment-1',
        userId: 'users-1'
      }
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: initialState.comments.map(comment =>
        comment.id === action.payload.commentId
          ? {
              ...comment,
              upVotesBy: [action.payload.userId],
              downVotesBy: []
            }
          : comment
      )
    });
  });

  it('should return the thread detail with toggled down vote comment when given by DOWN_VOTE_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-1',
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T08:00:00.000Z',
          ownerId: 'users-1',
          upVotesBy: [],
          downVotesBy: []
        }
      ]
    };

    const action = {
      type: ActionType.DOWN_VOTE_COMMENT,
      payload: {
        commentId: 'comment-1',
        userId: 'users-1'
      }
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: initialState.comments.map(comment =>
        comment.id === action.payload.commentId
          ? {
              ...comment,
              upVotesBy: [],
              downVotesBy: [action.payload.userId]
            }
          : comment
      )
    });
  });

  it('should return the thread detail with neutralized vote comment when given by NEUTRALIZE_VOTE_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-1',
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T08:00:00.000Z',
          ownerId: 'users-1',
          upVotesBy: ['users-1'],
          downVotesBy: ['users-2']
        }
      ]
    };

    const action = {
      type: ActionType.NEUTRALIZE_VOTE_COMMENT,
      payload: {
        commentId: 'comment-1',
        userId: 'users-1'
      }
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: initialState.comments.map(comment =>
        comment.id === action.payload.commentId
          ? {
              ...comment,
              upVotesBy: [],
              downVotesBy: ['users-2']
            }
          : comment
      )
    });
  });
});
