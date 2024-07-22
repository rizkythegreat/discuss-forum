import { ThumbsDown, ThumbsUp } from 'lucide-react'
import PropTypes from 'prop-types'

function VoteButton ({
  id,
  upVote,
  downVote,
  neturalizeVote,
  upVotesBy,
  downVotesBy,
  authUser
}) {
  const isUpVoted = upVotesBy.includes(authUser)
  const isDownVoted = downVotesBy.includes(authUser)

  const onUpVoteClick = (event) => {
    event.stopPropagation()
    upVote(id)
  }

  const onDownVoteClick = (event) => {
    event.stopPropagation()
    downVote(id)
  }

  const onNeutralizeVoteClick = (event) => {
    event.stopPropagation()
    neturalizeVote(id)
  }

  return (
    <div className='flex border rounded-full p-2 pt-2 items-center gap-2'>
      {isUpVoted
        ? (
          <ThumbsUp
            className='cursor-pointer'
            onClick={onNeutralizeVoteClick}
            size={18}
            fill='#6366F1'
            strokeWidth={0}
          />
          )
        : (
          <ThumbsUp
            className='cursor-pointer'
            onClick={onUpVoteClick}
            size={18}
            strokeWidth={1}
          />
          )}
      <span className='cursor-default'>{upVotesBy.length}</span>
      {isDownVoted
        ? (
          <ThumbsDown
            className='cursor-pointer'
            onClick={onNeutralizeVoteClick}
            size={18}
            fill='#6366F1'
            strokeWidth={0}
          />
          )
        : (
          <ThumbsDown
            className='cursor-pointer'
            onClick={onDownVoteClick}
            size={18}
            strokeWidth={1}
          />
          )}
      <span className='cursor-default'>{downVotesBy.length}</span>
    </div>
  )
}

VoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired
}

export default VoteButton
