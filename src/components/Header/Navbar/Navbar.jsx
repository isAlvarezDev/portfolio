import "./Navbar.css";
import { useState } from "react";
import { getImageUrl } from "../../../utils";

export const Navbar = ({ translations ,currentLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { tech, project, about, contact } = translations[currentLang]
  return (
    <nav className="navbar">
      <a className="nav-title" href="./" datareplace='IA'>
        <span>IA</span>
      </a>
      <div className="menu">
        <img
          src={
            isMenuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="hamburger icon"
          className="menuBtn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <ul className={`menuItems ${isMenuOpen && 'menuOpen'}`} onClick={() => setIsMenuOpen(false)}>
          <li>
            <a href="#technologies">{tech}</a>
          </li>
          <li>
            <a href="#projects">{project}</a>
          </li>
          <li>
            <a href="#about">{about}</a>
          </li>
          <li>
            <a href="#contact">{contact}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
