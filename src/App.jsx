
import { Route, Routes } from 'react-router-dom'
import React, { Suspense } from 'react'

const Navbar = React.lazy(()=>import("./components/Navbar"))
const About = React.lazy(()=> import("./components/pages/About"))
const Contact = React.lazy(()=> import("./components/pages/Contact"))
const Home = React.lazy(()=> import("./components/pages/Home"))
const Blogs = React.lazy(()=> import("./components/pages/Blogs"))
const Event = React.lazy(()=> import("./components/pages/Event"))
const Hero = React.lazy(()=> import("./components/Hero"))
function App() {

  return (<>
   <Navbar></Navbar>
      <Routes> 
        <Route path='/' element={<Suspense fallback={"loading"}><Home/></Suspense>}/>
        <Route path='/about' element={<Suspense fallback={"loading"}><About/></Suspense>}/>
        <Route path='/contact' element={<Suspense fallback={"loading"}><Contact/></Suspense>}/>
        <Route path='/home' element={<Suspense fallback={"loading"}><Home/></Suspense>}/>
        <Route path='/blogs' element={<Suspense fallback={"loading"}><Blogs/></Suspense>}/>
        <Route path='/events' element={<Suspense fallback={"loading"}><Event/></Suspense>}/>
     </Routes>
      </>
   
  )
}

export default App