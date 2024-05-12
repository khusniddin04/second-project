import React from "react";
import "../styles/footer.css";
import logolight from "../images/logo_light.svg";
import { NavLink } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer_nav">
            <img src={logolight} alt="logolight" />
            <ul className="footer__list">
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">PORTFOLIO</NavLink>
              </li>
              <li>
                <NavLink to="/contact">CONTACT ME</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__icons">
            <FaGithub className="footer_icon" />
            <FaTwitter className="footer_icon" />
            <FaLinkedin className="footer_icon" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
