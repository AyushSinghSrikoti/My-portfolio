import React, { useState, useEffect } from "react";
import { TiHomeOutline } from "react-icons/ti";
import { Link, Outlet } from "react-router-dom";
import "../css/navbar.css";

export default function Navbar() {
  const [navStatus, setNavStatus] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
          {navStatus || isMobile ? (
            <Link to="/" className="link-style" onClick={() => handleLinkClick(false)}>
              <TiHomeOutline className="home" />
              <span style={{ fontSize: isMobile ? "2.8vh" : "3.8vh", marginLeft: isMobile ? "0.5vh" : "1vh" }}>Ayush</span>
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
          {!isMobile && (
            <Link to="/resume" className="link-style" onClick={() => handleLinkClick(true)}>
              <span>Resume</span>
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}