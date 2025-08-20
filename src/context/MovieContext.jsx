import { useState,useEffect,createContext,useContext, Children } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setfavorites] = useState([])

    useEffect(()=> {
        const storedfav = localStorage.getItem("favorites")

        if(storedfav) setfavorites(JSON.parse(storedfav))
    },[])

    useEffect(()=> {
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])

    const addtofavorites = (movie) => {
        setfavorites(prev => [...prev,movie])
    }

    const removefromfavorites = (movieid) => {
        setfavorites(prev => prev.filter(movie => movie.id !== movieid))
    }

    const isfavorite = (movieid) => {
        return favorites.some(movie => movie.id === movieid)
    }

    const value = {
        favorites,
        addtofavorites,
        removefromfavorites,
        isfavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}