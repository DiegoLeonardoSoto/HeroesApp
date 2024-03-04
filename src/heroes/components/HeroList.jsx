import { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import HeroCard from './HeroCard'

// eslint-disable-next-line react/prop-types
export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <div className="row - row-cols-1 row-cols-md-3 g-3">
      {heroes.map((heroe) => {
        return <HeroCard key={heroe.id} {...heroe} />
      })}
    </div>
  )
}
