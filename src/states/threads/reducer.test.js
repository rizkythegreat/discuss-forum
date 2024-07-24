/**
* test scenario for talksReducer
*
* - talkReducers function
*  - should return the initial state when given by unknown action
*  - should return the talks when given by RECEIVE_TALKS action
*  - should return the talks with the new talk when given by ADD_TALK action
*  - should return the talks with the toggled like talk when given by TOGGLE_LIKE_TALK action
*
*/

import { describe, expect, it } from "vitest";
import threadsReducer from "./reducer";

describe('threadReducer function', () => {
    it('should return the initial state when given by unknown action', () => {
        //arrange
        const initialState = [];
        const action = { type: 'UNKNOWN'}

        //action
        const nextState = threadsReducer(initialState, action);

        //assert
        expect(nextState).toEqual(initialState);
    });

    it('should return the threads when given by RECEIVE_THREADS action', () => {
        //arrange
        const initialState = [];
        const action = {
            type: 'RECEIVE_THREADS',
            payload: {
                threads: [
                    {
                        "id": "thread-1",
                        "title": "Thread Pertama",
                        "body": "Ini adalah thread pertama",
                        "category": "General",
                        "createdAt": "2021-06-21T07:00:00.000Z",
                        "ownerId": "users-1",
                        "upVotesBy": [],
                        "downVotesBy": [],
                        "totalComments": 0
                    }
                ]
            }
        }
        //action
        const nextState = threadsReducer(initialState, action);

        //assert
        expect(nextState).toEqual(action.payload.threads);
    });

    it('should return the threads with the new thread when given by CREATE_THREAD action', () => {
        //arrange
        const initialState = [
            {
                "id": "thread-1",
                "title": "Thread Pertama",
                "body": "Ini adalah thread pertama",
                "category": "General",
                "createdAt": "2021-06-21T07:00:00.000Z",
                "ownerId": "users-1",
                "upVotesBy": [],
                "downVotesBy": [],
                "totalComments": 0
            },
        ];

        const action = {
            type: 'CREATE_THREAD',
            payload: {
                "thread": {
                    "id": "thread-1",
                    "title": "Thread Pertama",
                    "body": "Ini adalah thread pertama",
                    "category": "General",
                    "createdAt": "2021-06-21T07:00:00.000Z",
                    "ownerId": "users-1",
                    "upVotesBy": [],
                    "downVotesBy": [],
                    "totalComments": 0
                }
            }
        }

        //action
        const nextState = threadsReducer(initialState, action);

        //assert
        expect(nextState).toEqual([action.payload.thread, ...initialState]);
    });

    it('should return the thread with the toggled like thread when given by UP_VOTE_THREAD action', () => {
        //arrange
        const initialState = [
            {
                id: 'thread-1',
                title: 'Thread Pertama',
                body: 'Ini adalah thread pertama',
                category: 'General',
                createdAt: '2021-06-21T07:00:00.000Z',
                ownerId: 'users-1',
                upVotesBy: [],
                downVotesBy: [],
            }
        ]

        const action = {
            type: 'UP_VOTE_THREAD',
            payload: {
                "threadId": "thread-1",
                "userId": "users-1",
            }
        }

        //action: like thread
        const nextState = threadsReducer(initialState, action);

        //assert
        expect(nextState).toEqual([
            {
                ...initialState[0],
                upVotesBy: [action.payload.userId],
                downVotesBy: []
            }
        ])
    });
    it('should return the thread with toggled DownVote when given by DOWN_VOTE_THREAD action', () => {
        const initialState = [
          {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
          },
        ];
    
        const action = {
          type: 'DOWN_VOTE_THREAD',
          payload: {
            threadId: 'thread-1',
            userId: 'users-1',
          },
        };
        // action
        const nextState = threadsReducer(initialState, action);
    
        // assert
        expect(nextState).toEqual([
          {
            ...initialState[0],
            upVotesBy: [],
            downVotesBy: [action.payload.userId],
          },
        ]);
      });

      it('should return the thread without toggled UpVote and DownVote when given by NEUTRALIZE_VOTE_THREAD action', () => {
        const initialState = [
          {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
          },
        ];
    
        const action = {
          type: 'NEUTRALIZE_VOTE_THREAD',
          payload: {
            threadId: 'thread-1',
            userId: 'users-1',
          },
        };
        // action
        const nextState = threadsReducer(initialState, action);
    
        // assert
        expect(nextState).toEqual([
          {
            ...initialState[0],
            upVotesBy: [],
            downVotesBy: [],
          },
        ]);
      });
})