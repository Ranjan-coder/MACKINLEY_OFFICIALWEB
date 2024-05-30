import React, { useState } from 'react'
import Navbar_css from "./Navbar.module.css";
import { Sling as Hamburger } from 'hamburger-react';
import { NavLink } from 'react-router-dom';

const Hamburgercompo = () => {

    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    };
    return (
        <>
            <nav className={Navbar_css.navmenuham}>
                <div className={Navbar_css.hamburgermenu}>
                    <Hamburger toggled={isOpen} toggle={toggleMenu} />
                </div>
                {isOpen &&
                    <>
                        <div className={`${Navbar_css.navroutersham} ${isOpen ? Navbar_css.showham : ''}`}>
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
                    </>
                }

            </nav>


        </>
    )
}

export default Hamburgercompo