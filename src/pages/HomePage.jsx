import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import ThreadList from '../components/ThreadList'
import { useDispatch, useSelector } from 'react-redux'
import { asyncReceiveThreads } from '../states/threads/action'

function HomePage() {
    const dispatch = useDispatch()
    const threads = useSelector(state => state.threads)
    const users = useSelector(state => state.users)

    useEffect(() => {
        dispatch(asyncReceiveThreads())
    }, [dispatch])

    const threadList = threads.map((thread) => ({
        ...thread,
        threadOwner: users.find((user) => user.id === thread.ownerId),
    }));
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-8">
                <h1 className="sm:text-3xl font-bold text-2xl">Forum Diskusi</h1>
                <ThreadList threads={threadList} />
            </div>
        </div>
    )
}

export default HomePage