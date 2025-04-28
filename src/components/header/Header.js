import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";
import {
  skillsSection,
  projects
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const project = projects.display;
  const viewSkills = skillsSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <img
            src={require("../../assets/images/logo.jpeg")}
            alt="Logo"
            width={150}
            height={150}
          />
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {project && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
