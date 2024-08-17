import PropTypes from 'prop-types'
import { userShape } from '../shape/shape'

export default function Leaderboard ({ leaderboards }) {
  return (
    <section className='card mb-12 sm:mb-0'>
      <header className='card-header'>
        <div className='card-title text-lg sm:text-xl'>10 Pengguna Teratas</div>
      </header>
      <main className='card-content'>
        <table className='table'>
          <thead className='table-header'>
            <tr className='table-row'>
              <th className='table-head  sm:text-lg'>Nama</th>
              <th className='table-head  sm:text-lg'>Skor</th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {leaderboards.map((item) => (
              <tr key={item.user.id} className='table-row'>
                <td className='table-cell font-medium sm:text-lg'>
                  <img src={item.user.avatar} alt='avatar' className='avatar' />
                  {item.user.name}
                </td>
                <td className='table-cell justify-center sm:text-lg'>
                  {item.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  )
}

Leaderboard.propTypes = {
  leaderboards: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.shape(userShape).isRequired,
      score: PropTypes.number.isRequired
    })
  ).isRequired
}
