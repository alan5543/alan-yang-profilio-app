import React, { useState } from 'react';
import './project.css';
import WebSlider from './webSlider/webSlider';
import YouTubePlayer from './youTubePlayer/YouTubePlayer';
import Popup from './projectItem/Popup';
import { projectData } from '../../data/project';
import { useTranslation } from 'react-i18next';
import { Typography, Box, Button } from '@mui/material';

const Project = () => {
  const { t, i18n } = useTranslation();
  const [openPopup, setOpenPopup] = useState(false);
  
  // Select projectData based on current language, fallback to 'en'
  const data = projectData[i18n.language] || projectData['en'];

  // Hardcoded featured project data
  const currentProject = data.find(project => project.id === "7") || {
    title: "Fallback Project",
    YouTubeLink: "",
    autoplay: false,
    detail: ["Project not found."],
    brief: [],
    link: "",
    DocLink: "",
    TryAndPlayLink: "",
    image: "",
    paragraph: ""
  };

  // Extract videoId from YouTubeLink
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|[&?]v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(currentProject.YouTubeLink);

  // Handlers for popup
  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <div className='projectAppContainer' id="project">
      {/* Existing Project Slider */}
      <div className="projectTitle">
        <h1 className="projectTitleName">{t('project.title')}</h1>
        <h1 className="projectSubtitleName">{t('project.subtitle')}</h1>
      </div>
      
      <WebSlider cards={data} />

      <Box className="featured-project-section">
        <Typography variant="h4" className="featured-project-title">
          {t('project.featuredTitle', { title: currentProject.title })}
        </Typography>
        <Typography variant="body1" className="featured-project-description">
          {currentProject.paragraph}
        </Typography>

        <YouTubePlayer
          videoId={videoId}
          autoplay={currentProject.autoplay}
        />

        <Button
          variant="contained"
          color="info"
          onClick={handleOpenPopup}
          sx={{
            marginTop: '1rem',
            padding: '8px 24px',
            borderRadius: '50px',
            fontWeight: 600,
            textTransform: 'none',
          }}
        >
          {t('project.openProject')}
        </Button>
      </Box>

      {/* Popup Component */}
      <Popup open={openPopup} handleClose={handleClosePopup} info={currentProject} />
    </div>
  );
};

export default Project;