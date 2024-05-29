
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
          <Route path="/" element={<Suspense fallback={<LogoLoader />}> <Home /> </Suspense>} />
          <Route path="/about" element={<Suspense fallback={<LogoLoader />}> <About /> </Suspense>} />
          <Route path="/discover" element={<Suspense fallback={<LogoLoader />}> <Discover /> </Suspense>} />
          <Route path="/discover/:id" element={<Suspense fallback={<LogoLoader />}> <ProductPage /> </Suspense>} />
          <Route path="/career" element={<Suspense fallback={<LogoLoader />}> <Career /> </Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<LogoLoader />}> <Contact /> </Suspense>} />
        </Routes>
      </ProductData>
    </>
  );
};

export default Routers;
