import React from 'react'
import {  AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import './home.css'
import Blue from './bluebubble.png'
import pink from './pinkbubble.png'
import green from './greenbubble.png'
import red from './redbubble.png'
import orange from './orangebubble.png'
import blog from './blob3.jpeg'
import blob from './blob.jpeg'
import wave from './slide.png'
import wave2 from './slide2.png'
import Carousel from './Crousel.jsx'
import image2 from '../pages/img2.jpeg'; 
import social from './empower.png'
import envi from './environment.png'
import tour from './tour-guide.png'
import contactbg from './contact.png'
import waves3 from './waves.jpg'
import foot from './foot.png'
import foot2 from './foot2.png'


const Home = () => {
  return (

      <div className='Container  flex flex-col w-screen items-center'>
      <div className='relative flex justify-center w-10/12 h-[48rem]'>
          <div className='crousel bg-gray-500 relative flex w-full rounded-xl items-center bg-cover'>
            <Carousel />
            <div className='homedata  w-3/12 p-0'>
              <div className='heading  text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide font-serif w-full text-white'>
                Empowering<br />
                Communities<br />
                Together
              </div>
              <div className='w-full italic text-white'>
                We are dedicated to making a difference in the lives of people through our various initiatives.
              </div>
              <button className='btn-pin'>Learn More</button>
            </div>
          </div>
        </div>



            {/* <=======About us======> */}
        


      <div className=' flex  justify-center w-full h-full mt-20 bg-cover'
       style={{backgroundImage:`url(${blog})`,backgroundPosition:`center`}}>
    
      
          <div className=' h-auto flex flex-col justify-between w-full rounded-xl  bg-transparent '>
               <div className='h-20 w-auto bg-transparent text-6xl lg:pl-32 sm:text-7xl sm:pl-16 md:pl-24 md:text-8xl font-serif '>
               About Us
              </div>
              <div className='h-full mt-10 flex bg-transparent'>
              
               <div className='w-6/12 flex flex-col justify-between relative  bg-transparent'>
                
                <div className='bg-transparent flex justify-center h-full relative w-full text-left  z-10'>{/*pt-12  pl-28*/}
                <div className='w-3/5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>samrapit ngo is good 
                 samrapit ngo is good
                 samrapit ngo is good
                  samrapit ngo is good

                   samrapit ngo is good
                    samrapit ngo is good
                    v
                     samrapit ngo is good</div>
                </div>
                <div className='relative bg-transparent bottom-0 flex h- w-full justify-evenly blur-[1.5px]'>
                  <div className=' w-20 rounded-full animate-bounce'>
                   <img src={Blue} className='rounded-full w-full '></img>
                  </div>
                  <div className=' w-24 rounded-full animate-bounce'>
                  <img src={pink} className='rounded-full w-full '></img>
                   </div>
                   <div className=' w-20 rounded-full animate-bounce'>
                    <img src={green} className='rounded-full w-full '></img>
                  </div>
                   <div className=' w-24 rounded-full animate-bounce'>
                  <img src={red} className='rounded-full w-full '></img>
                   </div>
                  <div className=' w-20 rounded-full animate-bounce'>
                  <img src={orange} className='rounded-full w-full '></img>
                  </div>
                   <div className=' w-28 rounded-full animate-bounce'>
                 <img src={Blue} className='rounded-full w-full '></img>
                  </div>

               </div> 
                </div>
                <div className='bg-transparent relative w-6/12 flex h-full flex-col  items-center'>
                   <div className='bg-transparent relative h-full w-3/5'>
                    <img src={image2} className=' w-full h-full rounded-3xl '></img>
                   </div>
                   <div className=' w-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center pt-5'>from the Director</div>
                </div>
              </div>


              <div className=' h-full mt-5 flex bg-transparent'>
              <div className='bg-transparent relative w-6/12 flex flex-col h-full items-center'>
                   <div className='bg-transparent relative w-3/5 h-full'>
                    <img src={image2} className=' w-full h-full rounded-3xl '></img>
                   </div>
                   <div className=' w-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center pt-5'>from the Director</div>
                </div>
                {/* <div className='bg-transparent relative w-6/12 flex flex-col justify-center items-center '>
                <div className='relative bg-transparent w-3/5'>
                <img src={image2}className='w-full h-full rounded-3xl '></img>
                  
                   </div>
                   <div className='bg-transparent w-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center pt-5'>from the Director</div>
                </div> */}
                <div className='w-6/12 flex flex-col justify-between relative  bg-transparent'>
                
                <div className='bg-transparent flex justify-center h-full relative w-full text-left  z-10'>{/*pt-12  pl-28*/}
                <div className='w-3/5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>samrapit ngo is good 
                 samrapit ngo is good
                 samrapit ngo is good
                  samrapit ngo is good

                   samrapit ngo is good
                    samrapit ngo is good
                    v
                     samrapit ngo is good</div>
                </div>
                <div className='relative bg-transparent bottom-0 flex h-32 w-full justify-evenly blur-[1.5px]'>
                  <div className=' w-20 rounded-full animate-bounce'>
                   <img src={Blue} className='rounded-full w-full '></img>
                  </div>
                  <div className=' w-24 rounded-full animate-bounce'>
                  <img src={pink} className='rounded-full w-full '></img>
                   </div>
                   <div className=' w-20 rounded-full animate-bounce'>
                    <img src={green} className='rounded-full w-full '></img>
                  </div>
                   <div className=' w-24 rounded-full animate-bounce'>
                  <img src={red} className='rounded-full w-full '></img>
                   </div>
                  <div className=' w-20 rounded-full animate-bounce'>
                  <img src={orange} className='rounded-full w-full '></img>
                  </div>
                   <div className=' w-28 rounded-full animate-bounce'>
                 <img src={Blue} className='rounded-full w-full '></img>
                  </div>

               </div> 
                </div>
                
              </div>
          </div>
      </div>
<div className='text1 flex flex-col gap-5'>
     <div className='text1 flex justify-center w-full h-28 sm:h-32 md:h-40 lg:h-48 xl:h-56 bg-top bg-cover'
      style={{backgroundImage:`url(${wave})`}} >
    <div className='slide-bottom relative w-full text-center text-xl self-end bg-transparent'>
           sky is blue hahahaha
    </div>
     </div>
     <div className='flex flex-col w-full h-auto  pb-14 pr-24 pl-24'>
      <div className='self-end h-20 bg-transparentw-auto  text-6xl sm:text-7xl md:text-8xl font-serif'>
        What we do
      </div>
      <div className='w-full  h-auto  mt-10 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  text-right'>
                 
                  dldjlk;djlksjdkjdljasdjlsajdlksajdlksajd
                  dsdlkkjdlkjdlkjsjsldjlsjdlkjsdljlkdjlksajdsa
                  dsalkdjsalkdjlksajdlksajdsakldjlksajdlksajdlksajdkl
                  dlsdjlsakdjlksajdlksajkdasjdljsalkdjaslkdjlask
                  hjhdljhdljhdkdkjhdkshkdhkjdh
                  dslkdjljdlksajdjslkdjljd
                  sdljdlkjdlkjkldjlkjjs'dljsa'lkdjlskaj
                  dldjlk;djlksjdkjdljasdjlsajdlksajdlksajd
                  dsdlkkjdlkjdlkjsjsldjlsjdlkjsdljlkdjlksajdsa
                  dsalkdjsalkdjlksajdlksajdsakldjlksajdlksajdlksajdkl
      </div>
      <div className='flex flex-col md:flex-row w-auto h-auto gap-x-24 md:justify-center items-center gap-y-7   mt-10 '>

        <div className='bg-green-500 relative rounded-3xl flex-1 md:w-auto w-64 md:h-max boxes'>
        <div className='blockglow flex  h-64 md:h-auto md:w-auto w-64 flex-col items-center'>
        <div className='h-3/5 pt-8'>
          <img src={envi}className='h-full '></img>
          </div>
          <div className='text-center  text-white '>Social Empowerment</div>
        </div>
        </div>
        
        <div className='bg-orange-500 relative rounded-3xl flex-1 md:w-auto w-64 md:h-max boxes'>
        <div className='blockglow flex  h-64 md:h-auto md:w-auto w-64 flex-col items-center'>
        <div className='h-3/5 pt-8'>
          <img src={social}className='h-full '></img>
          </div>
          <div className='text-center  text-white '>Social Empowerment</div>
        </div>
        </div>
        <div className='bg-blue-500 relative rounded-3xl flex-1 md:w-auto w-64 md:h-max  boxes'>
        <div className='blockglow flex  h-64 md:h-auto md:w-auto w-64 flex-col items-center'>
        <div className='h-3/5 pt-8'>
        <img src={tour}className='h-full'></img>
          </div>
          <div className='text-center  text-white '>Social Empowerment</div>
        </div>
        </div>
       
      </div>
     </div>
</div>


{/* // <///////////////////////////////////////////////////////> */}
 {/* <div className='flex flex-col w-full h-auto mt-20 pb-10 px-40 bg-cover gap-5 '
       style={{backgroundImage:`url(${blob})`,backgroundPosition:`center`}}> */}
       
  

  <div className='flex flex-col justify-center w-full  pt-20  bg-cover z-10'
        style={{backgroundImage:`url(${wave2})`,backgroundPosition:`center`}}>
       <div className='h-20 w-auto text-6xl sm:text-7xl md:text-8xl font-serif pl-28 pb-28'>Gallery</div>
       <div className='flex w-full h-40 md:h-40 lg:h-52 justify-between gap-3 md:gap-5 mt-10 px-20 '>

       <div className=' bg-white relative rounded-3xl h-auto w-20 flex-1 boxes'>
       <div className='blockglow h-full '>
        <img src={image2}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
      <div className=' bg-white relative rounded-3xl h-auto w-auto flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={image2}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
      <div className=' bg-white relative rounded-3xl h-auto flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={image2}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
      <div className=' bg-white relative rounded-3xl h-auto flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={image2}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
    
     </div>



     <div className='flex w-full h-40 md:h-40 lg:h-52 justify-between gap-3 md:gap-5 mt-10 px-20 '>

<div className=' bg-white relative rounded-3xl h-auto w-20 flex-1 boxes'>
<div className='blockglow h-full '>
 <img src={image2}className='w-full h-full rounded-3xl '></img>
</div>
</div>
<div className=' bg-white relative rounded-3xl h-auto w-auto flex-1 boxes'>
<div className='blockglow h-full'>
 <img src={image2}className='w-full h-full rounded-3xl '></img>
</div>
</div>
<div className=' bg-white relative rounded-3xl h-auto flex-1 boxes'>
<div className='blockglow h-full'>
 <img src={image2}className='w-full h-full rounded-3xl '></img>
</div>
</div>
<div className=' bg-white relative rounded-3xl h-auto flex-1 boxes'>
<div className='blockglow h-full'>
 <img src={image2}className='w-full h-full rounded-3xl '></img>
</div>
</div>

</div>
  <div className='flex w-full h-40 md:h-40 lg:h-52 justify-between gap-3 md:gap-5 mt-10 px-20 '>

<div className=' bg-white relative rounded-3xl h-auto w-20 flex-1 boxes'>
<div className='blockglow h-full '>
 <img src={image2}className='w-full h-full rounded-3xl '></img>
</div>
</div>
<div className=' bg-white relative rounded-3xl h-auto w-auto flex-1 boxes'>
<div className='blockglow h-full'>
 <img src={image2}className='w-full h-full rounded-3xl '></img>
</div>
</div>
<div className=' bg-white relative rounded-3xl h-auto flex-1 boxes'>
<div className='blockglow h-full'>
 <img src={image2}className='w-full h-full rounded-3xl '></img>
</div>
</div>
<div className=' bg-white relative rounded-3xl h-auto flex-1 boxes'>
<div className='blockglow h-full'>
 <img src={image2}className='w-full h-full rounded-3xl '></img>
</div>
</div>

</div>
     <div className=' relative bg-transparent flex h-24 w-full justify-evenly  blur-[1.5px] -z-10'>
                  <div className=' w-28 rounded-full animate-bounce'>
                   <img src={Blue} className='rounded-full w-full '></img>
                  </div>
                  <div className=' w-24 rounded-full animate-bounce'>
                  <img src={pink} className='rounded-full w-full '></img>
                   </div>
                   <div className=' w-24 rounded-full animate-bounce'>
                    <img src={green} className='rounded-full w-full '></img>
                  </div>
                   <div className=' w-28 rounded-full animate-bounce'>
                  <img src={red} className='rounded-full w-full '></img>
                   </div>
                  <div className=' w-24 rounded-full animate-bounce'>
                  <img src={orange} className='rounded-full w-full '></img>
                  </div>
                   <div className=' w-28 rounded-full animate-bounce'>
                 <img src={Blue} className='rounded-full w-full '></img>
                  </div>
                  <div className=' w-24 rounded-full animate-bounce'>
                   <img src={red} className='rounded-full w-full '></img>
                  </div>
                  <div className=' w-28 rounded-full animate-bounce'>
                  <img src={pink} className='rounded-full w-full '></img>
                   </div>
                   <div className=' w-24 rounded-full animate-bounce'>
                    <img src={green} className='rounded-full w-full '></img>
                  </div>
                   <div className=' w-24 rounded-full animate-bounce'>
                  <img src={red} className='rounded-full w-full '></img>
                   </div>
                  <div className=' w-28 rounded-full animate-bounce'>
                  <img src={orange} className='rounded-full w-full '></img>
                  </div>
                   <div className=' w-24 rounded-full animate-bounce'>
                 <img src={Blue} className='rounded-full w-full '></img>
                  </div>

               </div>
       
</div>  

<div className='flex flex-col flex-wrap w-full h-auto  bg-cover bg-center gap-5'
       style={{backgroundImage:`url(${foot})`}}>
 
      <div className='flex flex-col md:flex-row items-center w-full h-auto justify-between '>
        
      <div className='relative rounded-3xl w-3/12 flex-1 flex justify-center h-fit '>
        <div className=' h-fit flex flex-col w-6/12 py-7 items-left gap-5'>
          <div className='text-left  text-3xl md:text-5xl '>Programs</div>
          <div className='relative flex flex-col gap-2 md:gap-5'> 
          <div className='text-left text-lg sm:text-xl   xl:text-2xl'>Yoga</div>
          <div className='text-left text-lg sm:text-xl   xl:text-2xl'>Dance</div>
          <div className='text-left text-lg sm:text-xl   xl:text-2xl'>singing</div>
          </div>
         
        </div></div>
        <div className='relative rounded-3xl w-3/12 flex-1 flex justify-center h-fit '>
        <div className=' h-fit flex flex-col w-6/12 py-7 items-left gap-5'>
          <div className='text-left text-3xl md:text-5xl '>what we do</div>
          <div className='relative flex flex-col gap-2 md:gap-5'> 
          <div className='text-left text-lg sm:text-xl   xl:text-2xl'>tourism</div>
          <div className='text-left text-lg sm:text-xl   xl:text-2xl'>social empowerment</div>
          <div className='text-left text-lg sm:text-xl   xl:text-2xl'>environment conserve</div>
          </div>
         
        </div></div>
        <div className='relative rounded-3xl w-3/12 flex-1 flex justify-center h-fit '>
        <div className=' h-fit flex flex-col w-6/12 py-7 items-left gap-5'>
          <div className='text-left text-3xl md:text-5xl'>Contact Us</div>
          <div className='relative flex flex-col gap-2 md:gap-5'> 
          <div className='text-left text-lg sm:text-xl   xl:text-2xl'>5343434545</div>
          <div className='text-left text-lg sm:text-xl   xl:text-2xl'>djhgsjghhad@email.com</div>
          <div className='text-left text-lg sm:text-xl   xl:text-2xl'>ganesh vihar padampur</div>
          </div>
         
        </div></div>
       
      </div>
      <div className='flex  flex-wrap justify-center gap-40 mt-20'>
        <div><AiFillFacebook className='h-16 w-16 scale'></AiFillFacebook></div>
        <div><AiFillLinkedin className='h-16 w-16 scale'></AiFillLinkedin></div>
        <div><AiFillInstagram className='h-16 w-16 scale'></AiFillInstagram></div>
        <div><AiFillYoutube className='h-16 w-16 scale'></AiFillYoutube></div>
      </div>
     
</div>





</div>

    
   
  )
}

export default Home
