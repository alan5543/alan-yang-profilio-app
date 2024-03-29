import React, {useState} from 'react'
import Video from '../../videos/homeVideo.mp4'
import { HomeContainer, HomeBackground, HomeVideo, HomeContent, HomeHeader, HomeParagraph, HomeBtnWrapper, ArrowForward, ArrowRight } from './homeComponents'
import Typer from '../global/typer/typer'
import { Grow, Button } from '@mui/material'
import metadata from '../../data/metadata.json'
import { Link } from 'react-scroll'

const Home = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }


  return (
    
    <HomeContainer id="home">
        <HomeBackground>
            <HomeVideo autoPlay loop muted src={Video} type='video/mp4' />
        </HomeBackground>
        <Grow  in={true} timeout={2000} style={{ transformOrigin: '0 0 0' }}>
        <HomeContent>
            <HomeParagraph>
                Hello My Name is
            </HomeParagraph>
            <HomeHeader>
                {metadata[0].name}
            </HomeHeader>
            <HomeHeader>
                <Typer position={metadata[0].positions} />
            </HomeHeader>
            <HomeParagraph>
                {metadata[0].intro}
            </HomeParagraph>

            <HomeBtnWrapper>
                <Link to="about"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      >
                    <Button variant="contained" to="signup" onMouseEnter={onHover} onMouseLeave={onHover} size='large' color='primary'>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </Link>
            </HomeBtnWrapper>
        </HomeContent>
        </Grow>
    </HomeContainer>
    
  )
}

export default Home