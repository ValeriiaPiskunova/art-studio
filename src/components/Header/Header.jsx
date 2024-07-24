import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import CTAButton from "../CTAButton/CTAButton";
import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <img className="header__logo" src="logo.svg" alt="Logo" />
      <nav className={`header__nav nav ${isOpen ? "nav-open" : ""}`}>
        <ul className="nav__list">
          <li className="nav__list-item">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/services" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/contacts" onClick={toggleMenu}>
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header__btn">
        <CTAButton />
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </header>
  );
};

export default Header;
