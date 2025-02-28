import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/.Monster">Monster SCALE Summit</a>
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="#speakers">Speakers</a>
        <a href="#about">About</a>
        <a href="#agenda">Agenda</a>
        <a href="#register" className="register-button">
          REGISTER
        </a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
