import React from 'react'
import CustomLink from './CustomLink'
import postedAt from '../utils'
import parse from 'html-react-parser'
import VoteButton from './VoteButton'
import PropTypes from 'prop-types'
import { userShape } from './ThreadItem'

function ThreadDetail ({
  id,
  authUser,
  title,
  body,
  owner,
  createdAt,
  upVotesBy,
  downVotesBy,
  upVoteThreadDetail,
  downVoteThreadDetail,
  neturalizeVoteThreadDetail
}) {
  return (
    <>
      <section className='xl:w-1/2'>
        <CustomLink variant='withArrow' text='Kembali' to='/' />
        <section className='p-2 rounded-sm shadow-md mt-2 mb-8'>
          <header>
            <div className='flex items-center text-gray-600'>
              <img
                src={owner.avatar}
                alt='avatar'
                className='avatar'
              />
              <div className='flex flex-col items-start'>
                <h1 className='font-semibold'>{owner.name}</h1>
                <p>{postedAt(createdAt)}</p>
              </div>
            </div>
          </header>
          <main className='mt-4'>
            <h2 className='mb-4 sm:text-2xl'>
              {title}
            </h2>
            <span className='mb-4 text-[14px] sm:text-base'>
              {parse(body)}
            </span>
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
