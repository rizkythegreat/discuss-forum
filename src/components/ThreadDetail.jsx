import postedAt from '../utils'
import parse from 'html-react-parser'
import VoteButton from './VoteButton'
import PropTypes from 'prop-types'
import { userShape } from '../shape/shape'
import { Link } from 'react-router-dom'

function ThreadDetail ({
  id,
  authUser,
  title,
  body,
  owner,
  createdAt,
  category,
  upVotesBy,
  downVotesBy,
  upVoteThreadDetail,
  downVoteThreadDetail,
  neturalizeVoteThreadDetail
}) {
  return (
    <>
      <section className='xl:w-2/3'>
        <Link
          className='inline-flex items-center text-indigo-500 group hover:text-indigo-900'
          to='/'
        >
          <span className='transform transition-transform duration-200 group-hover:-translate-x-1'>
            <svg
              className='w-4 h-4 ml-2'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M19 12H5' />
              <path d='M12 19l-7-7 7-7' />
            </svg>
          </span>
          Kembali
        </Link>
        <section className='card rounded-sm shadow-md mt-2 mb-8'>
          <header className='card-header'>
            <div className='flex items-center text-gray-600'>
              <img src={owner.avatar} alt='avatar' className='avatar' />
              <div className='flex flex-col items-start'>
                <h1 className='font-semibold'>{owner.name}</h1>
                <p>{postedAt(createdAt)}</p>
              </div>
            </div>
          </header>
          <main className='mt-2 card-content'>
            <h2 className='mb-4 sm:text-2xl'>{title}</h2>
            <span className='mb-4 text-[14px] sm:text-base'>{parse(body)}</span>
            <section className='text-lg flex mt-5 text-gray-500'>
              <p className='px-2 py-1 btn-category'>#{category}</p>
            </section>
            <div className='flex pb-4 pt-4 items-center gap-2'>
              <VoteButton
                upVote={upVoteThreadDetail}
                downVote={downVoteThreadDetail}
                neturalizeVote={neturalizeVoteThreadDetail}
                upVotesBy={upVotesBy}
                downVotesBy={downVotesBy}
                authUser={authUser}
                id={id}
              />
            </div>
          </main>
        </section>
      </section>
    </>
  )
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVoteThreadDetail: PropTypes.func.isRequired,
  downVoteThreadDetail: PropTypes.func.isRequired,
  neturalizeVoteThreadDetail: PropTypes.func.isRequired
}

export default ThreadDetail
