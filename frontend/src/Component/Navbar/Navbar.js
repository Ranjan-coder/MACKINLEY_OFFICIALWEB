import React from "react";


import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";

import logo from "../../Assets/officiallogo.png";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Mackinlay
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#About">ABOUT US</Nav.Link>
              <Nav.Link href="#link">DISCOVER</Nav.Link>
              <Nav.Link href="#link">CAREER</Nav.Link>
              <Nav.Link href="#link">CONTACT US</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>

const Navbar = () => {
  return (
    <>
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
    </>

  );
}

export default NavBar;
