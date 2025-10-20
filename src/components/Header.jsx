import React from 'react'
import "./Header.css";
import { RiComputerFill } from "react-icons/ri";
import { FaTabletAlt } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Header() {
  return (
    <>
     <nav className="navbar">
        <div className="nav-left">
            <img src="./public/badge.png" alt="Main Logo" class="logo" />
            <h2 className="txt-navbar">+ IMAGINE</h2>
    </div>

    <div className="nav-right">
      <RiComputerFill />
<FaTabletAlt />
      <FaMobileAlt />
<FaShoppingCart />
<IoClose />

     
    </div>
  </nav>
 {/* Second Navbar */}
<nav className="navbar2">
  <div className="logo2-dot">
    <div className="logo2">imagine</div>
    <div className="dot">.</div>
  </div>
  <ul className="nav-links2">
    <li><a href="#">Home</a></li>
    <li><a href="#">Features</a></li>
    <li className="dropdown2">
      <a href="#">About Us ▾</a>
      <ul className="dropdown-menu2">
        <li><a href="#">More Free Templates</a></li>
        <li><a href="#">Our Team</a></li>
        <li><a href="#">More Links</a></li>
      </ul>
    </li>
    <li><a href="#">Testimonials</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Contact</a></li>
</ul>
</nav>
    </>

  )
}

export default Header
