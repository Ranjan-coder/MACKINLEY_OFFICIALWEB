
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/Aboutus/About";
import Discover from "../Pages/Discover/Discover";
import Career from "../Pages/Career/Career";
import Contact from "../Pages/Contact/Contact";


import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/Aboutus/About';
import Discover from '../Pages/Discover/Discover';
import Career from '../Pages/Career/Career';
import Contact from '../Pages/Contact/Contact';
import ProductData from '../Pages/Discover/ProductData';
import ProductPage from '../Pages/Discover/ProductPage'


const Routers = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <ProductData>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/discover/:id' element={<ProductPage/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </ProductData>

    </>
  );
};

export default Routers;