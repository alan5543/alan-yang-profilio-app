import React, { useEffect, useState } from "react";
import {
  Nav,
  NavContainer,
  NavLogoContainer,
  NavMenu,
  NavItem,
  NavLinks,
  MobilePhoneTab,
} from "./navbarComponents";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll/modules";

const Navbar = ({ toggleMoblieTab }) => {
  const [coloredNav, setColoredNav] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY >= 180) {
      setColoredNav(true);
    } else {
      setColoredNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavColor);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav coloredNav={coloredNav}>
        <NavContainer>
          {/* Navbar Logo */}
          <NavLogoContainer onClick={toggleHome}>Alan Yang</NavLogoContainer>

          {/* Navbar Menu */}
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-90}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-90}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="personal"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-90}
              >
                Personal Skills
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="experience"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-90}
              >
                Experience
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="project"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-90}
              >
                Project Showcase
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="footer"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-90}
              >
                Contact Me
              </NavLinks>
            </NavItem>
          </NavMenu>

          {/* Mobile Phone Icon */}
          <MobilePhoneTab onClick={toggleMoblieTab}>
            <FaBars />
          </MobilePhoneTab>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
