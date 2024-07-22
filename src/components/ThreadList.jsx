import PropTypes from 'prop-types'
import ThreadItem, { threadItemShape } from './ThreadItem'

function ThreadList ({
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

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired
}

export default ThreadList
