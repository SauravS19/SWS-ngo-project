import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="fixed -[999] w-full px-20 py-1.5 flex justify-between items-center z-50 bg-white">
       <div className='logo'>
      <div className='font-semibold uppercase text-5xl'>SWS</div>
       </div>
       <div className="links flex gap-10">
            <Link className='text-md capitalize font-semibold' to={"/home"}>Home</Link>
            <Link className='text-md capitalize font-semibold' to={"/about"}>About us</Link>
            <Link className='text-md capitalize font-semibold' to={"/blogs"}>Blogs</Link>
            <Link className='text-md capitalize font-semibold' to={"/events"}>Events</Link>
            <Link className='text-md capitalize font-semibold' to={"/contact"}>contact</Link>
       </div>
    </div>
  )
}

export default Navbar;