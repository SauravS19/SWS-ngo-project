import React from 'react'
import Foot from './footer';
const Contact = () => {
  return (
    <div className='main h-auto w-screen mt-20   flex flex-col gap-20'>
     <div className='map w-11/12 h-96 mt-20 bg-blue-400 rounded-xl self-center'></div>
     <div className='h-[500px] w-7/12 bg-sky-300  relative rounded-xl ml-48 flex flex-col mb-24 border-4 border-sky-400 border-double'>
    <div className='w-auto h-auto self-end text-7xl  pr-10 text-white pt-5'>Contact Us</div>
    <div className='text-3xl italic text-white w-7/12 bg-blue-600 h-auto flex
    flex-col justify-center'>d</div>
    
    <div></div>
      <div className='h-96 w-3/5 bg-opacity-40 bg-green-400 backdrop-filter backdrop-blur-lg top-2/4 -right-1/3 absolute rounded-xl border-4 border-sky-400 border-double'></div>
     </div>
    
     <Foot></Foot>
    </div>
  )
}

export default Contact
