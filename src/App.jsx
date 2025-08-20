import { useState } from 'react'
import Home from './routes/home'
import {Routes,Route} from 'react-router-dom'
import Favorites from './routes/favorites'
import Navigation from './components/navigation'
import { MovieProvider } from './context/moviecontext'

function App() {
  

  return (
    
    <MovieProvider>
      <Navigation/>
      <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Favorites' element={<Favorites/>}/>
      </Routes>
    </main>
    </MovieProvider>
  )
}

export default App
