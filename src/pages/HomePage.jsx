import { useEffect } from 'react'
import ThreadList from '../components/ThreadList'
import { useDispatch, useSelector } from 'react-redux'
import asyncPopulateUsersAndThreads from '../states/shared/action'
import { asyncDownVoteThread, asyncNeturalizeVoteThread, asyncUpVoteThread } from '../states/threads/action'

function HomePage () {
  const dispatch = useDispatch()
  const threads = useSelector(state => state.threads)
  const users = useSelector(state => state.users)
  const authUser = useSelector(state => state.authUser)

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads())
  }, [dispatch])

  const onUpVoteThread = (id) => {
    dispatch(asyncUpVoteThread(id))
  }

  const onDownVoteThread = (id) => {
    dispatch(asyncDownVoteThread(id))
  }

  const onNeturalizeVoteThread = (id) => {
    dispatch(asyncNeturalizeVoteThread(id))
  }

  const threadList = threads.map((thread) => ({
    ...thread,
    threadOwner: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id
  }))

  return (
    <>
      <div className='flex-1 p-8 mb-8 sm:mb-0'>
        <h1 className='sm:text-3xl font-bold text-2xl'>Forum Diskusi</h1>
        <ThreadList
          threads={threadList}
          upVote={onUpVoteThread}
          downVote={onDownVoteThread}
          neturalizeVote={onNeturalizeVoteThread}
        />
      </div>
    </>
  )
}

export default HomePage
