import { useNavigate } from 'react-router-dom'
import postedAt from '../utils'
import parse from 'html-react-parser'
import truncateText from '../utils/truncate'
import VoteButton from './VoteButton'
import PropTypes from 'prop-types'

function ThreadItem ({
  id,
  category,
  title,
  body,
  createdAt,
  threadOwner,
  totalComments,
  authUser,
  upVote,
  downVote,
  neturalizeVote,
  upVotesBy,
  downVotesBy
}) {
  const truncatedText = truncateText(body, 200)

  const navigate = useNavigate()
  const onThreadClick = () => {
    navigate(`/thread/${id}`)
  }
  return (
    <section className='xl:w-2/3'>
      <div
        onClick={onThreadClick}
        className='card mt-8 cursor-pointer border shadow-md rounded-md'
      >
        <header className='card-header'>
          <div className='flex items-center text-gray-600'>
            <img src={threadOwner.avatar} alt='avatar' className='avatar' />
            <div className='flex flex-col items-start'>
              <h1 className='font-semibold'>{threadOwner.name}</h1>
              <p>{postedAt(createdAt)}</p>
            </div>
          </div>
        </header>
        <main className='card-content'>
          <h2>{title}</h2>
          <div className='mb-4'>{parse(truncatedText)}</div>
          <div className='text-lg flex mt-5 text-gray-500'>
            <p className='px-2 py-1 btn-category'>#{category}</p>
          </div>
          <footer>
            <section className='flex z-10 pt-4 pb-1 items-center gap-2'>
              <VoteButton
                id={id}
                authUser={authUser}
                upVote={upVote}
                downVote={downVote}
                neturalizeVote={neturalizeVote}
                upVotesBy={upVotesBy}
                downVotesBy={downVotesBy}
              />
            </section>
            <div className='mt-2 border-b-2'>
              <p>Komentar ({totalComments})</p>
            </div>
          </footer>
        </main>
      </div>
    </section>
  )
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  avatar: PropTypes.string.isRequired
}

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  threadOwner: PropTypes.shape(userShape).isRequired
}

ThreadItem.propTypes = {
  ...threadItemShape,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired
}

export { threadItemShape, userShape }

export default ThreadItem
