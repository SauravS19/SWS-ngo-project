

import React from 'react'
import {  AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'

import './footer.css'
import fb from '../../assets/links/fb.png';
import instagram from '../../assets/links/instagram.png';
import linkden from '../../assets/links/linkden.png';
import youtube from '../../assets/links/youtube.png';

const Foot = () => {
    return (

<div className='flex flex-col flex-wrap w-full h-auto items-center mainbody'>
   <div className='bg-sky-400  flex justify-center  w-full h-auto pt-2'>
  <div className='flex items-end heading text-4xl md:text-6xl italic text-white'>Samarpit Media Society</div>
   </div>
 
      <div className='flex flex-col md:flex-row items-center w-full bg-gradient-to-b from-sky-400 to-slate-50 
      h-auto gap-4 bg-cover pl-10 pr-10 pt-3'
     >
    
        <div className='relative rounded-3xl sm:w-full w-full  flex-1 flex bg-opacity-40 bg-sky-100 justify-center h-fit'>
        <div className=' h-fit flex flex-col w-auto  gap-2'>
          <div className='text-left  text-xl md:text-4xl '>Programms</div>
          <div className='relative flex flex-col gap-1 '> 
        
          <div className='text-left text-sm sm:text-lg  xl:text-xl'>HomeLens </div>
          <div className='text-left text-sm sm:text-lg xl:text-xl'>Nanhi Chirriya </div>
          <div className='text-left text-sm sm:text-lg xl:text-xl'>Yoga Training</div>
          <div className='text-left text-sm sm:text-lg xl:text-xl'>Nanhi Muskan</div>
          <div className='text-left text-sm sm:text-lg  xl:text-xl'>Kids Fashion Show  </div>
          <div className='text-left text-sm sm:text-lg  xl:text-xl'>Mille saath tumhara</div>
          <div className='text-left text-sm sm:text-lg  xl:text-xl'>Self Defence Training </div>
          <div className='text-left text-sm sm:text-lg xl:text-xl'>Heritage Tour Guide Training</div>
         
          
          
          </div>
         
        </div></div>
        <div className='relative rounded-3xl sm:w-full w-full  flex-1 flex  bg-opacity-25 bg-white backdrop-filter backdrop-blur-lg justify-center h-fit'>
        <div className=' h-fit flex flex-col w-auto  gap-2'>
          <div className='text-left  text-xl md:text-4xl '>What we do</div>
          <div className='relative flex flex-col gap-1 '> 
          <div className='text-left text-sm sm:text-lg  xl:text-xl'>Social Empoverment</div>
          <div className='text-left text-sm sm:text-lg  xl:text-xl'>Environment Conservation</div>
          <div className='text-left text-sm sm:text-lg   xl:text-xl'>Tourism</div>
          
          </div>
         
        </div></div>
    
        
        <div className='relative rounded-3xl  sm:w-full w-full flex-1 flex  bg-opacity-25 bg-white backdrop-filter backdrop-blur-lg justify-center  h-fit '>
        <div className=' h-fit flex flex-col w-auto gap-2'>
          <div className='text-left text-xl md:text-4xl w-9/12 self-center'>Contact Us</div>
          <div className='relative flex flex-col gap-1 w-9/12 self-center'> 
          <div className='text-left text-sm sm:text-lg   xl:text-xl'>Mobile No:8954757925, 8191995014</div>
          <div className='text-left text-sm sm:text-lg   xl:text-xl'>EmailID:samarpitmediasociety@gmail.com</div>
          <div className='text-left text-sm sm:text-lg   xl:text-xl word-break'>Ad:House no 183, Sirmour tea estate marg, Kaulagarh road, Kishen Nagar, 
         Dehradun,Uttarakhand - 248001</div>
          </div>
        
        </div></div>
        
      
       
      </div>
      <div className='relative   w-full  flex-1 flex bg-opacity-100 bg-white backdrop-filter backdrop-blur-lg justify-center h-fit mb-5'>
        <div className=' h-fit flex flex-col w-9/12 items-center '>
          <div className='text-6xl sm:text-8xl '>S M S</div>

          <div className='flex justify-center gap-4 sw:gap-8 md:gap-16 xl:gap-20 mt-2'>
          <div>
            <a href='https://www.facebook.com/profile.php?id=100090550977393' target='_blank' rel='noopener noreferrer'>
              <img src={fb} className='h-8 w-8' alt='facebook' />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkden} className="h-8 w-8" alt="LinkedIn" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/samarpitmedia?igsh=MW91Mm5ramMwYjZzdg==" target="_blank" rel="noopener noreferrer">
              <img src={instagram} className="h-8 w-8" alt="Instagram" />
            </a>
          </div>
          <div>
            <a href="https://youtube.com/@sms-666?si=VftBMQwd8rpymMcn" target="_blank" rel="noopener noreferrer">
              <img src={youtube} className="h-8 w-8" alt="YouTube" />
            </a>
          </div>
      </div>
     
          </div>
         
        </div>
</div>
 );
};

export default Foot;
