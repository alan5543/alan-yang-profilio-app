import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HomeContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
`

export const HomeBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const HomeVideo = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    filter: brightness(75%);
`

export const HomeContent = styled.div`
    z-index: 3;
    width: 80%;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: end;
`

export const HomeHeader = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: end;
    margin: 0;

    @media screen and (max-width: 768px) {
        font-size: 40px;

    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HomeParagraph = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: end;
    max-width: 42rem;
    margin: 0;

    @media screen and (max-width: 768px) {
        font-size: 24px;

    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HomeBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: end;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`