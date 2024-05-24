import React from 'react'
import Crousel from './Carousel'
import Foot from './footer';

import bg from '../../assets/icons/bgs.png'

const Event = () => {
  return (<>
    <div className='flex flex-col h-auto w-auto  items-center pt-28 gap-10 bg-cover '
      style={{backgroundImage:`url(${bg})`}}>
    <div className='h-40 w-full text-9xl  text-center italic'>Events</div>
    <div className='w-11/12 h-72  flex gap-28  px-14'>
    <div className='flex-1  bg-opacity-25  bg-pink-400  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center '>
      <div className='w-2/5 h-4/5 self-center'>
        <Crousel></Crousel>
      </div>
      <div className='w-2/5 bg-transparent h-4/5 self-center text-center flex flex-col gap-2'>
      <p>fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;headerdskflhds
      fkdsjsd;f;dsf
      fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;headerdskflhds                                       
      fkdsjsd;f;dsf</p>
     <button>know-more</button>
      </div>
    </div>
    <div className='flex-1  bg-opacity-25 bg-pink-400 backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center '>
      <div className='w-2/5  h-4/5 self-center'>
        <Crousel></Crousel>
      </div>
      <div className='w-2/5 bg-transparent h-4/5 self-center text-center flex flex-col gap-2'>
      <p>fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;headerdskflhds
      fkdsjsd;f;dsf
      fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;headerdskflhds                                       
      fkdsjsd;f;dsf</p>
     <button>know-more</button>
      </div>
    </div>
 
   
    </div>
    <div className='w-11/12 h-72  flex gap-28  px-14'>
    <div className='flex-1  bg-opacity-25 bg-pink-400  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center '>
      <div className='w-2/5  h-4/5 self-center'>
        <Crousel></Crousel>
      </div>
      <div className='w-2/5 bg-transparent h-4/5 self-center text-center flex flex-col gap-2'>
      <p>fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;headerdskflhds
      fkdsjsd;f;dsf
      fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;headerdskflhds                                       
      fkdsjsd;f;dsf</p>
     <button>know-more</button>
      </div>
    </div>
    <div className='flex-1  bg-opacity-25 bg-pink-400  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center '>
      <div className='w-2/5 h-4/5 self-center'>
        <Crousel></Crousel>
      </div>
      <div className='w-2/5 bg-transparent h-4/5 self-center text-center flex flex-col gap-2'>
      <p>fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;headerdskflhds
      fkdsjsd;f;dsf
      fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;headerdskflhds                                       
      fkdsjsd;f;dsf</p>
     <button>know-more</button>
      </div>
    </div>
 
   
    </div>
    <div className='w-11/12 h-72  flex gap-28  px-14'>
    <div className='flex-1  bg-opacity-25 bg-pink-400  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center '>
      <div className='w-2/5  h-4/5 self-center'>
        <Crousel></Crousel>
      </div>
      <div className='w-2/5 bg-transparent h-4/5 self-center text-center flex flex-col gap-2'>
      <p>fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;headerdskflhds
      fkdsjsd;f;dsf
      fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;headerdskflhds                                       
      fkdsjsd;f;dsf</p>
     <button>know-more</button>
      </div>
    </div>
    <div className='flex-1  bg-opacity-25 bg-pink-400  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center '>
      <div className='w-2/5  h-4/5 self-center'>
        <Crousel></Crousel>
      </div>
      <div className='w-2/5 bg-transparent h-4/5 self-center text-center flex flex-col gap-2'>
      <p>fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;headerdskflhds
      fkdsjsd;f;dsf
      fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;headerdskflhds                                       
      fkdsjsd;f;dsf</p>
     <button>know-more</button>
      </div>
    </div>
 
   
   
    </div>
 
   
    <div className='w-full h-auto  bg-opacity-25 bg-green-400 text-5xl backdrop-filter backdrop-blur-lg text-center'>"Quotes likh den aekk mst wala a  kdjsh</div>


   
    </div>
    <Foot></Foot>
  </>
  )
}

export default Event
