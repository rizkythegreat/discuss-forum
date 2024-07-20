import React from 'react'
import { useNavigate } from 'react-router-dom'
import postedAt from '../utils'

function ThreadItem({
    id,
    title,
    body,
    createdAt,
    threadOwner,
    totalComments
}) {
    const navigate = useNavigate()
    const onThreadClick = () => {
        navigate(`/threads/${id}`)
    }
    return (
        <div className='xl:w-1/2'>
            <div className='mt-8 cursor-pointer hover:bg-gray-100' onClick={onThreadClick}>
                <h2 className="mb-4 text-2xl font-semibold">
                    {title}
                </h2>
                <p className="mb-4">
                    {body}
                </p>
                <div className='flex space-x-10'>
                    <p>Created By:{threadOwner}</p>
                    <p>{postedAt(createdAt)}</p>
                </div>
                <div className='mt-2 border-b-2'>
                    <p>Comments ({totalComments})</p>
                </div>
            </div>

        </div>
    )
}

export default ThreadItem