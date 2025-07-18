import React from 'react'
import { SidebarContainer, CloseIconContainer, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './sidebarComponents'

const SideBar = ( {isMoblieTabOpen, toggleMoblieTab} ) => {
  return (
    <SidebarContainer isMoblieTabOpen={isMoblieTabOpen} onClick={toggleMoblieTab}>
        <CloseIconContainer onClick={toggleMoblieTab}>
            <CloseIcon />
        </CloseIconContainer>

        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="home" onClick={toggleMoblieTab}>
                    Home
                </SidebarLink>
                <SidebarLink to="about" onClick={toggleMoblieTab}>
                    About Me
                  </SidebarLink>
                  <SidebarLink to="project" onClick={toggleMoblieTab}>
                    Project Showcase
                  </SidebarLink>
                <SidebarLink to="experience" onClick={toggleMoblieTab}>
                   My Pathway
                </SidebarLink>
                  <SidebarLink to="personal" onClick={toggleMoblieTab}>
                    Professional Skills
                </SidebarLink>
                <SidebarLink onClick={toggleMoblieTab}>
                    Contact Me
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default SideBar