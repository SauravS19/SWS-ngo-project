
import React from 'react'
import {  AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import star from '../../assets/icons/star.png'



const Foot = () => {
    return (

<div className='flex flex-col flex-wrap w-full h-auto items-center body '>
   <div className='bg-gradient-to-b from-sky-500 via-slate-50 to-slate-50 flex justify-center  w-full h-20 pd-10'>
  <div className='flex items-end text text-3xl italic text-pink-900'>Samarpit Media Society</div>
   </div>
 
      <div className='flex flex-col md:flex-row items-center w-full h-auto gap-10 bg-cover   bg-center p-10'
       style={{backgroundImage:`url(${star})`}}>
    
        <div className='relative rounded-3xl sm:w-full w-full  flex-1 flex bg-opacity-40 bg-blue-400 justify-center h-fit'>
        <div className=' h-fit flex flex-col w-auto  gap-5'>
          <div className='text-left  text-xl md:text-4xl '>Programms</div>
          <div className='relative flex flex-col gap-2 md:gap-5'> 
          <div className='text-left text-sm sm:text-lg italic xl:text-xl'>Yoga Training</div>
          <div className='text-left text-sm sm:text-lg italic xl:text-xl'>Nanhi Muskan</div>
          <div className='text-left text-sm sm:text-lg italic  xl:text-xl'>Mille saath tumhara</div>
          <div className='text-left text-sm sm:text-lg italic xl:text-xl'>Nanhi Muskan</div>
          <div className='text-left text-sm sm:text-lg italic  xl:text-xl'>Mille saath tumhara</div>
          <div className='text-left text-sm sm:text-lg italic xl:text-xl'>Nanhi Muskan</div>
          <div className='text-left text-sm sm:text-lg italic  xl:text-xl'>Mille saath tumhara</div>
          
          </div>
         
        </div></div>
        <div className='relative rounded-3xl sm:w-full w-full  flex-1 flex bg-opacity-40 bg-blue-400 justify-center h-fit'>
        <div className=' h-fit flex flex-col w-auto  gap-5'>
          <div className='text-left  text-xl md:text-4xl '>What we do</div>
          <div className='relative flex flex-col gap-2 md:gap-5'> 
          <div className='text-left text-sm sm:text-lg italic xl:text-xl'>Social Empoverment</div>
          <div className='text-left text-sm sm:text-lg italic xl:text-xl'>Environment Conservation</div>
          <div className='text-left text-sm sm:text-lg italic  xl:text-xl'>Tourism</div>
          </div>
         
        </div></div>
    
        
        <div className='relative rounded-3xl  sm:w-full w-full flex-1 flex  bg-opacity-40 bg-blue-400 justify-center  h-fit '>
        <div className=' h-fit flex flex-col w-auto gap-5'>
          <div className='text-left text-xl md:text-4xl'>Contact Us</div>
          <div className='relative flex flex-col gap-2 md:gap-5'> 
          <div className='text-left text-sm sm:text-lg italic  xl:text-xl'>5343434545</div>
          <div className='text-left text-sm sm:text-lg italic  xl:text-xl'>djhgsjghhad@email.com</div>
          <div className='text-left text-sm sm:text-lg italic  xl:text-xl'>ganesh vihar padampur</div>
          </div>
        
        </div></div>
        <div className='relative rounded-3xl  sm:w-full w-full  flex-1 flex bg-opacity-40 bg-blue-400 justify-center h-fit '>
        <div className=' h-fit flex flex-col w-6/12 items-center '>
          <div className='text-9xl'>SWS</div>
          <div className='text-lg'>Samarpit Ngo hai</div>
          <div className='flex justify-center gap-10 mt-5'>
        <div><AiFillFacebook className='h-10 w-10 scale'></AiFillFacebook></div>
        <div><AiFillLinkedin className='h-10 w-10 scale'></AiFillLinkedin></div>
        <div><AiFillInstagram className='h-10 w-10 scale'></AiFillInstagram></div>
        <div><AiFillYoutube className='h-10 w-10 scale'></AiFillYoutube></div>
      </div>
     
          </div>
         
        </div>
      
       
      </div>
    
</div>
 );
};

export default Foot;