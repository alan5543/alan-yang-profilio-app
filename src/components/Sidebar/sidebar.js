import React from 'react'
import { useTranslation } from "react-i18next";
import { SidebarContainer, CloseIconContainer, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './sidebarComponents'
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const SideBar = ({ isMoblieTabOpen, toggleMoblieTab }) => {
  const { t } = useTranslation();

  return (
    <SidebarContainer
      isMoblieTabOpen={isMoblieTabOpen}
      onClick={toggleMoblieTab}
    >
        <CloseIconContainer onClick={toggleMoblieTab}>
            <CloseIcon />
        </CloseIconContainer>

        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="home" onClick={toggleMoblieTab}>
                    {t("nav.home")}
                </SidebarLink>
                <SidebarLink to="about" onClick={toggleMoblieTab}>
                    {t("nav.about")}
                  </SidebarLink>
                  <SidebarLink to="project" onClick={toggleMoblieTab}>
                    {t("nav.project")}
                  </SidebarLink>
                <SidebarLink to="experience" onClick={toggleMoblieTab}>
                    {t("nav.experience")}
                </SidebarLink>
                  <SidebarLink to="personal" onClick={toggleMoblieTab}>
                    {t("nav.skills")}
                </SidebarLink>
                <SidebarLink to="footer" onClick={toggleMoblieTab}>
                    {t("nav.contact")}
                </SidebarLink>
        </SidebarMenu>
                    <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              width: '100%',
              marginTop: '20px' // Optional spacing
            }}>
              <LanguageSwitcher />
            </div>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default SideBar