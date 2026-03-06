import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import MapPage from '../page/MapPage'
import FavoritesPage from '../page/FavoritesPage'
import AboutPage from '../page/AboutPage'
import Layout from '../components/Latout'
import { FavoritesPrevider } from '../contexts/FavoritesContext'

const App = () => {
  return (
    <FavoritesPrevider>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Navigate to='/map' replace />} />
          <Route path='/map' element={<MapPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Route>
        <Route path='*' element={<Navigate to='/map' replace />} />
      </Routes>
    </FavoritesPrevider>
  )
}

export default App