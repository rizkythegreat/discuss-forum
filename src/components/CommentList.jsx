import PropTypes from 'prop-types'
import CommentItem, { commentShape } from './CommentItem'

function CommentList ({
  comments,
  authUser,
  upVoteComment,
  downVoteComment,
  neturalizeVoteComment
}) {
  return (
    <>
      {comments.map((comment) => (
        <CommentItem
          authUser={authUser}
          upVote={upVoteComment}
          downVote={downVoteComment}
          neturalizeVote={neturalizeVoteComment}
          key={comment.id}
          {...comment}
        />
      ))}
    </>
  )
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  authUser: PropTypes.string.isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
  neturalizeVoteComment: PropTypes.func.isRequired
}

export default CommentList
