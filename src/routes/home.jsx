import React from 'react'
import Moviecard from '../components/moviecard'
import { getPopularMovies,searchMovies } from '../services/api'

import { useState,useEffect } from 'react'

const Home = () => {
    const [SerchQuery, setSerchQuery] = useState("")
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
        try {
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
        } catch (err) {
            console.log(err);
            setError("Failed to load movies...");
        } finally {
            setLoading(false);
        }
        };

        loadPopularMovies();
    }, []);

    const handlesearch = (e) => {
        e.preventDefault();
        setSerchQuery("");
    }
  return (
    <div className='bg-gray-600 '>
        <form onSubmit={handlesearch} className='flex items-center justify-center h-[120px]'>
            <input 
            type="text"
            placeholder='Serch for movies...' 
            value={SerchQuery}
            onChange={(e) => setSerchQuery(e.target.value)}
            className='border-0 w-[400px] bg-gray-400 h-[40px] focus:outline-none focus:ring-0 px-[10px] '
            />
            
        </form>
        <div className='grid grid-cols-6 ml-[10px] '>
            {movies
                .filter(movie => 
                 SerchQuery === "" || movie.title.toLowerCase().includes(SerchQuery.toLowerCase())
                )
                .map(movie => (
                    <Moviecard movie={movie} key={movie.id} />
                ))
            }

        </div>
    </div>
  )
}

export default Home