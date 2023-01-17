import React, { useState } from "react";
import "./Styles/navbar.css";
import {
  FaLinkedinIn,
  FaInstagramSquare,
} from "react-icons/fa";
import {
  FiLogIn
} from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>N</span>oteto
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.linkedin.com/company/blocktiger/"
                >
                <FaLinkedinIn className="linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/blocktiger.vsr?igshid=YmMyMTA2M2Y="
                >
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
             <NavLink to =" /loginpage"><FiLogIn className="FiLogIn" /></NavLink>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;
