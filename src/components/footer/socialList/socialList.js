import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";
import { personalData } from "../../../data/personal";
import "./socialList.css";
import { useTranslation } from 'react-i18next';


const SocialList = () => {
  const { t, i18n } = useTranslation();

  // Select personalData based on current language, fallback to 'en'
  const data = personalData[i18n.language] ? personalData[i18n.language][0] : personalData['en'][0];

  return (
    <div className="socialIconContainer">
      <a
        className="socialIcon"
        href={`mailto:${data.email}?subject = ${encodeURIComponent(t('footer.emailSubject'))}"`}
        target="_blank"
        rel="noreferrer"
      >
        <FaMailBulk />
      </a>
      <a
        className="socialIcon"
        href={data.facebook}
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare />
      </a>
      <a
        className="socialIcon"
        href={data.instagram}
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagramSquare />
      </a>
      <a
        className="socialIcon"
        href={data.youtube}
        target="_blank"
        rel="noreferrer"
      >
        <FaYoutubeSquare />
      </a>
      <a
        className="socialIcon"
        href={data.linkedln}
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialList;
