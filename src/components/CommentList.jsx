import React from 'react'
import CommentItem from './CommentItem'

function CommentList({
    comments
}) {
    return (
        <>
            {comments.map((comment) => (
                <CommentItem
                    key={comment.id}
                    {...comment}
                />
            ))}
        </>
    )
}

export default CommentList