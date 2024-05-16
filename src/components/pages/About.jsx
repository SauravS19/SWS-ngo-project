import React from 'react';
import Carousel from './Carousel'; // Corrected import statement
import image2 from '../pages/img2.jpeg'; 
import './About.css'
import './home.css'
import foot2 from './foot2.jpeg'
import {  AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import line from './Line.png'
{/* <div className='body'>
              <div className='text'>from the Director</div>
              </div> */}
const About = () => {
  return (<>
    <div className='Container  body flex mt-28 flex-col w-screen items-center gap-10'>
   
      <div className='h-20 pb-20 w-auto bg-transparent text-6xl  sm:text-7xl  md:text-8xl font-serif '>
               About Us
              </div>
     
     
      <div className='text text-4xl italic'>from the Director</div>
      
             
             
      <div className="flex flex-col h-auto md:flex-row w-10/12 md:flex-1 mb-20 gap-5">
        
        <div className='flex flex-col  h-auto w-full'>
        <div className='
          h-auto w-auto text-center'>
            kjfkdbfdkjfbsdkfbdskfbkdjsbfjksdbfkdsjbfkd
            bfkbfjkbfdslkjffdsdlkshfhkldsahkdshklahsafkd
            slsdkdshdhdsfhhdhfhdshfdhhksdkljfhsdkfhdhfsd
            hfsdhfhskjldfhklsjfhskljfhsklfjskdlhfskldj
            fhskldfhklsdjhfklsjhfkljshfklsjhfklshfklshfk
            jsdhfksdjfjksdhfkjdshfkjsdjkfsdfsdhfjkfhsd
            kjfkdbfdkjfbsdkfbdskfbkdjsbfjksdbfkdsjbfkd
            bfkbfjkbfdslkjffdsdlkshfhkldsahkdshklahsafkd
            slsdkdshdhdsfhhdhfhdshfdhhksdkljfhsdkfhdhfsd
            hfsdhfhskjldfhklsjfhskljfhsklfjskdlhfskldj
            fhskldfhklsdjhfklsjhfkljshfklsjhfklshfklshfk
            jsdhfksdjfjksdhfkjdshfkjsdjkfsdfsdhfjkfhsd
            kjfkdbfdkjfbsdkfbdskfbkdjsbfjksdbfkdsjbfk
            bfkbfjkbfdslkjffdsdlkshfhkldsahkdshklahsafkd
            slsdkdshdhdsfhhdhfhdshfdhhksdkljfhsdkfhdhfsd
            hfsdhfhskjldfhklsjfhskljfhsklfjskdlhfskldj
            fhskldfhklsdjhfklsjhfkljshfklsjhfklshfklshfk
            jsdhfksdjfjksdhfkjdshfkjsdjkfsdfsdhfjkfhsd
            kjfkdbfdkjfbsdkfbdskfbkdjsbfjksdbfkdsjbfkd
            bfkbfjkbfdslkjffdsdlkshfhkldsahkdshklahsafkd
            slsdkdshdhdsfhhdhfhdshfdhhksdkljfhsdkfhdhfsd
            hfsdhfhskjldfhklsjfhskljfhsklfjskdlhfskldj
            fhskldfhklsdjhfklsjhfkljshfklsjhfklshfklshfk
            jsdhfksdjfjksdhfkjdshfkjsdjkfsdfsdhfjkfhsd
      
          </div>
       
        </div>
      
        <div className='w-full flex md:items-center justify-center md:w-2/4'> 
        <div className='h-64 w-2/4 md:w-full md:items-center '>
         <Carousel></Carousel>
        </div>
       </div>
        
      </div>
      <div className='h-auto w-full flex flex-col items-center second gap-20'>
<div className='bg-gray-500 w-full h-16'>
         </div>
   <div className=' h-auto w-10/12 flex flex-col'>
   <div className=' w-full flex  h-72 gap-5'>
   <div className='h-auto w-3/6 md:w-3/6 lg:w-3/6'>
      <img src={image2} className='h-full w-full rounded-3xl'></img>
    </div>
    <div className='slide-left flex flex-col flex-wrap w-3/6 md:w-3/6 lg:w-4/6 text-center justify-center overflow-x-auto'>
        kjfkdbfdkjfbsdkfbdskfbkdjsbfjksdbfkdsjbfkd
        bfkbfjkbfdslkjffdsdlkshfhkldsahkdshklahsafkd
        slsdkdshdhdsfhhdhfhdshfdhhksdkljfhsdkfhdhfsd
        hfsdhfhskjldfhklsjfhskljfhsklfjskdlhfskldjs
        fhskldfhklsdjhfklsjhfkljshfklsjhfklshfklshfk
        jsdhfksdjfjksdhfkjdshfkjsdjkfsdfsdhfjkfhsd
      </div>
     
    </div>
   </div>
   <div className=' h-auto w-10/12 flex flex-col'>
   <div className=' w-full flex  h-72 gap-5'>
  
    <div className='slide-right flex flex-col flex-wrap w-3/6 md:w-3/6 lg:w-4/6 text-center justify-center overflow-x-auto'>
        kjfkdbfdkjfbsdkfbdskfbkdjsbfjksdbfkdsjbfkd
        bfkbfjkbfdslkjffdsdlkshfhkldsahkdshklahsafkd
        slsdkdshdhdsfhhdhfhdshfdhhksdkljfhsdkfhdhfsd
        hfsdhfhskjldfhklsjfhskljfhsklfjskdlhfskldjs
        fhskldfhklsdjhfklsjhfkljshfklsjhfklshfklshfk
        jsdhfksdjfjksdhfkjdshfkjsdjkfsdfsdhfjkfhsd
      </div>
      <div className=' h-auto w-3/6 md:w-3/6 lg:w-3/6'>
      <img src={image2} className='h-full w-full rounded-3xl'></img>
    </div>
    </div>
   </div>

   <div className=' h-auto w-10/12 flex flex-col'>
   <div className=' w-full flex  h-72 gap-5'>
   <div className='h-auto w-3/6 md:w-3/6 lg:w-3/6'>
      <img src={image2} className='h-full w-full rounded-3xl'></img>
    </div>
    <div className='slide-left flex flex-col flex-wrap w-3/6 md:w-3/6 lg:w-4/6 text-center justify-center overflow-x-auto'>
        kjfkdbfdkjfbsdkfbdskfbkdjsbfjksdbfkdsjbfkd
        bfkbfjkbfdslkjffdsdlkshfhkldsahkdshklahsafkd
        slsdkdshdhdsfhhdhfhdshfdhhksdkljfhsdkfhdhfsd
        hfsdhfhskjldfhklsjfhskljfhsklfjskdlhfskldjs
        fhskldfhklsdjhfklsjhfkljshfklsjhfklshfklshfk
        jsdhfksdjfjksdhfkjdshfkjsdjkfsdfsdhfjkfhsd
      </div>
     
    </div>
   </div>
</div>
      
      
      </div>
      <div className='flex flex-col flex-wrap w-full h-auto items-center bg-cover bg-top mt-20 pb-10'
   style={{backgroundImage:`url(${foot2})`}}>
 
      <div className='flex flex-col md:flex-row items-center w-10/12 h-auto gap-10'>
        
      <div className='relative rounded-3xl w-3/12 flex-1 flex  h-fit '>
        <div className=' h-fit flex flex-col w-auto  gap-5'>
          <div className='text-left  text-xl md:text-4xl '>Programs</div>
          <div className='relative flex flex-col gap-2 md:gap-5'> 
          <div className='text-left text-sm sm:text-lg  xl:text-xl'>Yoga</div>
          <div className='text-left text-sm sm:text-lg xl:text-xl'>Dance</div>
          <div className='text-left text-sm sm:text-lg  xl:text-xl'>singing</div>
          </div>
         
        </div></div>
        <div className='relative rounded-3xl w-3/12 flex-1 flex  h-fit '>
        <div className=' h-fit flex flex-col w-auto gap-5'>
          <div className='text-left text-xl md:text-4xl '>what we do</div>
          <div className='relative flex flex-col gap-2 md:gap-5'> 
          <div className='text-left text-sm sm:text-lg   xl:text-xl'>tourism</div>
          <div className='text-left text-sm sm:text-lg   xl:text-xl'>social empowerment</div>
          <div className='text-left text-sm sm:text-lg   xl:text-xl'>environment conserve</div>
          </div>
         
        </div></div>
        <div className='relative rounded-3xl w-3/12 flex-1 flex  h-fit '>
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
        
        <div className='relative rounded-3xl w-3/12 flex-1 flex  h-fit '>
        <div className=' h-fit flex flex-col w-auto gap-5'>
          <div className='text-left text-xl md:text-4xl'>Contact Us</div>
          <div className='relative flex flex-col gap-2 md:gap-5'> 
          <div className='text-left text-sm sm:text-lg   xl:text-xl'>5343434545</div>
          <div className='text-left text-sm sm:text-lg   xl:text-xl'>djhgsjghhad@email.com</div>
          <div className='text-left text-sm sm:text-lg   xl:text-xl'>ganesh vihar padampur</div>
          </div>
        
        </div></div>
      
       
      </div>
    
</div> 
      </>
  );
};

export default About;