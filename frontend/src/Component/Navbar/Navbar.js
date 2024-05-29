import React from "react";
import { NavLink } from "react-router-dom";
import Navbar_css from "./Navbar.module.css";

const Navbar = () => {
  return (
        <div className={Navbar_css.navrouterlink}>
          <NavLink className={Navbar_css.navrouterlink} to="/about">
            ABOUT US
          </NavLink>
          <div className={Navbar_css.widthlink}></div>
        </div>

        <div className={Navbar_css.navrouterlink}>
          <NavLink className={Navbar_css.navrouterlink} to="/discover">
            DISCOVER
          </NavLink>
          <div className={Navbar_css.widthlink}></div>
        </div>
        <div className={Navbar_css.navrouterlink}>
          <NavLink className={Navbar_css.navrouterlink} to="/career">
            CAREER
          </NavLink>
          <div className={Navbar_css.widthlink}></div>
        </div>

        <div className={Navbar_css.navrouterlink}>
          <NavLink className={Navbar_css.navrouterlink} to="/contact">
            CONTACT US
          </NavLink>
          <div className={Navbar_css.widthlink}></div>
        </div>
      </div>
  );
};

export default Navbar;
