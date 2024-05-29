import React, { useContext } from 'react'
import discover from './Discover.module.css'
import hrconnectpro from '../../Assets/hrconnectpro.jpg';
import connectera from '../../Assets/connectera.jpg';
import mediai from '../../Assets/mediAI.jpg';
import globalGuardian from '../../Assets/globalguardian.png';
import { FaArrowRightLong } from "react-icons/fa6";
import dataAnalytics from '../../Assets/DataAnalyticsandBusinessIntelligence.jpg';
import { bucket } from './ProductData';
import { Link } from 'react-router-dom';

const Discover = () => {
  const [data] = useContext(bucket)

  return (
    <div className={discover.__discoverPage}>
      <header className={discover.__header}>
        <h1 className={discover.__headerText}>Dicover Mackinlay</h1>
        <p className={discover.__headerDesc}>Discover Innovation with <strong>HR Connect Pro</strong>, <strong>MediAI Connect</strong>, <strong>Connect-Era</strong>, and <strong>Global Guardian</strong> – Your Gateway to Cutting-Edge Solutions!</p>
        <p className={discover.__headerDesc}>A one-stop shop for innovation! -solutions for every need. Explore now!</p>
      </header>
      <hr />

      <div className={discover.__container}>
        {data?.filter(item => item.cat === 'HRConnectPro')
          .map((item, id) => {
            return (
              <div key={id}>
                <div className={discover.__card} >
                  <img className={discover.__cardImg} src={hrconnectpro} alt="" />
                  <h4 className={discover.__cardTitle}>{item.title.slice(0, 14)} 🧑‍💻</h4>
                  <p className={discover.__cardDescription}>Your comprehensive solution for transforming HR management</p>
                  <Link to={`/discover/${item.cat}`}>
                    <button className={discover.__cardBtn}>
                      <span className={discover.__learnBtn}>Learn More</span>
                      <FaArrowRightLong className={discover.__arrowIcon} />
                    </button>
                  </Link>
                </div>
              </div>
            )
          })}

        {data?.filter(item => item.cat === 'MediAI')
          .map((item, id) => {
            return (
              <div key={id}>
                <div className={discover.__card} >
                  <img className={discover.__cardImg} src={mediai} alt="" />
                  <h4 className={discover.__cardTitle}>{item.title.slice(0, 14)} 🩺</h4>
                  <p className={discover.__cardDescription}>An innovative healthcare platform designed to transform the way medical services are delivered.</p>
                  <Link to={`/discover/${item.cat}`}>
                    <button className={discover.__cardBtn}>
                      <span className={discover.__learnBtn}>Learn More</span>
                      <FaArrowRightLong className={discover.__arrowIcon} />
                    </button>
                  </Link>
                </div>
              </div>
            )
          })}

        {data?.filter(item => item.cat === 'Connect-Era')
          .map((item, id) => {
            return (
              <div key={id}>
                <div className={discover.__card} >
                  <img className={discover.__cardImg} src={connectera} alt="" />
                  <h4 className={discover.__cardTitle}>{item.cat} 💕</h4>
                  <p className={discover.__cardDescription}>a global community where meaningful relationships flourish.</p>
                  <Link to={`/discover/${item.cat}`}>
                    <button className={discover.__cardBtn}>
                      <span className={discover.__learnBtn}>Learn More</span>
                      <FaArrowRightLong className={discover.__arrowIcon} />
                    </button>
                  </Link>
                </div>
              </div>
            )
          })}

        {data?.filter(item => item.cat === 'Global-Guardian')
          .map((item, id) => {
            return (
              <div key={id}>
                <div className={discover.__card} >
                  <img className={discover.__cardImg} src={globalGuardian} alt="" />
                  <h4 className={discover.__cardTitle}>{item.cat} 🛡️</h4>
                  <p className={discover.__cardDescription}>Elevating HR Management to New Heights.</p>
                  <Link to={`/discover/${item.cat}`}>
                    <button className={discover.__cardBtn}>
                      <span className={discover.__learnBtn}>Learn More</span>
                      <FaArrowRightLong className={discover.__arrowIcon} />
                    </button>
                  </Link>
                </div>
              </div>
            )
          })}
      </div>
      {/* <Outlet /> */}

      <div className="__services">
        <p className={discover.__serviceTag}>Consulting Services</p>
        <h1 className={discover.__serviceHead}>Our Services</h1>

        <div className={discover.__serviceContainer}>
          <div className={discover.__serviceCard}>
            <img className={discover.__cardImg} src={dataAnalytics} alt="" />
            <h4 className={discover.__cardTitle}>srthatrjh</h4>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Discover