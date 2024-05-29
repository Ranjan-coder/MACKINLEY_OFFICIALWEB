import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import LogoLoader from '../Component/Logo_Loader/LogoLoader';
import ProductData from '../Pages/Discover/ProductData';
import ProductPage from '../Pages/Discover/ProductPage';
const Home = lazy(() => import("../Pages/Home/Home"))
const About = lazy(() => import("../Pages/Aboutus/About"))
const Discover = lazy(() => import("../Pages/Discover/Discover"))
// const Service = lazy(() => import("../Pages/Service/Service"))
const Career = lazy(() => import("../Pages/Career/Career"))
const Contact = lazy(() => import("../Pages/Contact/Contact"))

const Routers = () => {
  return (
    <>
      <ProductData>
        <Routes>
          <Route path="/" element={<Suspense fallback={<LogoLoader />}> <Home /> </Suspense>} />
          <Route path="/about" element={<Suspense fallback={<LogoLoader />}> <About /> </Suspense>} />
          <Route path="/discover" element={<Suspense fallback={<LogoLoader />}> <Discover /> </Suspense>} />
          <Route path="/discover/:id" element={<Suspense fallback={<LogoLoader />}> <ProductPage /> </Suspense>} />
          {/* <Route path="/service" element={<Suspense fallback={<LogoLoader />}> <Service /> </Suspense>} /> */}
          <Route path="/career" element={<Suspense fallback={<LogoLoader />}> <Career /> </Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<LogoLoader />}> <Contact /> </Suspense>} />
        </Routes>
      </ProductData>
    </>
  );
};

export default Routers;
