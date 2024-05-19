// import React from 'react'

// const Blogs = () => {
//   return (
//     <div className='bg-red-500 h-screen'>
      
//     </div>
//   )
// }

// export default Blogs


import img1 from '../../assets/gallery/img1.jpg';
import img2 from '../../assets/gallery/img2.jpg';
import img3 from '../../assets/gallery/img3.jpg';
import img4 from '../../assets/gallery/img4.jpg';
import img5 from '../../assets/gallery/img5.jpg';
import img6 from '../../assets/gallery/img6.jpg';
import img7 from '../../assets/gallery/img7.jpg';
import img8 from '../../assets/gallery/img8.jpg';
import img9 from '../../assets/gallery/img9.jpg';
import Foot from './footer';

const Blogs = () => {
  const images = [
    { src: img1, caption: 'Image1' },
    { src: img2, caption: 'Image2' },
    { src: img3, caption: 'Image3' },
    { src: img4, caption: 'Image4' },
    { src: img5, caption: 'Image5' },
    { src: img6, caption: 'Image6' },
    { src: img7, caption: 'Image7' },
    { src: img8, caption: 'Image8' },
    { src: img9, caption: 'Image9' },
  ];

  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto">
      <div className="max-w-5xl mx-auto p-5">
        <h1 className="text-center text-5xl mb-10 mt-20">My Gallery</h1>
        <div className="flex flex-wrap justify-between">
          {images.map((image, index) => (
            <figure key={index} className="w-full sm:w-1/2 md:w-1/3 mb-5 relative rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
              <img 
                src={image.src} 
                alt={image.caption} 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-filter shadow-lg" 
              />
              <figcaption className="absolute bottom-0 left-0 p-5 w-full h-20 text-white font-medium opacity-0 bg-gradient-to-t from-black to-transparent transition-opacity hover:opacity-100">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <Foot></Foot>
    </div>
  );
};

export default Blogs;