import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        {/* Resume Button */}
        <li>
          <a
            href="https://drive.google.com/file/d/1kmV14AtGBBt4W6NmPdoPXDGjuVG6aC4r/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
