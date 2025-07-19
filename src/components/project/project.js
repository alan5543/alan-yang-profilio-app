import React from 'react';
import './project.css';
import WebSlider from './webSlider/webSlider';
import { projectData } from '../../data/project';
import { useTranslation } from 'react-i18next';


const Project = () => {
  const { t, i18n } = useTranslation();

  // Select projectData based on current language, fallback to 'en'
  const data = projectData[i18n.language] || projectData['en'];

  return (
    <div className='projectAppContainer' id="project">
      <div className="projectTitle">
        <h1 className="projectTitleName">{t('project.title')}</h1>
        <h1 className="projectSubtitleName">{t('project.subtitle')}</h1>
      </div>
      <WebSlider cards={data} />
    </div>
  );
};

export default Project;