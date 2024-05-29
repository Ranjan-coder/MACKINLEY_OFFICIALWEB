import React from 'react'
import discover from './Discover.module.css'
import hrconnectpro from '../../Assets/hrconnectpro.png';
import connectera from '../../Assets/connectera.jpg';
import mediai from '../../Assets/mediAI.png';
import globalGuardian from '../../Assets/globalguardian.png';
import { FaArrowRightLong } from "react-icons/fa6";
import { Outlet, useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const Discover = () => {
  // const param = useParams()
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/discover/HRConnectPro')
  }

  return (
    <div className={discover.__discoverPage}>
      <header className={discover.__header}>
        <h1 className={discover.__headerText}>Dicover Mackinlay</h1>
        <p className={discover.__headerDesc}>Discover Innovation with HR Connect Pro, MediAI Connect, Connect-Era, and Global Guardian – Your Gateway to Cutting-Edge Solutions!</p>
        <p className={discover.__headerDesc}>A one-stop shop for innovation! -solutions for every need. Explore now!</p>
      </header>
      <hr />

      <div className={discover.__container}>
        <div className={discover.__card} onClick={handleNavigate}>
          <img className={discover.__cardImg} src={hrconnectpro} alt="" />
          <h4>HR Connect Pro 🧑‍💻</h4>
          <p className={discover.__cardDescription}>Your comprehensive solution for transforming HR management</p>
          <FaArrowRightLong className={discover.__arrowIcon} />
        </div>
        <div className={discover.__card} >
          <img className={discover.__cardImg} src={mediai} alt="" />
          <h4>MediAI Connect 🩺</h4>
          <p className={discover.__cardDescription}>an innovative healthcare platform designed to transform the way medical services are delivered.</p>
          <FaArrowRightLong className={discover.__arrowIcon} />
        </div>
        <div className={discover.__card} >
          <img className={discover.__cardImg} src={connectera} alt="" />
          <h4>Connect-Era 💕</h4>
          <p className={discover.__cardDescription}>Elevating HR Management to New Heights</p>
          <FaArrowRightLong className={discover.__arrowIcon} />
        </div>
        <div className={discover.__card} >
          <img className={discover.__cardImg} src={globalGuardian} alt="" />
          <h4>Global Guardian 🛡️</h4>
          <p className={discover.__cardDescription}>Elevating HR Management to New Heights</p>
          <FaArrowRightLong className={discover.__arrowIcon} />
        </div>
      </div>
      <Outlet />

    </div>
  )
}

export default Discover