// export default Navbar;
import React, { useState } from 'react';
import {  AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const  Navbar = ()=> {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const showSidebar = () => {
    setSidebarOpen(true);
  };

  const hideSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className='flex fixed top-0 w-full justify-center bg-white shadow-md z-50'>
    <div className='w-36 h-auto bg-gray-500'></div>
      <div className=" flex flex-col items-center top-0 w-9/12 bg-white shadow-md ">
 
    <div className='flex  flex-wrap justify-end w-full items-center gap-10  mt-2'>
     <div className='md:block hidden'><AiFillFacebook className='h-8 w-8 scale '></AiFillFacebook></div>
     <div className='md:block hidden'><AiFillLinkedin className='h-8 w-8 scale'></AiFillLinkedin></div>
     <div className='md:block hidden'><AiFillInstagram className='h-8 w-8 scale'></AiFillInstagram></div>
     <div className='md:block hidden'><AiFillYoutube className='h-8 w-8 scale'></AiFillYoutube></div>
     <div className='showSidebar md:hidden block'>
     <li className="menu-button" onClick={showSidebar}>
       <a href="#" className="px-4 py-2 text-black">
         <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
           <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>
         </svg>
       </a>
     </li>
     </div>
   </div>

   {/* Render the sidebar only on screens larger than the phone size */}
   <ul className="hidden md:flex w-full h-12 justify-end items-center">
     <li className="mr-auto"></li>
     <li><a href="#" className="px-4 py-2 text-black">Home</a></li>
     <li><a href="#" className="px-4 py-2 text-black">About</a></li>
     <li><a href="#" className="px-4 py-2 text-black">Events</a></li>
     <li><a href="#" className="px-4 py-2 text-black">Gallery</a></li>
     <li><a href="#" className="pl-4 py-2 text-black">Contact</a></li>
   
   </ul>
   {/* Render the sidebar on phone-sized screens */}
   <ul className={sidebarOpen ? "flex flex-col h-screen w-64 bg-opacity-25 bg-white backdrop-filter backdrop-blur-lg fixed top-0 right-0 z-20 " : "hidden"}>
     <li className="w-full">
       <a href="#" className="px-4 py-2 text-black" onClick={hideSidebar}>
         <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
           <path d="M249 849l-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
         </svg>
       </a>
     </li>
     <div className='px-4 flex mb-10 gap-5'><div><AiFillFacebook className='h-8 w-8 scale '></AiFillFacebook></div>
     <div><AiFillLinkedin className='h-8 w-8 scale'></AiFillLinkedin></div>
     <div><AiFillInstagram className='h-8 w-8 scale'></AiFillInstagram></div>
     <div><AiFillYoutube className='h-8 w-8 scale'></AiFillYoutube></div></div>
     <li><a href="#" className="px-4 py-2 text-black">Home</a></li>
     <li><a href="#" className="px-4 py-2 text-black">About</a></li>
     <li><a href="#" className="px-4 py-2 text-black">Events</a></li>
     <li><a href="#" className="px-4 py-2 text-black">Gallery</a></li>
     <li><a href="#" className="px-4 py-2 text-black">Contact</a></li>
   </ul>
 </div>
    </div>
  );
}

export default Navbar;