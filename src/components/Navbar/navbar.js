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
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";


const Navbar = ({ toggleMoblieTab }) => {
  const { t } = useTranslation();
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
    return () => window.removeEventListener("scroll", changeNavColor);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav coloredNav={coloredNav}>
        <NavContainer>
          {/* Navbar Logo */}
          <NavLogoContainer onClick={toggleHome}>
            Alan Yang
          </NavLogoContainer>

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
                {t("nav.home")}
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
                {t("nav.about")}
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
                {t("nav.project")}
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
                {t("nav.experience")}
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
                {t("nav.skills")}
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
                {t("nav.contact")}
              </NavLinks>
            </NavItem>

            <NavItem>
              <LanguageSwitcher />
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
