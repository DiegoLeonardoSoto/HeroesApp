import { useForm } from '../../hooks/useForm'
import { useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { getHeroByName } from '../helpers'
import HeroCard from '../components/HeroCard'

export const SearchPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)
  const heroes = getHeroByName(q)

  console.log(heroes, q)
  const { searchText, handleInputChange } = useForm({
    searchText: q
  })

  const handleSearchSubmit = (e) => {
    e.preventDefault()

    if (searchText.trim().length <= 1) return

    navigate(`?q=${searchText.toLowerCase().trim()}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              name="searchText"
              className="form-control"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary">Search a hero</div>
          <div className="alert alert-danger">
            No hero with <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  )
}
