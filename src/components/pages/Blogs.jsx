// import React from 'react'

// const Blogs = () => {
//   return (
//     <div className='bg-red-500 h-screen'>
      
//     </div>
//   )
// }

// export default Blogs



import Foot from './footer';
import './blog.css'
import bg from '../../assets/icons/About.png'
const Blogs = () => {
  

  return (
    <div className="h-auto w-full  flex mt-20 bg-cover "
      style={{backgroundImage:`url(${bg})`,height:`900px`}}>
      
    </div>
  );
};

export default Blogs;