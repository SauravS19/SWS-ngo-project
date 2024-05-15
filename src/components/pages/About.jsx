import React from 'react';
import Carousel from './Crousel';
import image2 from '../pages/img2.jpeg'; 

const About = () => {
  return (


    // main div
    <div className='Container flex  flex-col w-screen items-center' >
      <Carousel></Carousel>
      <div className='relative flex justify-center w-10/12 h-[48rem]'>
          <div className='crousel bg-gray-500 relative flex w-full rounded-xl items-center bg-cover'>
            <Carousel />
          </div>
        </div>

      {/* About us  div*/}
      <div className='second flex  justify-center w-full h-full mt-20 bg-cover'>
    
      
          <div className=' h-auto flex flex-col justify-between w-full rounded-xl  bg-transparent '>
               <div className='h-20 w-auto bg-transparent text-6xl lg:pl-32 sm:text-7xl sm:pl-16 md:pl-24 md:text-8xl font-serif '>
               About Us
              </div>
              {/* right */}
              <div className='h-full mt-10 flex bg-transparent'>
              
               <div className='w-6/12 flex flex-col justify-between relative  bg-transparent'>
                
                <div className='bg-transparent flex justify-center h-full relative w-full text-left  z-10'>{/pt-12  pl-28/}
                  <div className='w-3/5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
                      fermentum velit, nec dictum lorem. Vestibulum ante ipsum primis in
                      faucibus orci luctus et ultrices posuere cubilia curae; Nullam in sem
                      nisi. Pellentesque vulputate nisl ut lectus rhoncus, non ultrices
                      nulla laoreet. Nulla nec purus euismod, vehicula ex a, consequat
                      libero. Duis nec tortor nec magna tincidunt facilisis sit amet vel
                      purus.
                  </div>
                </div>
                </div>
                <div className='bg-transparent relative w-6/12 flex h-full flex-col  items-center'>
                   <div className='bg-transparent relative h-full w-3/5'>
                    <img src={image2} className=' w-full h-full rounded-3xl '></img>
                   </div>
                   <div className='slide-left w-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center pt-5'>from the Director</div>
                </div>
              </div>

              {/* left */}
              <div className=' h-full mt-5 flex bg-transparent'>
              <div className='bg-transparent relative w-6/12 flex flex-col h-full items-center'>
                   <div className='bg-transparent relative w-3/5 h-full'>
                    <img src={image2} className=' w-full h-full rounded-3xl '></img>
                   </div>
                   <div className=' slide-right w-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center pt-5'>from the Director</div>
                </div>
                <div className='w-6/12 flex flex-col justify-between relative  bg-transparent'>
                
                <div className='bg-transparent flex justify-center h-full relative w-full text-left  z-10'>{/pt-12  pl-28/}
                  <div className='w-3/5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
                      Integer pretium lorem et mi bibendum, in faucibus ligula commodo. Sed
                      dictum, purus at tempus lobortis, eros elit sagittis ligula, eget
                      consectetur risus nisi id erat. Vivamus ultricies sollicitudin
                      scelerisque. Aenean at urna et ligula auctor suscipit. Nullam
                      dignissim nulla non arcu efficitur, a consequat dolor hendrerit.
                      Maecenas eget nisi dictum, euismod nunc et, varius sem. Donec non
                      augue vel urna efficitur facilisis sit amet eget justo. In vel
                      scelerisque enim, vitae gravida tortor.
                  </div>
                </div>
                </div>
                
              </div>

              {/* right */}
              <div className='h-full mt-10 flex bg-transparent'>
              
              <div className='w-6/12 flex flex-col justify-between relative  bg-transparent'>
               
               <div className='bg-transparent flex justify-center h-full relative w-full text-left  z-10'>{/pt-12  pl-28/}
                 <div className='w-3/5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
                     fermentum velit, nec dictum lorem. Vestibulum ante ipsum primis in
                     faucibus orci luctus et ultrices posuere cubilia curae; Nullam in sem
                     nisi. Pellentesque vulputate nisl ut lectus rhoncus, non ultrices
                     nulla laoreet. Nulla nec purus euismod, vehicula ex a, consequat
                     libero. Duis nec tortor nec magna tincidunt facilisis sit amet vel
                     purus.
                 </div>
               </div>
               </div>
               <div className='bg-transparent relative w-6/12 flex h-full flex-col  items-center'>
                  <div className='bg-transparent relative h-full w-3/5'>
                   <img src={image2} className=' w-full h-full rounded-3xl '></img>
                  </div>
                  <div className='slide-left w-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center pt-5'>from the Director</div>
               </div>
             </div>


          </div>
      </div>


      {/* animation div */}
      <div></div>
    </div>

  );
};

export default About;
