import React from 'react'
import aboutStyle from "./about.module.css"
import aboutIllustration from "../../Assets/AboutPoster.gif"
import mobileService from "../../Assets/mobile_servicee.png"
import websiteService from "../../Assets/Website_service.png"
import cloudServices from "../../Assets/Cloud_service.png"
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigateTO = useNavigate();
  return (
    <section className={aboutStyle.aboutMain__Container}>

      <div className={`${aboutStyle.about_heroSection} 	 animate__animated animate__fadeIn`}>

        <div className={aboutStyle.heroSection__InfoBox}>
          <h1 className={aboutStyle.heroSection__heading}>About Mackinlay</h1>

          <p className={aboutStyle.heroSection__description}>

            <span className={aboutStyle.__description__para}>
              Founded in 2021, Mackinlay stands at the forefront of the IT industry, delivering innovative solutions that transform the BFSI sector. Our specialization ensures a deep understanding of the intricate details, enabling us to offer customized solutions tailored to our clients' unique needs.
            </span>

            <span className={aboutStyle.__description__para}>
              By leveraging our expertise in HR Tech and BFSI, we streamline operations and enhance business performance through cutting-edge solutions. Our dedicated team combines extensive industry knowledge with technical expertise to achieve outstanding results and deliver maximum value to our clients.
            </span >

            <span className={aboutStyle.__description__para}>
              Our commitment to innovation drives us to continually evolve and adapt in response to the ever-changing landscape of the IT and BFSI industries. At Mackinlay, we prioritize building long-term partnerships with our clients, focusing on their success as a measure of our own. Our solutions are designed not only to meet current challenges but also to anticipate future needs, ensuring sustained growth and competitive advantage.
            </span>

            <span className={aboutStyle.__description__para}>
              With a proven track record of delivering high-impact results, Mackinlay is your trusted partner in navigating the complexities of the digital era, transforming challenges into opportunities for success.
            </span>

          </p>
        </div>

        <div className={aboutStyle.heroSection__posterBox}>
          <img src={aboutIllustration} alt="" className={`${aboutStyle.heroSection__poster} `} />
        </div>

      </div>

      <div className={`${aboutStyle.about__companyDataBox}`}>
        <h2 className={`${aboutStyle.about__SecondaryHeading}`}>Our Company Growth</h2>

        <div className={`${aboutStyle.about__CardData__container}`}>

          <div className={`${aboutStyle.about__dataCard} animate__animated animate__slideInRight`}>
            <span className={`${aboutStyle.dataCard__title}`}>experience</span>
            <span className={`${aboutStyle.dataCard__number}`}>3 years<sup className={`${aboutStyle.dataCard__sign}`}>+</sup></span>
          </div>


          <div className={`${aboutStyle.about__dataCard} animate__animated animate__slideInDown`}>
            <span className={`${aboutStyle.dataCard__title}`}>employees</span>
            <span className={`${aboutStyle.dataCard__number}`}>100<sup className={`${aboutStyle.dataCard__sign}`}>+</sup></span>
          </div>


          <div className={`${aboutStyle.about__dataCard} animate__animated animate__slideInLeft`}>
            <span className={`${aboutStyle.dataCard__title}`}>our Clients</span>
            <span className={`${aboutStyle.dataCard__number}`}>10<sup className={`${aboutStyle.dataCard__sign}`}>+</sup></span>
          </div>


          <div className={`${aboutStyle.about__dataCard} animate__animated animate__slideInUp`}>
            <span className={`${aboutStyle.dataCard__title}`}>Completed Projects</span>
            <span className={`${aboutStyle.dataCard__number}`}>20<sup className={`${aboutStyle.dataCard__sign}`}>+</sup></span>
          </div>


          <div className={`${aboutStyle.about__dataCard} animate__animated animate__slideInRight`}>
            <span className={`${aboutStyle.dataCard__title}`}>Running Projects</span>
            <span className={`${aboutStyle.dataCard__number}`}>5<sup className={`${aboutStyle.dataCard__sign}`}>+</sup></span>
          </div>

        </div>
      </div>

      <div className={`${aboutStyle.about__servicesProvidedBox}`}>

        <h2 className={`${aboutStyle.about__SecondaryHeading} ${aboutStyle.about__SecondaryHeading_TWO}`}>Services we provide</h2>

        <div className={`${aboutStyle.about__serviceCard_Container}`}>

          <div className={`${aboutStyle.about__serviceCard}`}>
            <img src={websiteService} alt='Mobile_Service' className={`${aboutStyle.__serviceCard_Img}`} />
            <h3 className={`${aboutStyle.__serviceCard_Title}`}>Web Development and Design</h3>
            <p className={`${aboutStyle.__serviceCard_desc}`}>Elevate your online presence with our expertly crafted websites, optimized for top-notch performance, user-friendly functionality, and stunning aesthetics. Drive more traffic and conversions with our SEO-optimized designs.</p>
            <div className={`${aboutStyle.about__serviceCardBG}`}></div>
          </div>

          <div className={`${aboutStyle.about__serviceCard}`}>
            <img src={mobileService} alt='Mobile_Service' className={`${aboutStyle.__serviceCard_Img}`} />
            <h3 className={`${aboutStyle.__serviceCard_Title}`}>Mobile App Development</h3>
            <p className={`${aboutStyle.__serviceCard_desc}`}>Captivate your customers with cutting-edge mobile applications designed to deliver exceptional user experiences. Leverage our expertise to create feature-rich, intuitive apps that enhance user engagement and satisfaction.</p>
            <div className={`${aboutStyle.about__serviceCardBG}`}></div>
          </div>

          <div className={`${aboutStyle.about__serviceCard}`}>
          <img src={cloudServices} alt='Mobile_Service' className={`${aboutStyle.__serviceCard_Img}`}/>
            <h3 className={`${aboutStyle.__serviceCard_Title}`}>Cloud Computing Solutions</h3>
            <p className={`${aboutStyle.__serviceCard_desc}`}>Empower your business with our scalable, secure cloud solutions, ensuring seamless operations and efficient data management. Benefit from enhanced flexibility and reduced IT costs with our comprehensive cloud services.</p>
            <div className={`${aboutStyle.about__serviceCardBG}`}></div>

          </div>


        </div>

        <button className={`${aboutStyle.about__MoreServicesButton}`} onClick={() => navigateTO("/service")}>More Services</button>

      </div>
    </section>

  )
}

export default About