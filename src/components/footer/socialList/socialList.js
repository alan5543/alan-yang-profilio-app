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

const SocialList = () => {
  return (
    <div className="socialIconContainer">
      <a
        className="socialIcon"
        href={`mailto:${personalData[0].email}?subject = Question to Alan Yang"`}
        target="_blank"
        rel="noreferrer"
      >
        <FaMailBulk />
      </a>
      <a
        className="socialIcon"
        href={personalData[0].facebook}
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare />
      </a>
      <a
        className="socialIcon"
        href={personalData[0].instagram}
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagramSquare />
      </a>
      <a
        className="socialIcon"
        href={personalData[0].youtube}
        target="_blank"
        rel="noreferrer"
      >
        <FaYoutubeSquare />
      </a>
      <a
        className="socialIcon"
        href={personalData[0].linkedln}
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialList;
