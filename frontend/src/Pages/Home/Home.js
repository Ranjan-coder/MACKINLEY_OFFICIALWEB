import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Home_css from "./Home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const NavigateTo = useNavigate();
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        loop={true}
        speed={1500}
        className="mySwiper"
        id={Home_css.swiperparent}
        style={{ zIndex: 1 }}
      >
        <SwiperSlide>
          <div className={Home_css.swiper_pannel}>
            <Container>
              <Row className="justify-content-center">
                <Col xl={7}>
                  <div className={Home_css.swiper_pannel_box}>
                    <div className={Home_css.swiper_pannel_title}>
                      Fastest Way to Achieve Success
                    </div>
                    <div className={Home_css.swiper_pannel_cnt}>
                      Mackinlay, established in 2021, is a dynamic IT company
                      with a strong foothold in the HR Tech and BFSI domains.
                      Leveraging two years of expertise, we provide innovative
                      solutions that drive efficiency and excellence in business
                      operations.
                    </div>

                    <button
                      className={Home_css.swiper_pannel_button}
                      onClick={() => {
                        console.log("Navigating to contact page");
                        NavigateTo("/contact");
                      }}
                      style={{ zIndex: 2 }}
                    >
                      Get Started
                    </button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Home_css.swiper_pannel_two}>
            <Container>
              <Row className="justify-content-center">
                <Col xl={7}>
                  <div className={Home_css.swiper_pannel_box}>
                    <div className={Home_css.swiper_pannel_title}>
                      IT Prowess
                    </div>
                    <div className={Home_css.swiper_pannel_cnt}>
                      At Mackinlay, we go beyond trends; we set them. Our team
                      brings cutting-edge technology solutions to life, driving
                      digital transformation and empowering businesses to thrive
                      in the dynamic IT landscape.
                    </div>

                    <button
                      className={Home_css.swiper_pannel_button}
                      onClick={() => {
                        console.log("Navigating to contact page");
                        NavigateTo("/contact");
                      }}
                      style={{ zIndex: 2 }}
                    >
                      Get Started
                    </button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={Home_css.swiper_pannel_three}>
            <Container>
              <Row className="justify-content-center">
                <Col xl={7}>
                  <div className={Home_css.swiper_pannel_box}>
                    <div className={Home_css.swiper_pannel_title}>
                      BFSI Domain Specialists
                    </div>
                    <div className={Home_css.swiper_pannel_cnt}>
                      As your trusted partner in BFSI, we understand the unique
                      challenges of this sector. Our solutions are crafted to
                      ensure operational efficiency and regulatory compliance,
                      making us the go-to choice for BFSI technology needs.
                    </div>

                    <button
                      className={Home_css.swiper_pannel_button}
                      onClick={() => {
                        console.log("Navigating to contact page");
                        NavigateTo("/contact");
                      }}
                      style={{ zIndex: 2 }}
                    >
                      Get Started
                    </button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
