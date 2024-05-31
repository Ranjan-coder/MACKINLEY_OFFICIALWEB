import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";

import Navbar_style from "../Navbar/Navbar.module.css";

import logo from "../../Assets/officiallogo.png";
import logoName from "../../Assets/officename.png";

function Navebar() {
  const [activeLink, setActiveLink] = useState("/");
  const NavigateTo = useNavigate();

  const handleNavLinkClick = (path) => {
    setActiveLink(path);
    NavigateTo(path);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      id={Navbar_style.navparent}
    >
      <Container>
        <Navbar.Brand className={Navbar_style.logo_offical_offical}>
          <div
            className={Navbar_style.logo_part}
            onClick={() => handleNavLinkClick("/")}
          >
            <div className={Navbar_style.logo_offical}>
              <img
                src={logo}
                alt="logo"
                className={Navbar_style.logo_offical_main}
              />
              <img
                src={logoName}
                alt="logoName"
                className={Navbar_style.logo_offical_name}
              />
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={Navbar_style.nav_flex_part}
        >
          <Nav className={Navbar_style.nav_flex_section}>
            <Nav.Link
              as={NavLink}
              to="/"
              className={`${Navbar_style.nav_flex_home} ${
                activeLink === "/" ? Navbar_style.active : ""
              }`}
              onClick={() => handleNavLinkClick("/")}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className={`${Navbar_style.nav_flex_about} ${
                activeLink === "/about" ? Navbar_style.active : ""
              }`}
              onClick={() => handleNavLinkClick("/about")}
            >
              ABOUT US
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/discover"
              className={`${Navbar_style.nav_flex_discover} ${
                activeLink === "/discover" ? Navbar_style.active : ""
              }`}
              onClick={() => handleNavLinkClick("/discover")}
            >
              DISCOVER
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/career"
              className={`${Navbar_style.nav_flex_career} ${
                activeLink === "/career" ? Navbar_style.active : ""
              }`}
              onClick={() => handleNavLinkClick("/career")}
            >
              CAREER
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className={`${Navbar_style.nav_flex_contact} ${
                activeLink === "/contact" ? Navbar_style.active : ""
              }`}
              onClick={() => handleNavLinkClick("/contact")}
            >
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navebar;
