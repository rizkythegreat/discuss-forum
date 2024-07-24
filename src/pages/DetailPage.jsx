import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { asyncCreateComment, asyncDownVoteComment, asyncDownVoteThreadDetail, asyncNeutralizeVoteComment, asyncNeutralizeVoteThreadDetail, asyncReceiveThreadDetail, asyncUpVoteComment, asyncUpVoteThreadDetail } from '../states/threadDetail/action'
import loadable from '@loadable/component'

const ThreadDetail = loadable(() => import('../components/ThreadDetail'))
const CommentList = loadable(() => import('../components/CommentList'))
const CommentInput = loadable(() => import('../components/CommentInput'))
const Loading = loadable(() => import('../components/Loading'))

function DetailPage () {
  const { threadId } = useParams()
  const threadDetail = useSelector(state => state.threadDetail)
  const authUser = useSelector(state => state.authUser)

  const dispatch = useDispatch()
  const onCommentSubmit = (content) => {
    dispatch(asyncCreateComment({ content }))
  }
  const onUpVoteThreadDetail = () => {
    dispatch(asyncUpVoteThreadDetail())
  }

  const onUpVoteComment = (id) => {
    dispatch(asyncUpVoteComment(id))
  }
  const onDownVoteComment = (id) => {
    dispatch(asyncDownVoteComment(id))
  }

  const onNeutralizeVoteComment = (id) => {
    dispatch(asyncNeutralizeVoteComment(id))
  }

  const onDownVoteThreadDetail = () => {
    dispatch(asyncDownVoteThreadDetail())
  }

  const onNeturalizeVoteThreadDetail = () => {
    dispatch(asyncNeutralizeVoteThreadDetail())
  }

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId))
  }, [threadId, dispatch])

  if (!threadDetail) {
    return <Loading />
  }
  return (
    <>
      <div className='fade-in flex-1 p-6 sm:mb-0 mb-16'>
        <ThreadDetail
          {...threadDetail}
          authUser={authUser.id}
          upVoteThreadDetail={onUpVoteThreadDetail}
          downVoteThreadDetail={onDownVoteThreadDetail}
          neturalizeVoteThreadDetail={onNeturalizeVoteThreadDetail}
        />
        <CommentInput addComment={onCommentSubmit} />
        <h1>Komentar ({threadDetail.comments.length})</h1>
        <CommentList
          authUser={authUser.id}
          upVoteComment={onUpVoteComment}
          downVoteComment={onDownVoteComment}
          neturalizeVoteComment={onNeutralizeVoteComment}
          comments={threadDetail.comments}
        />
      </div>
    </>
  )
}

export default DetailPage
