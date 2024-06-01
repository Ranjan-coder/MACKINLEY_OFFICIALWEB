import React, { useContext } from 'react'
import discover from './Discover.module.css'
import hrconnectpro from '../../Assets/hrconnectpro.jpg';
import connectera from '../../Assets/connect.jpg';
import mediai from '../../Assets/mediAI.jpg';
import globalGuardian from '../../Assets/globalguardian.png';
import worldsync from '../../Assets/worldsync.jpeg'
import { FaArrowRightLong } from "react-icons/fa6";
import { bucket } from './ProductData';
import { Link, useNavigate } from 'react-router-dom';
import ServiceCard from './ServicesCard'
import serviceitems from '../../Data/ServicePageData'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

const Discover = () => {
  const navigate = useNavigate()
  const [data] = useContext(bucket)
  const ServiceItems = [];
  for (let i = 0; i < serviceitems.length; i += 4) {
    ServiceItems.push(serviceitems.slice(i, i + 4));
  }
  const handleNavigate = () => {
    navigate('/ask-demo')
  }

  return (
    <div className={discover.__discoverPage}>
      <header className={discover.__header}>
        <h2 className={discover.__headerText}>Dicover Mackinlay</h2>
        <p className={discover.__headerDesc}>Discover Innovation with <strong>HR Connect Pro</strong>, <strong>MediAI Connect</strong>, <strong>Connect-Era</strong>, <strong>Global Guardian</strong> and <strong> WorldSync</strong> – Your Gateway to Cutting-Edge Solutions!</p>
        <p className={discover.__headerDesc}>A one-stop shop for innovation! -solutions for every need. Explore now!</p>
      </header>

      <Swiper
        style={{ padding: "2em 0" }}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true, }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 280,
          },
        }}
      >
        <SwiperSlide>
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
                    <button className={discover.__demoBtn} onClick={handleNavigate}>
                      Ask for a demo
                    </button>
                  </div>
                </div>
              )
            })}
        </SwiperSlide>
        <SwiperSlide>
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
                    <button className={discover.__demoBtn} onClick={handleNavigate}>
                      Ask for a demo
                    </button>
                  </div>
                </div>
              )
            })}
        </SwiperSlide>
        <SwiperSlide>
          {data?.filter(item => item.cat === 'ConnectEra')
            .map((item, id) => {
              return (
                <div key={id}>
                  <div className={discover.__card} >
                    <img className={discover.__cardImg} src={connectera} alt="" />
                    <h4 className={discover.__cardTitle}>{item.cat} 💕</h4>
                    <p className={discover.__cardDescription}>A global community where meaningful relationships flourish.</p>
                    <Link to={`/discover/${item.cat}`}>
                      <button className={discover.__cardBtn}>
                        <span className={discover.__learnBtn}>Learn More</span>
                        <FaArrowRightLong className={discover.__arrowIcon} />
                      </button>
                    </Link>
                    <button className={discover.__demoBtn} onClick={handleNavigate}>
                      Ask for a demo
                    </button>
                  </div>
                </div>
              )
            })}
        </SwiperSlide>
        <SwiperSlide>
          {data?.filter(item => item.cat === 'Global Guardian')
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
                    <button className={discover.__demoBtn} onClick={handleNavigate}>
                      Ask for a demo
                    </button>
                  </div>
                </div>
              )
            })}
        </SwiperSlide>
        <SwiperSlide>
          {data?.filter(item => item.cat === 'WorldSync')
            .map((item, id) => {
              return (
                <div key={id}>
                  <div className={discover.__card} >
                    <img className={discover.__cardImg} src={worldsync} alt="" />
                    <h4 className={discover.__cardTitle}>{item.cat} 🔄️</h4>
                    <p className={discover.__cardDescription}>Your ultimate solution for seamless attendance tracking and payroll processing across the globe.</p>
                    <Link to={`/discover/${item.cat}`}>
                      <button className={discover.__cardBtn}>
                        <span className={discover.__learnBtn}>Learn More</span>
                        <FaArrowRightLong className={discover.__arrowIcon} />
                      </button>
                    </Link>
                    <button className={discover.__demoBtn} onClick={handleNavigate}>
                      Ask for a demo
                    </button>
                  </div>
                </div>
              )
            })}
        </SwiperSlide>
      </Swiper>

      {/* Service Contents ------------------------------------> */}

      <div className={discover.ServicePageContainer}>
        <ServiceCard head="Our Best Services" />
        <p className={discover.ServiceDescription}>At Mackinlay, we are dedicated to providing top-notch UI/UX design and IT services to help your business thrive in the digital world. Our comprehensive service offerings are designed to meet your unique needs and drive your success.
        </p>
        {ServiceItems.map((chunk, index) => (
          <div key={index}>
            <ServiceCard serviceitem={chunk} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Discover
