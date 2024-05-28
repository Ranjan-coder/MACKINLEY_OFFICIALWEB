import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import LogoLoader from '../Component/Logo_Loader/LogoLoader';
import HrConnectPro from '../Pages/Discover/HrConnectPro';
import MediAI from '../Pages/Discover/MediAI';
import ConnectEra from '../Pages/Discover/ConnectEra';
import GlobalGuardian from '../Pages/Discover/GlobalGuardian';
const Home = lazy(() => import("../Pages/Home/Home"))
const About = lazy(() => import("../Pages/Aboutus/About"))
const Discover = lazy(() => import("../Pages/Discover/Discover"))
const Service = lazy(() => import("../Pages/Service/Service"))
const Career = lazy(() => import("../Pages/Career/Career"))
const Contact = lazy(() => import("../Pages/Contact/Contact"))

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Suspense fallback={<LogoLoader />}> <Home /> </Suspense>} />
        <Route path="/about" element={<Suspense fallback={<LogoLoader />}> <About /> </Suspense>} />
        <Route path="/discover" element={<Suspense fallback={<LogoLoader />}> <Discover /> </Suspense>}>
        <Route path='/discover/HRConnectPro' element={<HrConnectPro />} />
          <Route path='/discover/MediAI' element={<MediAI />} />
          <Route path='/discover/Connect-Era' element={<ConnectEra />} />
          <Route path='/discover/Global-Guardian' element={<GlobalGuardian />} />
        </Route>
        <Route path="/service" element={<Suspense fallback={<LogoLoader />}> <Service /> </Suspense>} />
        <Route path="/career" element={<Suspense fallback={<LogoLoader />}> <Career /> </Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<LogoLoader />}> <Contact /> </Suspense>} />
      </Routes>
    </>
  );
};

export default Routers;
