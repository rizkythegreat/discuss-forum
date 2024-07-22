import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'

function CommentInput ({ addComment }) {
  const [comment, onCommentChange, setComment] = useInput('')

  const onCommentSubmit = () => {
    addComment(comment)
    setComment('')
  }
  return (
    <section className='mt-2'>
      <div className='w-full xl:w-2/3'>
        <main className='relative'>
          <textarea
            placeholder='Tuliskan komentar anda...'
            value={comment}
            onChange={onCommentChange}
            id='message'
            name='message'
            className='message'
          />
        </main>
        <footer className='w-full flex justify-end mt-2 mb-2'>
          <button onClick={onCommentSubmit} className='btn-submit'>
            Kirim
          </button>
        </footer>
      </div>
    </section>
  )
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired
}

export default CommentInput
