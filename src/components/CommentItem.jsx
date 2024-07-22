import postedAt from '../utils'
import parse from 'html-react-parser'
import VoteButton from './VoteButton'
import PropTypes from 'prop-types'
import { userShape } from './ThreadItem'

function CommentItem ({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  neturalizeVote,
  authUser
}) {
  return (
    <section className='xl:w-2/3'>
      <div className='card mt-8 border rounded-md shadow-md'>
        <header className='card-header'>
          <div className='flex items-center text-gray-600 mb-3'>
            <img src={owner.avatar} alt='avatar' className='avatar' />
            <div className='flex flex-col items-start'>
              <h1 className='font-semibold'>{owner.name}</h1>
              <p>{postedAt(createdAt)}</p>
            </div>
          </div>
        </header>
        <main className='card-content'>
          <p className='mb-4'>{parse(content)}</p>
          <div className='flex pb-4 pt-4 items-center gap-2'>
            <VoteButton
              id={id}
              authUser={authUser}
              upVote={upVote}
              downVote={downVote}
              neturalizeVote={neturalizeVote}
              upVotesBy={upVotesBy}
              downVotesBy={downVotesBy}
            />
          </div>
        </main>
      </div>
    </section>
  )
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired
}

CommentItem.propTypes = {
  ...commentShape,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired
}
export { commentShape }

export default CommentItem
