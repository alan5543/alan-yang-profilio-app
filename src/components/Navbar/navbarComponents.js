import styled from "styled-components";
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
    /*background: black;*/
    background: ${({coloredNav}) => (coloredNav ? '#140c14' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 1000px) {
        transition: 0.8s all ease;
    }
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 90%;
`

export const NavLogoContainer = styled.div`
    color: #fff;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`


export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 1000px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    font-size: 1.2rem;
    align-items: center;
    padding: 50px 0 0 0;
`

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%auto;
    cursor: pointer;

    &.active {
        border-bottom: 5px solid #DCD427;
    }
`

export const MobilePhoneTab = styled.div`
    display: none;

    @media screen and (max-width: 1000px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`
