import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'

function CommentInput ({ addComment }) {
  const [comment, onCommentChange, setComment] = useInput('')

  const onCommentSubmit = () => {
    addComment(comment)
    setComment('')
  }
  return (
    <div className='mt-2'>
      <div className='w-full xl:w-1/2'>
        <div className='relative'>
          <textarea value={comment} onChange={onCommentChange} id='message' name='message' className='message' />
        </div>
        <div className='w-full mt-2 mb-2'>
          <button onClick={onCommentSubmit} className='btn-submit'>
            Kirim
          </button>
        </div>
      </div>
    </div>
  )
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired
}

export default CommentInput
