import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Socialmedia_css from './Socialmedia.module.css'
const SocialMediaIcons = () => {
  return (
    <>
    <div className={Socialmedia_css.socialparentcntnr}>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className={Socialmedia_css.socialicon}
      >
        <FaFacebook size={20} color="aliceblue" />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaTwitter size={20} color="aliceblue" />
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaLinkedin size={20} color="aliceblue" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaInstagram size={20} color="aliceblue" />
      </a>
    </div>
    </>
  );
};

export default SocialMediaIcons;
