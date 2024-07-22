import { useDispatch } from 'react-redux'
import ThreadInput from '../components/ThreadInput'
import { asyncCreateThread } from '../states/threads/action'
import { useNavigate } from 'react-router-dom'

function AddThreadPage () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncCreateThread({ title, body, category }))
    navigate('/')
  }
  return (
    <>
      <div className='flex-1 p-4 sm:p-8 mb-16 sm:mb-0'>
        <ThreadInput addThread={onAddThread} />
      </div>
    </>
  )
}

export default AddThreadPage
