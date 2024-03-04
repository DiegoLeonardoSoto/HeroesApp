import { Navbar } from '../../ui/components'
import { Routes, Route } from 'react-router-dom'
import { DcPage, MarvelPage, HomePage, SearchPage, HeroPage } from '../'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />
        </Routes>
      </div>
    </>
  )
}
