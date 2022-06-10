import React from 'react'
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import "./footer.css";
import SocialList from './socialList/socialList';


function Copyright(props) {
  return (
    <Typography variant="h6" className='copyrightText' align="center"  {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/" >
        Alan Yang's Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {

  return (
    <div className='footerContainer' id="footer">
      <SocialList/>
      <Copyright sx={{ mt: 1, mb: 0 }} className='copyright' />
    </div>
  )
}

export default Footer