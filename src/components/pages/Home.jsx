import React from 'react'
import { AiFillControl, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillX, AiFillYoutube } from 'react-icons/ai'
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


const Home = () => {
  return (
    <div className=' pt-16'>
      <div className='Container  flex flex-col items-center '>
      <div className='relative flex  justify-center w-10/12 h-[48rem]'>
               <div className='crousel relative flex w-full rounded-xl bg-cover'>
                 <Carousel></Carousel>
              <div className='homedata '>
              
                       <div className='heading text-7xl font-medium  tracking-wide font-serif w-80 text-white'>Samarpit<br></br>
                       Media<br></br>
                       Society
                       </div><br></br> 
                       
                       <div className='w-80 italic text-white'>Samarpit Media Society (SMS) has been working in Uttarakhand since 2012
                       </div><div className='w-80 italic text-white'>Samarpit Media Society (SMS) has been working in Uttarakhand since 2012
                       </div>
                       <br></br>
                       <button className='btn-pin'>Know-More</button>
            </div>
            
       </div> 
</div>
            {/* <=======About us======> */}
        


      <div className=' flex  justify-center w-full h-auto mt-20 bg-cover'
       style={{backgroundImage:`url(${blog})`,backgroundPosition:`center`}}>
      
          <div className='second h-full flex flex-col w-full rounded-xl bg-transparent relative'>
               <div className='h-20 w-auto  text-8xl font-serif pl-28'>
               About Us
              </div>
              <div className='h-full  flex bg-transparent'>
              
               <div className='w-6/12 flex justify-between relative  bg-transparent'>
                
                <div className='bg-transparent h-full relative w-full text-left pt-12  pl-28 z-10'>
                  hjhdljhdljhdkdkjhdkshkdhkjdh
                  dslkdjljdlksajdjslkdjljd
                  sdljdlkjdlkjkldjlkjjs'dljsa'lkdjlskaj
                  dldjlk;djlksjdkjdljasdjlsajdlksajdlksajd
                  dsdlkkjdlkjdlkjsjsldjlsjdlkjsdljlkdjlksajdsa
                  sdljdlkjdlkjkldjlkjjs'dljsa'lkdjlskaj
                  dldjlk;djlksjdkjdljasdjlsajdlksajdlksajd
                  dsdlkkjdlkjdlkjsjsldjlsjdlkjsdljlkdjlksajdsa
                  dsalkdjsalkdjlksajdlksajdsakldjlksajdlksajdlksajdkl
                  dlsdjlsakdjlksajdlksajkdasjdljsalkdjaslkdjlask
                  dldjlk;djlksjdkjdljasdjlsajdlksajdlksajd
                  dsdlkkjdlkjdlkjsjsldjlsjdlkjsdljlkdjlksajdsa
                  sdljdlkjdlkjkldjlkjjs'dljsa'lkdjlska
                  sd;lsadk;sakd;laks
                </div>
                <div className='absolute bg-transparent bottom-0 flex h-32 w-full justify-evenly blur-[1.5px]'>
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
                <div className='bg-transparent relative w-6/12 flex flex-col justify-center items-center'>
                   <div className='bg-transparent relative w-3/5'>
                    <img src={image2} className=' w-full h-full rounded-3xl '></img>
                   </div>
                   <div className='slide-left w-full text-3xl text-center pt-5'>from the Director</div>
                </div>
              </div>


              <div className=' h-full flex pb-10'>
                <div className='bg-transparent relative w-6/12 flex flex-col justify-center items-center '>
                <div className='relative bg-transparent w-3/5'>
                <img src={image2}className='w-full h-full rounded-3xl '></img>
                   {/* <----img  > */}
                   </div>
                   <div className='slide-right w-full text-3xl text-center pt-5'>from the Director</div>
                </div>
                <div className='w-6/12 flex justify-between  relative pt-12'>
                  
                <div className='bg-transparent h-full relative text-right w-full pr-28 z-10'>
                  hjhdljhdljhdkdkjhdkshkdhkjdh
                  dslkdjljdlksajdjslkdjljd
                  sdljdlkjdlkjkldjlkjjs'dljsa'lkdjlskaj
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
                  dlsdjlsakdjlksajdlksajkdasjdljsalkdjaslkdjlask
                </div>
                <div className='absolute  bg-transparent bottom-0 flex h-32 w-full justify-evenly  blur-[1.5px]'>
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
<div className='text1'>
     <div className='flex justify-center w-full h-96 bg-gray-500 bg-cover'
      style={{backgroundImage:`url(${wave})`}} >
    <div className='slide-bottom relative w-full text-center text-6xl h-48 self-end bg-transparent'>
           sky is blue hahahaha
    </div>
     </div>
     <div className='flex flex-col w-full h-auto  pb-14'>
      <div className='self-end h-20 bg-transparentw-auto  text-8xl font-serif pr-28'>
        What we do
      </div>
      <div className='w-full  h-auto  mt-10 pr-28 pl-96 text-right'>
                 
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
      <div className='flex w-full h-auto justify-between gap-32 mt-10 pl-28 pr-28'>
        
        <div className='bg-green-500 relative rounded-3xl flex-1 h-96 boxes'>
        <div className='blockglow h-96 flex flex-col items-center'>
         <div className='h-3/5 pt-8'>
          <img src={envi}className='h-full '></img>
          </div>
          <div className='text-center text-4xl text-white px-24'>Environment conservation</div>
        </div></div>
       
        <div className='bg-orange-500 relative rounded-3xl flex-1 h-96 boxes'>
        <div className='blockglow flex h-96 flex-col items-center'>
        <div className='h-3/5 pt-8'>
          <img src={social}className='h-full '></img>
          </div>
          <div className='text-center text-4xl text-white px-24'>Social Empowerment</div>
        </div></div>
        <div className='bg-red-500 relative rounded-3xl flex-1 h-96 boxes'>
        <div className='blockglow flex h-96 flex-col items-center'>
        <div className='h-3/5 pt-8'>
          <img src={tour}className='h-full '></img>
          </div>
          <div className='text-center text-4xl text-white px-24'>Tourism</div>
        </div></div>
      </div>
     </div>
 </div>


{/* // <///////////////////////////////////////////////////////> */}
 <div className='flex flex-col w-full h-auto mt-20 pb-10 px-40 bg-cover gap-5 '
       style={{backgroundImage:`url(${blob})`,backgroundPosition:`center`}}>
             <div className='h-20 w-auto  text-8xl font-serif  mb-20'>
               Programms
              </div> 
  <div class="flex card bg-yellow-100 flex-1 rounded-3xl ml-14 mr-96">
    <div className=' h-auto w-1/3'>
      <img src={image2} className='h-full w-full rounded-3xl'></img>
    </div>
    <div className='flex flex-col h-full text-center py-6 px-6 w-3/4'>
      kjfkdbfdkjfbsdkfbdskfbkdjsbfjksdbfkdsjbfkdbfkbfjkbfdslkjffdsdlkshfhkldsahkdshklahsafkd
      slsdkdshdhdsfhhdhfhdshfdhhksdkljfhsdkfhdhfsdhfsdhfhskjldfhklsjfhskljfhsklfjskdlhfskldj
      fhskldfhklsdjhfklsjhfkljshfklsjhfklshfklshfkjsdhfksdjfjksdhfkjdshfkjsdjkfsdfsdhfjkfhsd
      kjfkdbfdkjfbsdkfbdskfbkdjsbfjksdbfkdsjbfkdbfkbfjkbfdslkjffdsdlkshfhkldsahkdshklahsafkd
      slsdkdshdhdsfhhdhfhdshfdhhksdkljfhsdkfhdhfsdhfsdhfhskjldfhklsjfhskljfhsklfjskdlhfskldj
      fhskldfhklsdjhfklsjhfkljshfklsjhfklshfklshfkjsdhfksdjfjksdhfkjdshfkjsdjkfsdfsdhfjkfhsd
      <button className='btn-pin3 self-end'>Know-More</button>
    </div>
  </div>
  <div class=" card bg-yellow-100 flex rounded-3xl flex-1 ml-52 mr-52">
  <div className=' h-auto w-1/3'>
  <img src={image2} className='h-full w-full rounded-3xl'></img>
  </div>
    <div className=' flex flex-col py-6 px-6 text-center h-full w-3/4'>
    kjfkdbfdkjfbsdkfbdskfbkdjsbfjksdbfkdsjbfkdbfkbfjkbfdslkjffdsdlkshfhkldsahkdshklahsafkd
      slsdkdshdhdsfhhdhfhdshfdhhksdkljfhsdkfhdhfsdhfsdhfhskjldfhklsjfhskljfhsklfjskdlhfskldj
      fhskldfhklsdjhfklsjhfkljshfklsjhfklshfklshfkjsdhfksdjfjksdhfkjdshfkjsdjkfsdfsdhfjkfhsd
      kjfkdbfdkjfbsdkfbdskfbkdjsbfjksdbfkdsjbfkdbfkbfjkbfdslkjffdsdlkshfhkldsahkdshklahsafkd
      slsdkdshdhdsfhhdhfhdshfdhhksdkljfhsdkfhdhfsdhfsdhfhskjldfhklsjfhskljfhsklfjskdlhfskldj
      fhskldfhklsdjhfklsjhfkljshfklsjhfklshfklshfkjsdhfksdjfjksdhfkjdshfkjsdjkfsdfsdhfjkfhsd
      <button className='btn-pin3 self-end'>Know-More</button>
    </div>
  </div>
  <div class=" card bg-yellow-100 flex rounded-3xl flex-1 ml-96 mr-14">
  <div className=' h-auto w-1/3'>
  <img src={image2} className='h-full w-full rounded-3xl'></img>
  </div>
    <div className=' flex flex-col py-6 px-6 text-center h-full w-3/4'>
    kjfkdbfdkjfbsdkfbdskfbkdjsbfjksdbfkdsjbfkdbfkbfjkbfdslkjffdsdlkshfhkldsahkdshklahsafkd
      slsdkdshdhdsfhhdhfhdshfdhhksdkljfhsdkfhdhfsdhfsdhfhskjldfhklsjfhskljfhsklfjskdlhfskldj
      fhskldfhklsdjhfklsjhfkljshfklsjhfklshfklshfkjsdhfksdjfjksdhfkjdshfkjsdjkfsdfsdhfjkfhsd
      kjfkdbfdkjfbsdkfbdskfbkdjsbfjksdbfkdsjbfkdbfkbfjkbfdslkjffdsdlkshfhkldsahkdshklahsafkd
      slsdkdshdhdsfhhdhfhdshfdhhksdkljfhsdkfhdhfsdhfsdhfhskjldfhklsjfhskljfhsklfjskdlhfskldj
      fhskldfhklsdjhfklsjhfkljshfklsjhfklshfklshfkjsdhfksdjfjksdhfkjdshfkjsdjkfsdfsdhfjkfhsd
      <button className='btn-pin3 self-end'>Know-More</button>
    </div>
  </div>

</div>

<div className='flex flex-col justify-center w-full h-fit pt-20  bg-cover z-10'>
      {/* //  style={{backgroundImage:`url(${wave2})`,backgroundPosition:`center`}} */}
       <div className='h-20 w-auto  text-8xl font-serif pl-28 pb-28'>Gallery</div>
       <div className='flex w-full h-auto justify-between gap-10 mt-10 pl-24 pr-24'>

       <div className=' bg-white relative rounded-3xl h-48 flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={image2}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
      <div className=' bg-white relative rounded-3xl h-48 flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={image2}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
      <div className=' bg-white relative rounded-3xl h-48 flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={image2}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
      <div className=' bg-white relative rounded-3xl h-48 flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={image2}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
      <div className=' bg-white relative rounded-3xl h-48 flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={image2}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
     </div>



     <div className='flex w-full h-auto justify-between gap-10 mt-10 pl-24 pr-24'>

       <div className=' bg-white relative rounded-3xl h-48 flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={image2}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
      <div className=' bg-white relative rounded-3xl h-48 flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={image2}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
      <div className=' bg-white relative rounded-3xl h-48 flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={image2}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
      <div className=' bg-white relative rounded-3xl h-48 flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={image2}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
      <div className=' bg-white relative rounded-3xl h-48 flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={image2}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
     </div>


     <div className='flex w-full h-auto justify-between gap-10 mt-10 pl-24 pr-24'>

       <div className=' bg-white relative rounded-3xl h-48 flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={image2}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
      <div className=' bg-white relative rounded-3xl h-48 flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={image2}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
      <div className=' bg-white relative rounded-3xl h-48 flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={image2}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
      <div className=' bg-white relative rounded-3xl h-48 flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={image2}className='w-full h-full rounded-3xl '></img>
       </div>
      </div>
      <div className=' bg-white relative rounded-3xl h-48 flex-1 boxes'>
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
    <div className='flex justify-center w-full h-96  bg-cover'
      style={{backgroundImage:`url(${wave2})`}} ></div>

<div className='flex flex-col w-full h-screen pb-10  bg-cover gap-5'
       style={{backgroundImage:`url(${contactbg})`}}>
 
      <div className='flex w-full h-auto justify-between gap-32 mt-10 pl-28 pr-28'>
        
      <div className='relative rounded-3xl flex-1 h-fit '>
        <div className=' h-fit flex flex-col py-7 items-left gap-10'>
          <div className='text-left  text-5xl px-24'>Programs</div>
          <div className='relative flex flex-col gap-10'> 
          <div className='text-left text-2xl px-24'>Yoga</div>
          <div className='text-left text-2xl px-24'>Dance</div>
          <div className='text-left text-2xl px-24'>singing</div>
          </div>
         
        </div></div>
        <div className=' relative rounded-3xl flex-1 h-fit '>
        <div className=' h-fit flex flex-col py-7 items-left gap-10'>
          <div className='text-left text-5xl px-20'>what we do</div>
          <div className='relative flex flex-col gap-10'> 
          <div className='text-left text-2xl px-24'>tourism</div>
          <div className='text-left text-2xl px-24'>social empowerment</div>
          <div className='text-left text-2xl px-24'>environment conserve</div>
          </div>
         
        </div></div>
        <div className=' relative rounded-3xl flex-1 h-fit '>
        <div className=' h-fit flex flex-col py-7 items-left gap-10'>
          <div className='text-left  text-5xl px-24'>Contact Us</div>
          <div className='relative flex flex-col gap-10'> 
          <div className='text-left text-2xl px-24'>5343434545</div>
          <div className='text-left text-2xl px-24'>djhgsjghhad@email.com</div>
          <div className='text-left text-2xl px-24'>ganesh vihar padampur</div>
          </div>
         
        </div></div>
       
      </div>
      <div className='flex justify-center gap-40 mt-20'>
        <div><AiFillFacebook className='h-16 w-16 scale'></AiFillFacebook></div>
        <div><AiFillLinkedin className='h-16 w-16 scale'></AiFillLinkedin></div>
        <div><AiFillInstagram className='h-16 w-16 scale'></AiFillInstagram></div>
        <div><AiFillYoutube className='h-16 w-16 scale'></AiFillYoutube></div>
      </div>
     
</div>





</div>
</div>
    
   
  )
}

export default Home
