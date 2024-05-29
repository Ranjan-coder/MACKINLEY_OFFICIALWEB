<<<<<<< HEAD
import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import LogoLoader from '../Component/Logo_Loader/LogoLoader';
import ProductData from '../Pages/Discover/ProductData';
import ProductPage from '../Pages/Discover/ProductPage';
const Home = lazy(() => import("../Pages/Home/Home"))
const About = lazy(() => import("../Pages/Aboutus/About"))
const Discover = lazy(() => import("../Pages/Discover/Discover"))
const Service = lazy(() => import("../Pages/Service/Service"))
const Career = lazy(() => import("../Pages/Career/Career"))
const Contact = lazy(() => import("../Pages/Contact/Contact"))
=======
import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/Aboutus/About';
import Discover from '../Pages/Discover/Discover';
import Service from '../Pages/Service/Service';
import Career from '../Pages/Career/Career';
import Contact from '../Pages/Contact/Contact';
>>>>>>> 2c6ab7b01f495d432a034d39cdadc6ecfe89879c

const Routers = () => {
  return (
    <>
<<<<<<< HEAD
      <ProductData>
        <Routes>
          <Route path="/" element={<Suspense fallback={<LogoLoader />}> <Home /> </Suspense>} />
          <Route path="/about" element={<Suspense fallback={<LogoLoader />}> <About /> </Suspense>} />
          <Route path="/discover" element={<Suspense fallback={<LogoLoader />}> <Discover /> </Suspense>} />
          <Route path="/discover/:id" element={<Suspense fallback={<LogoLoader />}> <ProductPage /> </Suspense>} />
          <Route path="/service" element={<Suspense fallback={<LogoLoader />}> <Service /> </Suspense>} />
          <Route path="/career" element={<Suspense fallback={<LogoLoader />}> <Career /> </Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<LogoLoader />}> <Contact /> </Suspense>} />
        </Routes>
      </ProductData>
=======

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
>>>>>>> 2c6ab7b01f495d432a034d39cdadc6ecfe89879c
    </>
  );
};

export default Routers;
