import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import Video from '../../videos/homeVideo2.mp4'
import Image from '../../images/phone_background.jpg'
import { HomeContainer, HomeBackground, HomeVideo, HomeImage, HomeContent, HomeHeader, HomeParagraph, HomeBtnWrapper, ArrowForward, ArrowRight } from './homeComponents'
import Typer from '../global/typer/typer'
import { Grow, Button } from '@mui/material'
import metadata from '../../data/metadata.json'
import { Link } from 'react-scroll'

const Home = () => {
    const { t, i18n } = useTranslation();
    const [hover, setHover] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // You can adjust this breakpoint
        };
        
        // Set initial value
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  // Select metadata based on current language, fallback to 'en'
  const meta = metadata[i18n.language] ? metadata[i18n.language] : metadata['en'];

  return (
    
    <HomeContainer id="home">
        <HomeBackground>
                {isMobile ? (
                    <HomeImage src={Image} alt="Background" />
                ) : (
                    <HomeVideo autoPlay loop muted src={Video} type='video/mp4' />
                )}
        </HomeBackground>
        <Grow  in={true} timeout={4000} style={{ transformOrigin: '0 0 0' }}>
        <HomeContent>
            <HomeParagraph>
                {t('home.greeting')}
            </HomeParagraph>
            <HomeHeader>
                {meta.name}
            </HomeHeader>
            <HomeHeader>
                 <Typer position={meta.positions} key={i18n.language} />
            </HomeHeader>
            <HomeParagraph>
                {meta.intro}
            </HomeParagraph>

            <HomeBtnWrapper>
                <Link to="about"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      >
            <Button
            variant="contained"
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            size="large"
            sx={{
                // Text styling
                fontSize: '1rem',
                color: 'black', // Text color
                textShadow: 'none',
                // Smooth transition
                transition: 'all 0.3s ease',
                // Optional: Add slight shadow for depth
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
            >
            {t('home.button')} {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
                </Link>
            </HomeBtnWrapper>
        </HomeContent>
        </Grow>
    </HomeContainer>
    
  )
}

export default Home