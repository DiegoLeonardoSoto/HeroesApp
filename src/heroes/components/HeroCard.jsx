import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const CharactersByHero = ({ alter_ego, characters }) => {
  if (alter_ego === characters) return <></>

  return <p>{characters}</p>
}

/* eslint-disable react/prop-types */
const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters
}) => {
  const heroImageURL = `/heroes/${id}.jpg`

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4 ">
            <img src={heroImageURL} className="card-img" alt={superhero} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text"> {alter_ego} </p>

              <CharactersByHero characters={characters} alter_ego={alter_ego} />

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCard
