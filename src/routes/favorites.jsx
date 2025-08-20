import React from 'react'
import { useState } from 'react'
import { useMovieContext } from '../context/moviecontext'
import Moviecard from '../components/moviecard'

const Favorites = () => {
    const { favorites } = useMovieContext()
    const [SerchQuery, setSerchQuery] = useState("")

    const handlesearch = (e) => {
        e.preventDefault();
        setSerchQuery("");
    }

    

    const filteredFavorites = favorites.filter(movie =>
        SerchQuery === "" || movie.title.toLowerCase().includes(SerchQuery.toLowerCase())
    )

    return (
        <div className='bg-gray-600 min-h-screen'>
          { favorites.length >0 && (
            <form onSubmit={handlesearch} className='flex items-center justify-center h-[120px]'>
            <input 
            type="text"
            placeholder='Serch for movies...' 
            value={SerchQuery}
            onChange={(e) => setSerchQuery(e.target.value)}
            className='border-0 w-[400px] bg-gray-400 h-[40px] focus:outline-none focus:ring-0 px-[10px] '
            />
            
            </form>
            
          )}
          {
            favorites.length===0 && (
              <div className='  flex items-center justify-center'>
                <h1 className='text-white font-bold text-[100px]'>No favorites yet</h1>
              </div>
            )
          }
          <div className='grid grid-cols-6 ml-[10px] '>
                {filteredFavorites.map(movie => (
                        <Moviecard movie={movie} key={movie.id} />
                ))}

            </div>
        
    </div>
    )
}

export default Favorites
