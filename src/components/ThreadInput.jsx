import { Link } from 'react-router-dom'
import useInput from '../hooks/useInput'
import PropTypes from 'prop-types'

function ThreadInput ({ addThread }) {
  const [title, onTitleChange] = useInput('')
  const [body, onBodyChange] = useInput('')
  const [category, onCategoryChange] = useInput('')
  return (
    <>
      <section className='w-full sm:max-w-xl'>
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
        <header className='card-header'>
          <h1 className='text-xl font-semibold'>Buat diskusi baru</h1>
          <h2 className='card-description'>
            Tuangkan ide anda kedalam threads!
          </h2>
        </header>
        <main className='grid gap-6 card-content'>
          <div className='grid gap-2'>
            <label htmlFor='title'>Judul</label>
            <input
              value={title}
              onChange={onTitleChange}
              className='input'
              id='title'
              type='text'
              placeholder='Masukkan judul...'
              required
            />
          </div>
          <div className='grid gap-2'>
            <label htmlFor='category'>Kategori</label>
            <input
              value={category}
              onChange={onCategoryChange}
              className='input'
              id='category'
              type='text'
              placeholder='Masukkan kategori...'
              required
            />
          </div>
          <div className='grid gap-2'>
            <label htmlFor='body'>Masukkan Ide Kamu</label>
            <textarea
              value={body}
              onChange={onBodyChange}
              placeholder='Masukkan ide diskusi kamu...'
              className='text-area'
              id='body'
              type='text'
              required
            />
          </div>
        </main>
        <footer className='card-footer flex-col'>
          <button
            onClick={() => addThread({ title, body, category })}
            className='btn-login'
          >
            Buat Thread
          </button>
        </footer>
      </section>
    </>
  )
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired
}

export default ThreadInput
