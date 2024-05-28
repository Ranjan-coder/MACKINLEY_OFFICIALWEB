import React from 'react'
import Footer_css from './Footer.module.css'
import locationlogo from '../../Assets/location.png'
import telephone from '../../Assets/telephone.png'
import mail from '../../Assets/mail.png'
import { NavLink } from 'react-router-dom'
import SocialMediaIcons from '../Socialmedia/SocialMediaIcons'

const Footer = () => {
  return (
    <>
      <div className={Footer_css.footerparent}>
        <div className={Footer_css.ftrmaincntn}>
          <div >
            <div className={Footer_css.footerheadingparent}>
              <div className={Footer_css.footercontentheader}>OUR HEADOFFICE</div>
              <div className={Footer_css.widthlink}></div>
            </div>
            <div className={Footer_css.parentimgtext}>
              <div className={Footer_css.ftrimgtext}>
                <img className={Footer_css.locationicon} src={locationlogo} alt='location' />
                <p className={Footer_css.textcolor}>2 New Street, Melvelam, TK, Walajapet, TamilNadu-632513 India</p>
              </div>
              <div className={Footer_css.ftrimgtext}>
                <img className={Footer_css.locationicon} src={telephone} alt='telephone' />
                <p className={Footer_css.textcolor}>+91 88966 19811</p>
              </div>
              <div className={Footer_css.ftrimgtext}>
                <img className={Footer_css.locationicon} src={mail} alt='email' />
                <p className={Footer_css.textcolor}>contactus@mackinlay.in</p>
              </div>
            </div>
          </div>

          <div>
            <div className={Footer_css.footerheadingparent}>
              <div className={Footer_css.footercontentheader}>QUICK LINKS</div>
              <div className={Footer_css.widthlink}></div>
            </div>

            <div className={Footer_css.topnavbarlink}>
              <div className={Footer_css.navrouterlink}>
                <NavLink className={Footer_css.navrouterlink} to='/'>Home</NavLink>
                {/* <div className={Footer_css.widthlink}></div> */}
              </div>
              <div className={Footer_css.navrouterlink}>
                <NavLink className={Footer_css.navrouterlink} to='/about'>About Us</NavLink>
                {/* <div className={Footer_css.widthlink}></div> */}

              </div>
              <div className={Footer_css.navrouterlink}>
                <NavLink className={Footer_css.navrouterlink} to='/discover'>Discover</NavLink>
                {/* <div className={Footer_css.widthlink}></div> */}

              </div>
              <div className={Footer_css.navrouterlink}>
                <NavLink className={Footer_css.navrouterlink} to='/service'>Service</NavLink>
                {/* <div className={Footer_css.widthlink}></div> */}

              </div>
              <div className={Footer_css.navrouterlink}>
                <NavLink className={Footer_css.navrouterlink} to='/career'>Career</NavLink>
                {/* <div className={Footer_css.widthlink}></div> */}
              </div>
              <div className={Footer_css.navrouterlink}>
                <NavLink className={Footer_css.navrouterlink} to='/contact'>Contact Us</NavLink>
                {/* <div className={Footer_css.widthlink}></div> */}
              </div>
            </div>
          </div>

          <div className={Footer_css.newscntnrparent}>
            <div className={Footer_css.footerheadingparent}>
              <div className={Footer_css.footercontentheader}>NEWSLETTER</div>
              <div className={Footer_css.widthlink}></div>
            </div>

            <div className={Footer_css.ftrcntnttextsocial}>
            <p className={Footer_css.ftrnewsltrtext}>Mackinlay, established in 2021, is a dynamic IT company with a strong foothold in the HR Tech and BFSI domains. Leveraging two years of expertise, we provide innovative solutions that drive efficiency and excellence in business operations.</p>
            <SocialMediaIcons />
            </div>
          </div>

        </div>
          <div>
            <div className={Footer_css.ftrcopyright}></div>
            <div className={Footer_css.ftrcopyrighttextparent}>
            <NavLink  className={Footer_css.ftrcopyrighttextsymbol} to='/'>© Copyright © 2024 | Mackinlay,</NavLink> <span className={Footer_css.ftrcopyrighttext}>All Right Reserved.</span>
            </div>
          </div>

      </div>
    </>
  )
}

export default Footer