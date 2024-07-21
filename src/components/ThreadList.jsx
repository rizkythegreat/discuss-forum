import React from 'react'
import ThreadItem from './ThreadItem'

function ThreadList({
    threads,
    upVote,
    downVote,
    neturalizeVote
}) {
    return (
        <>
            {threads.map((thread) => (
                <ThreadItem
                    key={thread.id}
                    {...thread}
                    upVote={upVote}
                    downVote={downVote}
                    neturalizeVote={neturalizeVote}
                />
            ))}
        </>
    )
}

export default ThreadList