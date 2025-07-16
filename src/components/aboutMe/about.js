import React from "react";
import "./about.css";
import Person from "../../images/person.jpg";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { personalData } from '../../data/personal'
import { Button } from "@mui/material";
import Resume from "../../documents/Alan_Yang_Resume.pdf"

const About = () => {

    const onResumeClick = () => {
        window.open(Resume)
    }

  return (
    <div className="section" id="about">
      <div className="container">
        <div className="content-section">
          <div className="title">
            <h1 className="titleName">About Me</h1>
          </div>
          <div className="content">
            <h3>{personalData[0].brief}</h3>
            <p>{personalData[0].summary}</p>
          </div>
          <div className="social">
            <div className="socialIconBox">
              <a href={personalData[0].facebook} target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
              <a href={personalData[0].instagram} target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href={personalData[0].youtube} target="_blank" rel="noreferrer">
                <FaYoutube />
              </a>
              <a href={personalData[0].linkedln} target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </div>
            <div className="cvBox">
              <Button  variant="contained" color="primary" className="cvBoxButton" onClick={onResumeClick}>
                Download CV
              </Button>
            </div>
          </div>
        </div>

        <div className="image-section">
          <img src={Person} alt="alan" />
        </div>
      </div>
    </div>
  );
};

export default About;
