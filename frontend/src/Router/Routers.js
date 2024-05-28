import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/Aboutus/About';
import Discover from '../Pages/Discover/Discover';
import Service from '../Pages/Service/Service';
import Career from '../Pages/Career/Career';
import Contact from '../Pages/Contact/Contact';
import HrConnectPro from '../Pages/Discover/HrConnectPro';
import MediAI from '../Pages/Discover/MediAI';
import ConnectEra from '../Pages/Discover/ConnectEra';
import GlobalGuardian from '../Pages/Discover/GlobalGuardian';

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/discover' element={<Discover />}>
          <Route path='/discover/HRConnectPro' element={<HrConnectPro />} />
          <Route path='/discover/MediAI' element={<MediAI />} />
          <Route path='/discover/Connect-Era' element={<ConnectEra />} />
          <Route path='/discover/Global-Guardian' element={<GlobalGuardian />} />
        </Route>
        <Route path='/service' element={<Service />} />
        <Route path='/career' element={<Career />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default Routers