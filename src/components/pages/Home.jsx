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
import Carousel from './Carousel.jsx'
import image2 from '../pages/img2.jpeg'; 
import social from './empower.png'
import envi from './environment.png'
import tour from './tour-guide.png'
import yoga from './yoga.jpg'
import foot2 from './foot2.jpeg'
import saath from './milesaath.jpg'
import nanhi from './nanhimuskan.jpg'
import img0 from './img0.jpg'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import star from './star.png'

const Home = () => {
  return (

      <div className='Container  flex flex-col w-screen items-center mt-28'>
      <div className='relative flex justify-center w-10/12 h-[40rem]'>
          <div className='crousel relative flex w-full  rounded-xl items-center bg-cover'>
            <Carousel />
            <div className='homedata  w-3/12 p-0'>
              <div className='heading italic text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide font-serif w-full text-white'>
                Empowering<br />
                Communities<br />
                Together
              </div>
              <div className='w-full italic text- text-white'>
                We are dedicated to making a difference in the lives of people through our various initiatives.
              </div>
              <button className='btn-pin'>Learn More</button>
            </div>
          </div>
        </div>



            {/* <=======About us======> */}
        


      <div className='second flex  justify-center w-full h-full mt-20 bg-cover'
       style={{backgroundImage:`url(${blog})`,backgroundPosition:`center`}}>
    
      
          <div className=' h-auto flex flex-col justify-between w-full rounded-xl  bg-transparent '>
               <div className='h-20 w-auto bg-transparent text-6xl lg:pl-32 sm:text-7xl sm:pl-16 md:pl-24 md:text-8xl font-serif '>
               About Us
              </div>
              <div className='h-full mt-10 flex bg-transparent'>
              
               <div className='w-6/12 flex flex-col justify-between relative  bg-transparent'>
                
                <div className='bg-transparent flex justify-center h-full relative w-full text-left  z-10'>{/*pt-12  pl-28*/}
                <div className='w-3/5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
                <p className='italic text-sky-700'>"Protecting nature is not just a choice; it's our responsibility. Together, let's safeguard our planet for a sustainable future."</p><br></br>
                <p>Samarpit Media Society (SMS) stands as a beacon of hope and progress in Uttarakhand, weaving a tapestry of transformative initiatives across environmental conservation, tourism promotion, and social empowerment.</p>
                </div>
                </div>
                <div className='relative bg-transparent bottom-0 flex h- w-full justify-evenly blur-[1.5px]'>
                  <div className=' w-24 rounded-full animate-bounce'>
                   <img src={Blue} className='rounded-full w-full '></img>
                  </div>
                  <div className=' w-20 rounded-full animate-bounce'>
                  <img src={pink} className='rounded-full w-full '></img>
                   </div>
                   <div className=' w-24 rounded-full animate-bounce'>
                    <img src={green} className='rounded-full w-full '></img>
                  </div>
                   <div className=' w-20 rounded-full animate-bounce'>
                  <img src={red} className='rounded-full w-full '></img>
                   </div>
                  <div className=' w-24 rounded-full animate-bounce'>
                  <img src={orange} className='rounded-full w-full '></img>
                  </div>
              

               </div> 
                </div>
                <div className='bg-transparent relative w-6/12 flex h-full flex-col  items-center'>
                   <div className='bg-transparent relative h-full w-3/5'>
                    <img src={img4} className=' w-full h-full rounded-3xl '></img>
                   </div>
                   <div className='slide-left  w-full text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-rose-800  text-center italic pt-5'>~ Transforming lives daily</div>
                </div>
              </div>


              <div className=' h-full mt-5 flex bg-transparent'>
              <div className='bg-transparent relative w-6/12 flex flex-col h-full items-center'>
                   <div className='bg-transparent relative w-3/5 h-full'>
                    <img src={img10} className=' w-full h-full rounded-3xl '></img>
                   </div>
                   <div className='slide-right w-full text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-rose-800 italic text-center pt-5'>~ Together for change</div>
                </div>
                {/* <div className='bg-transparent relative w-6/12 flex flex-col justify-center items-center '>
                <div className='relative bg-transparent w-3/5'>
                <img src={image2}className='w-full h-full rounded-3xl '></img>
                  
                   </div>
                   <div className='bg-transparent w-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center pt-5'>from the Director</div>
                </div> */}
                <div className='w-6/12 flex flex-col justify-between relative  bg-transparent'>
                
                <div className='bg-transparent flex justify-center h-full relative w-full text-left  z-10'>{/*pt-12  pl-28*/}
                <div className='w-3/5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
                <p className='italic text-sky-700'>“The meaning of life is to find your gift. The purpose of life is to give it away.”</p><br></br>
                <p>With unwavering dedication, SMS employs a symphony of creative mediums—from captivating audio-visual productions to soul-stirring musical compositions and vibrant community events—to illuminate minds and ignite change.</p></div>
                </div>
                <div className='relative bg-transparent bottom-0 flex h-32 w-full justify-evenly blur-[1.5px]'>
                  <div className=' w-24 rounded-full animate-bounce'>
                   <img src={Blue} className='rounded-full w-full '></img>
                  </div>
                  <div className=' w-20 rounded-full animate-bounce'>
                  <img src={pink} className='rounded-full w-full '></img>
                   </div>
                   <div className=' w-24 rounded-full animate-bounce'>
                    <img src={green} className='rounded-full w-full '></img>
                  </div>
                   <div className=' w-20 rounded-full animate-bounce'>
                  <img src={red} className='rounded-full w-full '></img>
                   </div>
                  <div className=' w-24 rounded-full animate-bounce'>
                  <img src={orange} className='rounded-full w-full '></img>
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
         <p className='italic font-medium text-violet-900'>“It is not how much we give, but how much love is put in the giving.”<br></br>
~Mother Teresa
</p>
    </div>
     </div>
     <div className='flex flex-col w-full h-auto  pb-14 pr-24 pl-24'>
      <div className='self-end h-20 bg-transparentw-auto  text-6xl sm:text-7xl md:text-8xl font-serif'>
        What we do
      </div>
      <div className='w-full  h-auto  mt-10 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  text-right'>
                 
        
        <p>Mission: Samarpit Media Society (SMS) strives to foster an enlightened and responsible society by addressing social, environmental, and cultural challenges through creative initiatives, raising awareness, inspiring action, and empowering communities.</p><br></br>
     <p>Vision: SMS envisions a future where Uttarakhand thrives as a model of sustainable progress, achieved through inclusive development, community empowerment, and global inspiration, paving the way for a brighter tomorrow for all.
</p>
      </div>
      <div className='flex flex-col md:flex-row w-auto h-auto gap-x-24 md:justify-center items-center gap-y-7   mt-10 '>

        <div className='bg-green-500 relative rounded-3xl flex-1 md:w-auto w-64 md:h-max boxes'>
        <div className='blockglow flex  h-auto md:h-80 md:w-auto w-64 flex-col items-center'>
        <div className='h-4/5 pt-8'>
          <img src={envi}className='h-full'></img>
          </div>
          <div className='text-center  text-white text-3xl'>Environment Conservation</div>
        </div>
        </div>
        
        <div className='bg-orange-500 relative rounded-3xl flex-1 md:w-auto w-64 md:h-max boxes'>
        <div className='blockglow flex   h-auto md:h-80 md:w-auto w-64 flex-col items-center'>
        <div className='h-4/5 pt-8'>
          <img src={social}className='h-full '></img>
          </div>
          <div className='text-center  text-white text-3xl'>Social Empowerment</div>
        </div>
        </div>
        <div className='bg-blue-500 relative rounded-3xl flex-1 md:w-auto w-64 md:h-max  boxes'>
        <div className='blockglow flex  h-auto md:h-80 md:w-auto w-64 flex-col items-center'>
        <div className='h-4/5 pt-8'>
        <img src={tour}className='h-full'></img>
          </div>
          <div className='text-center  text-white text-3xl '>Tourism</div>
        </div>
        </div>
       
      </div>
     </div>
</div>


{/* // <///////////////////////////////////////////////////////> */}
 {/* <div className='flex flex-col w-full h-auto mt-20 pb-10 px-40 bg-cover gap-5 '
       style={{backgroundImage:`url(${blob})`,backgroundPosition:`center`}}> */}
    <div className='flex flex-col w-full h-auto mt-20 pb-10 px-32 md:justify-center  bg-cover gap-10 '
       style={{backgroundImage:`url(${blob})`,backgroundPosition:`left`}}>
      <div className='h-fit w-auto  text-6xl sm:text-7xl md:text-8xl text-center font-serif  md:w-1/4'>
        Programms
      </div> 
      <div className="card bg-yellow-100 flex  flex-col md:flex-row w-auto md:rounded-3xl md:flex-1 md:ml-0  lg:ml-1 xl:ml-14 md:mr-4  lg:mr-52 xl:mr-96">
        <div className='h-auto w-full md:w-1/3'>
          <img src={nanhi} className='h-full w-full rounded-3xl' alt="Program 1"></img>
        </div>
        <div className='flex flex-col  md:text-center md:h-40  w-full'>
        <div className='md:pb-6
          h-full w-full flex  flex-wrap sw:overflow-y-scroll overflow-x-hidden'>
          <p className='text-xl text-center  w-full'>Nanhi Muskaan - 3rd Dec 2012</p> 
           <br></br>
The program organized for physically and mentally disabled children from 13 districts of Uttarakhand sounds both heartwarming and impactful. Providing them with a platform aimed to integrate these often-neglected children into the broader societal fabric.
Beginning with a visit to an ashram in Haridwar, the children participate in the Holy Ganga Aarti, a deeply spiritual and culturally significant experience. This likely provided them not only with a sense of belonging but also a chance to engage with their spirituality in a meaningful way.

          </div>
          <button className='btn-pin3 self-end'>Know More</button>
        </div>
      </div>
      <div className="card bg-yellow-100 flex flex-col md:flex-row md:rounded-3xl md:flex-1 md:ml-0  lg:ml-16 xl:ml-52 md:mr-4  
      lg:mr-24 xl:mr-52
      ">
        <div className='h-auto w-full md:w-1/3'>
          <img src={saath} className='h-full w-full rounded-3xl' alt="Program 2"></img>
        </div>
        <div className='flex flex-col  md:text-center  md:h-40  w-full'>
        <div className='md:pb-6
          h-full w-full flex  flex-wrap sw:overflow-y-scroll overflow-x-hidden'>
            <p className='text-xl text-center  w-full'>MILE SATH TUMAHARA -  30th Sep 2012</p> 
           <br></br>
           The event "Mile Sath Tumahara" was a heartwarming showcase of talent and inclusivity, bringing together individuals from various marginalized groups in society. Organized by your society, the event aimed to provide a platform for disabled, differently-abled, and neglected individuals to showcase their talents in music and dance.
Over two months, these selected participants received rigorous training in various art forms such as dance, song, drama, and even a fashion show. This training not only honed their artistic skills but also served as a form of empowerment and rehabilitation.


          </div>
          <button className='btn-pin3 self-end'>Know More</button>
        </div>
      </div>
      <div className="card bg-yellow-100 flex flex-col md:flex-row  md:rounded-3xl md:flex-1  md:ml-0  lg:ml-52 xl:ml-96">
        <div className='h-auto w-full md:w-1/3'>
          <img src={yoga} className='h-full w-full rounded-3xl' alt="Program 3"></img>
        </div>
        <div className='flex flex-col  md:text-center  md:h-40  w-full'>
          <div className='md:pb-6
          h-full w-full flex  flex-wrap sw:overflow-y-scroll overflow-x-hidden'>
           <p className='text-xl text-center  w-full'>Yoga Training Camp - 19th Feb 2014</p> 
           <br></br>
          The week-long Yoga Training Programme organized by Samarpit Media Society at Max Super Speciality Hospital was a commendable endeavour aimed at nurturing holistic well-being among healthcare professionals. By seamlessly integrating theory with practical sessions, the initiative empowered doctors and nurses with invaluable tools to bolster their physical and mental resilience.

          </div>
          <button className='btn-pin3 self-end'>Know More</button>
        </div>
      </div>
    </div>   
  

  <div className='flex flex-col justify-center w-full  pt-20 gap-10 bg-cover z-10'
        style={{backgroundImage:`url(${wave2})`,backgroundPosition:`center`}}>
       <div className='h-20 w-auto text-6xl sm:text-7xl md:text-8xl font-serif pl-28 pb-28'>Gallery</div>
       <div className='flex w-full h-40 md:h-40 lg:h-52 justify-between gap-2 md:gap-4 mt-10 px-20 '>

       <div className=' bg-white relative rounded-3xl h-auto w-20 flex-1 boxes'>
       <div className='blockglow h-full '>
        <img src={img11}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
      <div className=' bg-white relative rounded-3xl h-auto w-auto flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={img10}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
      <div className=' bg-white relative rounded-3xl h-auto flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={img9}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
      <div className=' bg-white relative rounded-3xl h-auto flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={img8}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
    
     </div>



     <div className='flex w-full h-40 md:h-40 lg:h-52 justify-between gap-3 md:gap-5 mt-10 px-20 '>

<div className=' bg-white relative rounded-3xl h-auto w-20 flex-1 boxes'>
<div className='blockglow h-full '>
 <img src={img7}className='w-full h-full rounded-3xl '></img>
</div>
</div>
<div className=' bg-white relative rounded-3xl h-auto w-auto flex-1 boxes'>
<div className='blockglow h-full'>
 <img src={img6}className='w-full h-full rounded-3xl '></img>
</div>
</div>
<div className=' bg-white relative rounded-3xl h-auto flex-1 boxes'>
<div className='blockglow h-full'>
 <img src={img5}className='w-full h-full rounded-3xl '></img>
</div>
</div>
<div className=' bg-white relative rounded-3xl h-auto flex-1 boxes'>
<div className='blockglow h-full'>
 <img src={img4}className='w-full h-full rounded-3xl '></img>
</div>
</div>

</div>
  <div className='flex w-full h-40 md:h-40 lg:h-52 justify-between gap-3 md:gap-5 mt-10 px-20 '>

<div className=' bg-white relative rounded-3xl h-auto w-20 flex-1 boxes'>
<div className='blockglow h-full '>
 <img src={img3}className='w-full h-full rounded-3xl '></img>
</div>
</div>
<div className=' bg-white relative rounded-3xl h-auto w-auto flex-1 boxes'>
<div className='blockglow h-full'>
 <img src={img2}className='w-full h-full rounded-3xl '></img>
</div>
</div>
<div className=' bg-white relative rounded-3xl h-auto flex-1 boxes'>
<div className='blockglow h-full'>
 <img src={img1}className='w-full h-full rounded-3xl '></img>
</div>
</div>
<div className=' bg-white relative rounded-3xl h-auto flex-1 boxes'>
<div className='blockglow h-full'>
 <img src={img0}className='w-full h-full rounded-3xl '></img>
</div>
</div>

</div>
     <div className=' relative bg-transparent flex h-24 w-full justify-evenly  blur-[1.5px] -z-10'>
                  <div className=' w-24 rounded-full animate-bounce'>
                   <img src={Blue} className='rounded-full w-full '></img>
                  </div>
                  <div className=' w-20 rounded-full animate-bounce'>
                  <img src={pink} className='rounded-full w-full '></img>
                   </div>
                   <div className=' w-24 rounded-full animate-bounce'>
                    <img src={green} className='rounded-full w-full '></img>
                  </div>
                   <div className=' w-20 rounded-full animate-bounce'>
                  <img src={red} className='rounded-full w-full '></img>
                   </div>
                  <div className=' w-24 rounded-full animate-bounce'>
                  <img src={orange} className='rounded-full w-full '></img>
                  </div>
                   <div className=' w-20 rounded-full animate-bounce'>
                 <img src={Blue} className='rounded-full w-full '></img>
                  </div>
                  <div className=' w-24 rounded-full animate-bounce'>
                   <img src={red} className='rounded-full w-full '></img>
                  </div>
                  <div className=' w-20 rounded-full animate-bounce'>
                  <img src={pink} className='rounded-full w-full '></img>
                   </div>
                   <div className=' w-24 rounded-full animate-bounce'>
                    <img src={green} className='rounded-full w-full '></img>
                  </div>
                   <div className=' w-20 rounded-full animate-bounce'>
                  <img src={red} className='rounded-full w-full '></img>
                   </div>
                  <div className=' w-24 rounded-full animate-bounce'>
                  <img src={orange} className='rounded-full w-full '></img>
                  </div>
                   <div className=' w-20 rounded-full animate-bounce'>
                 <img src={Blue} className='rounded-full w-full '></img>
                  </div>

               </div>
       
</div>  

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





</div>

    
   
  )
}

export default Home
