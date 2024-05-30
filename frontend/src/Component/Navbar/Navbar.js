
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar_css from "./Navbar.module.css";
import officiallogo from "../../Assets/officiallogo.png";
import Hamburgercompo from './Hamburger';


const Navbar = () => {
  const NavigateTo = useNavigate();


  return (
    <>
      <nav className={Navbar_css.navmenu}>
        <div>
          <img
            onClick={() => NavigateTo("/")}
            className={Navbar_css.officelogo}
            src={officiallogo}
            alt="officiallogo"
          />
        </div>

        <div className={Navbar_css.navrouters}>
          <NavLink className={Navbar_css.navrouterlink} to="/about">
            ABOUT US
          </NavLink>

          <NavLink className={Navbar_css.navrouterlink} to="/discover">
            DISCOVER
          </NavLink>

          <NavLink className={Navbar_css.navrouterlink} to="/career">
            CAREER
          </NavLink>

          <NavLink className={Navbar_css.navrouterlink} to="/contact">
            CONTACT US
          </NavLink>
        </div>

        <div className={Navbar_css.navmenuham}>
          <Hamburgercompo />
        </div>

      </nav>
    </>
  );
};

export default Navbar;
