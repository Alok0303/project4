import React from 'react'
import pic1 from './../../public/images/shoe_image.png'
import { FaRegHeart,FaHeart } from "react-icons/fa6";
import { useState } from 'react'
import { useMovieContext } from '../context/moviecontext';


const Moviecard = ({movie}) => {
    const { addtofavorites, removefromfavorites, isfavorite } = useMovieContext()
    const liked = isfavorite(movie.id);
    
const onlike = () =>{
    if(liked){
        removefromfavorites(movie.id)
    }
    else{
        addtofavorites(movie)
    }
}
  return (
    <div >
        <div className='relative mt-[30px]'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className=' h-[350px] bg-black w-[230px] ml-[20px] rounded-t-[20px]'/>
            <div>
                <button className='absolute top-[20px] right-[20px] bg-white h-[30px] w-[30px] flex items-center justify-center rounded-full cursor-pointer transition-transform duration-300' onClick={onlike}>
                    <span className={`transition-transform duration-500 ${liked ? "rotate-y-180" : "rotate-0"}`}>
                        {liked ? (
                        <FaHeart className="text-red-500 text-lg" />   
                        ) : (
                        <FaRegHeart className="text-gray-500 text-lg" /> 
                    )}
                    </span>
                </button>
            </div>
        </div>
        <div className=' bg-gray-800 mt-[-10px] ml-[20px] h-[100px] flex flex-col justify-center'>
            <h1 className='ml-[20px] text-[15px] font-bold text-white'>{movie.title}</h1>
            <h1 className='ml-[20px] text-[10px] text-white'>{movie.release_date?.split("-")[0]}</h1>
        </div>
    </div>
  )
}

export default Moviecard