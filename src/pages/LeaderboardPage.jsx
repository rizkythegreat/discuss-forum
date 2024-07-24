import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncPopulateLeaderboards } from '../states/leaderboards/action'
import loadable from '@loadable/component'

const Leaderboard = loadable(() => import('../components/Leaderboard'))

function LeaderboardPage () {
  const dispatch = useDispatch()
  const leaderboards = useSelector((state) => state.leaderboards)
  useEffect(() => {
    dispatch(asyncPopulateLeaderboards())
  }, [dispatch])
  return (
    <>
      <section className='fade-in flex-1 p-4 sm:p-8 xl:w-1/2'>
        <h2 className='scroll-m-20 mb-6 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
          Leaderboards
        </h2>
        <Leaderboard leaderboards={leaderboards} />
      </section>
    </>
  )
}

export default LeaderboardPage
