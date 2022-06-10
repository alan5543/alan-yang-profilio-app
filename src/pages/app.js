import React, {useState} from 'react'
import Home from '../components/home/home';
import Navbar from '../components/Navbar/navbar'
import SideBar from '../components/Sidebar/sidebar'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import About from '../components/aboutMe/about'
import Skills from '../components/skills/skills';
import Experience from '../components/experience/experience';
import Project from '../components/project/project';
import Footer from '../components/footer/footer';
// import Contact from '../components/contactMe/contact';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#88D1F1',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
      contrastText: '#fff',

    },
  },
});

const App = () => {

  const [isMoblieTabOpen, setIsMoblieTabOpen] = useState(false);

  const toggleMoblieTab = () => {
    setIsMoblieTabOpen(!isMoblieTabOpen);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar toggleMoblieTab={toggleMoblieTab} />
        <SideBar isMoblieTabOpen={isMoblieTabOpen} toggleMoblieTab={toggleMoblieTab} />
        <Home />
        <About />
        <Skills />
        <Experience/>
        <Project/>
        {/* <Contact/> */}
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default App