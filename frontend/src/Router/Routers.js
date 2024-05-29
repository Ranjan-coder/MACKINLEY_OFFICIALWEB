
import React, { Suspense } from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/Aboutus/About';
import Discover from '../Pages/Discover/Discover';
import Career from '../Pages/Career/Career';
import Contact from '../Pages/Contact/Contact';
import LogoLoader from '../Component/Logo_Loader/LogoLoader'
import ProductData from '../Pages/Discover/ProductData';
import ProductPage from '../Pages/Discover/ProductPage'

const Routers = () => {
  return (
    <>
      <ProductData>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </ProductData>
    </>
  );
};

export default Routers;
