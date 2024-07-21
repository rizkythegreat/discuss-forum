import { Link } from 'react-router-dom'

const CustomLink = ({ text, to, variant = 'default' }) => {
  return (
    <Link to={to} className={`inline-flex items-center ${variant === 'default' ? 'hover:bg-indigo-900 px-2 py-1 rounded-sm text-white bg-indigo-500' : 'text-indigo-500 group hover:text-indigo-900'}`}>
      {variant === 'withArrow' && (
        <span className='transform transition-transform duration-200 group-hover:-translate-x-1'>
          <svg className='w-4 h-4 ml-2' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path d='M19 12H5' />
            <path d='M12 19l-7-7 7-7' />
          </svg>
        </span>
      )}
      {text}
    </Link>
  )
}

export default CustomLink
