import React, { useState } from "react";
import { TiHomeOutline } from "react-icons/ti";
import { WiDaySunny } from "react-icons/wi";
import { Link, Outlet } from "react-router-dom";
import "../css/navbar.css";

export default function Navbar() {
  const [navStatus, setNavStatus] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (isNavLink) => {
    setNavStatus(isNavLink);
    scrollToTop();
  };

  return (
    <>
      <div className="navbar-container">
        <div className="left-side">
          {navStatus ? (
            <Link to="/" className="link-style" onClick={() => handleLinkClick(false)}>
              <TiHomeOutline className="home" />
              <span style={{ fontSize: "3.8vh", marginLeft: "1vh" }}>Ayush</span>
            </Link>
          ) : (
            <Link to="/" className="link-style" onClick={() => handleLinkClick(false)}>
              <TiHomeOutline className="home" />
            </Link>
          )}
        </div>
        <div className="right-side">
          <Link to="/about" className="link-style" onClick={() => handleLinkClick(true)}>
            <span>About</span>
          </Link>
          <Link to="/projects" className="link-style" onClick={() => handleLinkClick(true)}>
            <span>Projects</span>
          </Link>
          {/* <Link to="/contacts" className="link-style" onClick={() => handleLinkClick(true)}>
            <span>Contacts</span>
          </Link> */}
          <Link to="/resume" className="link-style" onClick={() => handleLinkClick(true)}>
            <span>Resume</span>
          </Link>
          <span className="mode-toggle">
            <WiDaySunny className="day" />
          </span>
        </div>
      </div>
      <Outlet />
    </>
  );
}
