import React, { useState } from "react";
import "./Styles/navbar.css";

import {
  FaLinkedinIn,
  FaInstagramSquare,
} from "react-icons/fa";
import {SiTwitter} from "react-icons/si";
import {
  FiLogIn
} from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import Login from "../Pages/Login";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src=".\images\Logo.PNG" alt="BlockTiger"></img>
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
              <NavLink to="/Status">Status</NavLink>
            </li>
            <li>
              <NavLink to="/Login">Login</NavLink>
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
            <a href="https://twitter.com/BlockTiger_io">
            <SiTwitter className="SiTwitter" />
            </a>
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
