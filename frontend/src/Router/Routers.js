import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/Aboutus/About';
import Discover from '../Pages/Discover/Discover';
import Service from '../Pages/Service/Service';
import Career from '../Pages/Career/Career';
import Contact from '../Pages/Contact/Contact';
import ChatbotComponent from '../Pages/Chatbot/ChatbotComponent';

const Routers = () => {
  return (
    <>

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>

    </>
  )
}

export default Routers