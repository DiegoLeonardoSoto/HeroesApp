import { Routes, Route } from 'react-router-dom'

import { DcPage, MarvelPage, HomePage } from '../heroes'

import { LoginPage } from '../auth'

import { Navbar } from '../ui/components'

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </>
  )
}
