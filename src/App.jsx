
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
      <Home></Home>
      </>
   
  )
}

export default App
