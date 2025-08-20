import React from 'react'
import { Link } from 'react-router-dom' 

const Navigation = () => {
  return (
    <nav className='bg-black text-blue-600 flex justify-between h-[60px] items-center'>
        <div>
            <Link className='ml-[100px]' to="/">Movie App</Link>
        </div>
        <div>
            <Link className=' mr-[50px]' to="/">home</Link>
            <Link className=' mr-[100px]' to="/favorites">favorites</Link>
        </div>
    </nav>
  )
}

export default Navigation