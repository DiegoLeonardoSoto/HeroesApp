import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'

// eslint-disable-next-line react/prop-types
export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher)

  return (
    <ul>
      {heroes.map((heroe) => {
        return <li key={crypto.randomUUID()}> {heroe.superhero} </li>
      })}
    </ul>
  )
}
