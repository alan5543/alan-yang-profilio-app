import React from "react";
import { useTranslation } from "react-i18next";
import "./about.css";
import Person from "../../images/person.jpg";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { personalData } from '../../data/personal'
import { Button } from "@mui/material";
import Resume from "../../documents/Alan_Yang_Resume.pdf"

const About = () => {
  const { t, i18n } = useTranslation();

    const onResumeClick = () => {
        window.open(Resume)
    }
  
  // Select personalData based on current language, fallback to 'en'
  const data = personalData[i18n.language] ? personalData[i18n.language][0] : personalData['en'][0];

  return (
    <div className="section" id="about">
      <div className="container">
        <div className="content-section">
          <div className="title">
            <h1 className="titleName">{t('about.title')}</h1>
          </div>
          <div className="content">
            <h3>{data.brief}</h3>
            <p>{data.summary}</p>
          </div>
          <div className="social">
            <div className="socialIconBox">
              <a href={data.facebook} target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
              <a href={data.instagram} target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href={data.youtube} target="_blank" rel="noreferrer">
                <FaYoutube />
              </a>
              <a href={data.linkedln} target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </div>
            <div className="cvBox">
              <Button  variant="contained" color="primary" className="cvBoxButton" onClick={onResumeClick}>
                {t('about.button')}
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
