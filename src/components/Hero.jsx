// import React, { useState } from 'react';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';
// import img from './pages/imgs.jpg'

// function Hero() {
//   const slides = [
//     {
//       url:'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
//     },

//     {
//       url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <div className='w-full relative group '>
//       <div
//         style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
//         className='w-full h-[340px] bg-center bg-cover duration-500'
//       ></div>
//       {/* Left Arrow */}
//       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//         <BsChevronCompactLeft onClick={prevSlide} size={30} />
//       </div>
//       {/* Right Arrow */}
//       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//         <BsChevronCompactRight onClick={nextSlide} size={30} />
//       </div>
//       <div className='flex top-4 justify-center py-2'>
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             className='text-2xl cursor-pointer'
//           >
            
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Hero;


// import React, { useState, useEffect } from 'react';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';

// const Hero = () => {
//   const slides = [
//     {
//       url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
//     },

//     {
//       url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const newIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const newIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       nextSlide();
//     }, 2000); 

//     return () => clearInterval(intervalId); // Cleanup function to clear interval
//   }, [currentIndex]); // Run effect whenever currentIndex changes

//   return (
//     <div className='w-full h-full relative group'>
//       <div
//         style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
//         className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
//       ></div>
//       {/* Left Arrow */}
//       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//         <BsChevronCompactLeft onClick={prevSlide} size={30} />
//       </div>
//       {/* Right Arrow */}
//       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//         <BsChevronCompactRight onClick={nextSlide} size={30} />
//       </div>
//       <div className='flex top-4 justify-center py-2'>
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => setCurrentIndex(slideIndex)}
//             className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-blue-500' : 'text-gray-400'}`}
//           >
//             <RxDotFilled size={10} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Hero;


import React, { useState, useEffect } from 'react'; 
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'; 
import { RxDotFilled } from 'react-icons/rx'; 
// import image1 from '../assets/facebook.png'; // Import your images 
// import image2 from '../assets/instagram.png'; // Import your images 
// import image3 from '../assets/twitter.png'; // Import your images 
// import image4 from '../assets/youtube.png'; // Import your images 
 
import image1 from '../assets/img1.png'
import image2 from '../assets/img3.png'; 
import image3 from '../assets/img5.png'; 
import image4 from '../components/pages/img2.jpeg'
 
const Carousel = () => { 
  const slides = [ 
    { 
      url: image1, 
    }, 
    { 
      url: image2, 
    }, 
    { 
      url: image3, 
    }, 
    { 
      url: image4, 
    }, 
 
  ]; 
 
  const [currentIndex, setCurrentIndex] = useState(0); 
 
  const prevSlide = () => { 
    const newIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1; 
    setCurrentIndex(newIndex); 
  }; 
 
  const nextSlide = () => { 
    const newIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1; 
    setCurrentIndex(newIndex); 
  }; 
 
  useEffect(() => { 
    const intervalId = setInterval(() => { 
      nextSlide(); 
    }, 2000);  
 
    return () => clearInterval(intervalId); // Cleanup function to clear interval 
  }, [currentIndex]); // Run effect whenever currentIndex changes 
 
  return ( 
    <div className='w-full h-full relative group'> 
      <div 
        style={{ backgroundImage: 'url(${slides[currentIndex].url})'}} 
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500' 
      ></div> 
      {/* Left Arrow */} 
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'> 
        <BsChevronCompactLeft onClick={prevSlide} size={30} /> 
      </div> 
      {/* Right Arrow */} 
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'> 
        <BsChevronCompactRight onClick={nextSlide} size={30} /> 
      </div> 
      <div className='flex top-4 justify-center py-2'> 
        {slides.map((slide, slideIndex) => ( 
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-blue-500' : 'text-gray-400'}`}
          >
            <RxDotFilled size={10} />
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Carousel;